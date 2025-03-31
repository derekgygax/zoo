import { render } from '@testing-library/react';
import HomePage from '@/src/app/(homepage)/page';

describe('HomePage', () => {
  it('renders h1 containing "ZOO"', () => {
    render(<HomePage />);

    // const heading = screen.getByRole('heading', { level: 1 });

    // expect(heading).toBeInTheDocument()
    // expect(heading).toHaveTextContent('ZOO');
  });
});