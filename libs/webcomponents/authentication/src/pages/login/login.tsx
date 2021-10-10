import { BoxWeb, ButtonWeb, TextFieldWeb, TypographyWeb } from '@components';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';

export function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const formRef = useRef(null);

  const handleFormSubmit = (data: any) => {
    console.log(formRef);
  };

  return (
    <BoxWeb
      width="100vw"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <form
        ref={formRef}
        data-testid="loginForm"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <BoxWeb width="500px" padding="15px">
          <BoxWeb width="100%" textAlign="center" mb={{ xs: 2, sm: 6 }}>
            <TypographyWeb variant="h1" fontWeight="500">
              Acesse ou crie uma nova conta
            </TypographyWeb>
          </BoxWeb>

          <BoxWeb mb={{ xs: 1, sm: 3 }}>
            <TextFieldWeb
              testId="loginField_loginForm"
              label="Login"
              type="email"
              inputProps={{
                ...register('email', { required: true }),
              }}
            />
          </BoxWeb>

          <BoxWeb mb={{ xs: 1, sm: 6 }}>
            <TextFieldWeb
              testId="passwordField_loginForm"
              label="Password"
              type="password"
              inputProps={{
                ...register('password', { required: true }),
              }}
            />
          </BoxWeb>

          <BoxWeb display="flex" justifyContent="flex-end">
            <ButtonWeb testId="submitButton_loginForm" type="submit">
              Acessar
            </ButtonWeb>
          </BoxWeb>
        </BoxWeb>
      </form>
    </BoxWeb>
  );
}

export default Login;
