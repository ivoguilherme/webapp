import { render, screen, fireEvent } from '@testing-library/react';
import { TextFieldWeb } from './text-field-web';

describe('ButtonWeb', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TextFieldWeb label="Text field" />);

    expect(baseElement).toBeTruthy();
  });

  it('should calls onClick prop when clicked', () => {
    const handleClick = jest.fn();
    const testId = 'text-field';
    const label = 'Text field';

    render(
      <TextFieldWeb testId={testId} label={label} onClick={handleClick} />
    );
    const input = screen.getByTestId(testId);

    fireEvent.click(input);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should call onChange and change input value', () => {
    const handleChange = jest.fn();
    const testId = 'text-field';
    const inputText = 'input text';
    const otherInputText = 'other input text';

    render(
      <TextFieldWeb testId={testId} label="Input" onChange={handleChange} />
    );
    const input = screen.getByTestId(testId) as HTMLInputElement;

    fireEvent.change(input, { target: { value: inputText } });
    expect(handleChange).toBeCalled();
    expect(input.value).toBe(inputText);

    fireEvent.change(input, { target: { value: otherInputText } });
    expect(handleChange).toBeCalled();
    expect(input.value).toBe(otherInputText);
  });

  it('should call onBlur when clicking outside the component', () => {
    const handleBlur = jest.fn();
    const testId = 'text-field';

    render(<TextFieldWeb testId={testId} label="Input" onBlur={handleBlur} />);
    const input = screen.getByTestId(testId) as HTMLInputElement;

    fireEvent.blur(input);
    expect(handleBlur).toHaveBeenCalledTimes(1);
  });
});
