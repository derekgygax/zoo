import { GET } from '@/app/api/auth/callback/route';
import { NextResponse } from 'next/server';

global.fetch = jest.fn();

describe('GET /api/auth/callback', () => {
  const requestUrl = 'https://example.com/api/auth/callback?code=mockCode';
  const req = new Request(requestUrl);

  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(NextResponse, 'redirect').mockReturnValue(new NextResponse(null, { status: 302 }));
  });

  it('redirects to login with error if code is missing', async () => {
    const requestWithoutCode = new Request('https://example.com/api/auth/callback');

    const response = await GET(requestWithoutCode);
    expect(NextResponse.redirect).toHaveBeenCalledWith('/login?error=NoCode');
    expect(response.status).toBe(302);
  });

  it('redirects to login with error if token exchange fails', async () => {
    (fetch as jest.Mock).mockResolvedValue({ ok: false });

    const response = await GET(req);
    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining('/protocol/openid-connect/token'),
      expect.any(Object)
    );
    expect(NextResponse.redirect).toHaveBeenCalledWith('/auth/login?error=TokenError');
    expect(response.status).toBe(302);
  });

  it('sets authentication cookies and redirects on success', async () => {
    const tokenData = {
      access_token: 'mockAccessToken',
      refresh_token: 'mockRefreshToken',
    };

    (fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(tokenData),
    });

    const response = await GET(req);

    expect(fetch).toHaveBeenCalled();
    expect(response.headers.get('set-cookie')).toContain('keycloak_token=mockAccessToken');
    expect(response.headers.get('set-cookie')).toContain('keycloak_refresh_token=mockRefreshToken');
    expect(response.status).toBe(302);
  });
});
