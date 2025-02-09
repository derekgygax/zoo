import { getAPIRequest, sendAPIRequest } from '@/lib/utils/server/api';

global.fetch = jest.fn();

describe('API Utility Functions', () => {
  const url = 'https://api.example.com';
  const defaultValue = { data: 'default' };
  const method = 'POST';
  const body = { key: 'value' };
  const signedToken = 'mockedToken';

  beforeEach(() => {
    jest.clearAllMocks();
    // Suppress console.error and console.log
    jest.spyOn(console, 'error').mockImplementation(() => { });
    jest.spyOn(console, 'log').mockImplementation(() => { });
  });

  afterAll(() => {
    // Restore original console.error and console.log
    (console.error as jest.Mock).mockRestore();
    (console.log as jest.Mock).mockRestore();
  });

  // ----------------------------
  // Tests for getAPIRequest
  // ----------------------------
  describe('getAPIRequest', () => {
    it('fetches data successfully', async () => {
      (fetch as jest.Mock).mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue({ data: 'success' }),
      });

      const result = await getAPIRequest(url, defaultValue, signedToken);
      expect(result).toEqual({ data: 'success' });

      expect(fetch).toHaveBeenCalledWith(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${signedToken}`,
        },
      });
    });

    it('returns default value on failure', async () => {
      (fetch as jest.Mock).mockResolvedValue({
        ok: false,
      });

      const result = await getAPIRequest(url, defaultValue, signedToken);
      expect(result).toEqual(defaultValue);
    });
  });

  // ----------------------------
  // Tests for sendAPIRequest
  // ----------------------------
  describe('sendAPIRequest', () => {
    it('sends a request successfully', async () => {
      (fetch as jest.Mock).mockResolvedValue({
        ok: true,
      });

      await expect(sendAPIRequest(url, method, body)).resolves.toBeUndefined();

      expect(fetch).toHaveBeenCalledWith(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
    });

    it('throws an error when the request fails', async () => {
      (fetch as jest.Mock).mockResolvedValue({
        ok: false,
        status: 500,
        statusText: 'Internal Server Error',
        text: jest.fn().mockResolvedValue('Server Error'),
      });

      await expect(sendAPIRequest(url, method, body)).rejects.toThrow(
        'Error: 500 Internal Server Error - Server Error'
      );

      expect(fetch).toHaveBeenCalledWith(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
    });
  });
});
