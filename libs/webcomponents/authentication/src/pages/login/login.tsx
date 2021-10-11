import { BoxWeb, TypographyWeb } from '@components';
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
      <BoxWeb width="500px" padding="15px">
        <BoxWeb width="100%" textAlign="center" mb={{ xs: 2, sm: 6 }}>
          <TypographyWeb variant="h1" fontWeight="500">
            Acesse ou crie uma nova conta
          </TypographyWeb>
        </BoxWeb>
        <LoginForm onSubmit={handleFormSubmit} />
      </BoxWeb>
    </BoxWeb>
  );
}

export default Login;
