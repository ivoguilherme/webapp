import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { LoginForm } from './login-form';

describe('Login', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LoginForm onSubmit={jest.fn()} />);
    expect(baseElement).toBeTruthy();
  });

  it('should submit form', async () => {
    const mockHandleSubmit = jest.fn();

    render(<LoginForm onSubmit={mockHandleSubmit} />);

    const mockData = {
      validEmail: 'email@email.com',
      password: 'password',
    };

    const emailInput = screen.getByTestId(
      'loginField_loginForm'
    ) as HTMLInputElement;
    const passwordInput = screen.getByTestId(
      'passwordField_loginForm'
    ) as HTMLInputElement;
    const submitButton = screen.getByTestId(
      'submitButton_loginForm'
    ) as HTMLButtonElement;

    await act(async () => {
      fireEvent.change(emailInput, { target: { value: mockData.validEmail } });
      fireEvent.change(passwordInput, { target: { value: mockData.password } });
    });

    await act(async () => {
      fireEvent.click(submitButton);
    });

    expect(emailInput.value).toEqual(mockData.validEmail);
    expect(passwordInput.value).toEqual(mockData.password);
    expect(mockHandleSubmit).toBeCalled();
  });
});
