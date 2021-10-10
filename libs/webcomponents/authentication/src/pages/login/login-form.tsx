import { useForm } from 'react-hook-form';
import { BoxWeb, TypographyWeb, TextFieldWeb, ButtonWeb } from '@components';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
  .object({
    email: yup
      .string()
      .email('Informe um e-mail válido')
      .required('E-mail precisa ser preenchido'),
    password: yup.string().required('Senha precisa ser preenchida'),
  })
  .required();

export const LoginForm = ({ onSubmit }: { onSubmit(data: any): void }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  return (
    <form data-testid="loginForm" onSubmit={handleSubmit(onSubmit)}>
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
            error={Boolean(errors.email)}
            helperText={errors.email && errors.email?.message}
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
            error={Boolean(errors.password)}
            helperText={errors.password && errors.password?.message}
            autoComplete="current-password"
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
  );
};
