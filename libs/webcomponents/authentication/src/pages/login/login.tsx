import { BoxWeb } from '@components';
import { useForm } from 'react-hook-form';
import { LoginForm } from './login-form';

export function Login() {
  const handleFormSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <BoxWeb
      width="100vw"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <LoginForm onSubmit={handleFormSubmit} />
    </BoxWeb>
  );
}

export default Login;
