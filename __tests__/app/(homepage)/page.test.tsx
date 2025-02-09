import { render, screen } from '@testing-library/react';
import HomePage from '@/app/(homepage)/page';

describe('HomePage', () => {
  it('renders a div containing "ZOO"', () => {
    render(<HomePage />);

    const div = screen.getByText('ZOO');

    expect(div).toBeInTheDocument();
    expect(div.tagName).toBe('DIV'); // Ensure it's a div
  });
});


// import { render, screen } from '@testing-library/react'
// import HomePage from '@/app/(homepage)/page'

// describe('Page', () => {
//   it('renders a heading', () => {
//     render(<HomePage />)

//     const heading = screen.getByRole('heading', { level: 1 })

//     expect(heading).toBeInTheDocument()
//     expect(heading).toHaveTextContent('ZOO');
//   })
// })