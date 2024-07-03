import { render, screen } from '@testing-library/react';
import RootLayout from '@/app/layout';
import '@testing-library/jest-dom';

describe('RootLayout', () => {
  it('renders children', () => {
    const { container } = render(
      <RootLayout>
        <div>Test Child</div>
      </RootLayout>
    );

    expect(container.querySelector('div')).toBeInTheDocument();
    expect(container.querySelector('div')).toHaveTextContent('Test Child');
  });
});
