import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import Login from './login';

describe('Login', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Login />);
    expect(baseElement).toBeTruthy();
  });

  it('should submit form', async () => {
    render(<Login />);

    const mockData = {
      validEmail: 'email@email.com',
      password: 'password',
    };

    const loginForm = screen.getByTestId('loginForm') as HTMLFormElement;
    const emailInput = screen.getByTestId(
      'loginField_loginForm'
    ) as HTMLInputElement;
    const passwordInput = screen.getByTestId(
      'passwordField_loginForm'
    ) as HTMLInputElement;
    const submitButton = screen.getByTestId(
      'submitButton_loginForm'
    ) as HTMLButtonElement;

    fireEvent.change(emailInput, { target: { value: mockData.validEmail } });
    fireEvent.change(passwordInput, { target: { value: mockData.password } });

    await waitFor(() => fireEvent.click(submitButton));
  });
});
