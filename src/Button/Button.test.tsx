import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';  // for the "toBeInTheDocument" matcher
import { Button } from './Button';  // adjust the import to your file structure

describe('Button component', () => {
  it('renders with default kind', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('data-button', 'kind:primary');
  });

  it('renders with secondary kind', () => {
    render(<Button kind="secondary">Click me</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('data-button', 'kind:secondary');
  });

  it('forwards ref', () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<Button ref={ref}>Click me</Button>);
    expect(ref.current).not.toBeNull();
  });

  it('passes through other props', () => {
    render(<Button disabled>Click me</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });
});

