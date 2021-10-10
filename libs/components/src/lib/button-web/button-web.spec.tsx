import { render, screen, fireEvent } from '@testing-library/react';
import { ButtonWeb } from './button-web';

describe('ButtonWeb', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ButtonWeb>Click</ButtonWeb>);

    expect(baseElement).toBeTruthy();
  });

  it('should select button by testId prop', () => {
    const testId = 'button-test';

    render(<ButtonWeb testId={testId}>Click</ButtonWeb>);
    const button = screen.getByTestId(testId);

    expect(button).toBeTruthy();
  });

  it('should calls onClick prop when clicked', () => {
    const handleClick = jest.fn();

    render(<ButtonWeb onClick={handleClick}>Click</ButtonWeb>);
    const button = screen.getByText(/click/i);

    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
