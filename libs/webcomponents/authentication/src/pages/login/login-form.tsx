import { useForm } from 'react-hook-form';
import { Box, TextField, Button } from '@material-ui/core';
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
      <Box mb={{ xs: 1, sm: 3 }}>
        <TextField
          label="Login"
          error={Boolean(errors.email)}
          helperText={errors.email && errors.email?.message}
          inputProps={{
            'data-testid': 'loginField_loginForm',
            ...register('email', { required: true }),
          }}
        />
      </Box>

      <Box mb={{ xs: 1, sm: 6 }}>
        <TextField
          label="Password"
          type="password"
          error={Boolean(errors.password)}
          helperText={errors.password && errors.password?.message}
          autoComplete="current-password"
          inputProps={{
            'data-testid': 'passwordField_loginForm',
            ...register('password', { required: true }),
          }}
        />
      </Box>

      <Box display="flex" justifyContent="flex-end">
        <Button data-testid="submitButton_loginForm" type="submit">
          Acessar
        </Button>
      </Box>
    </form>
  );
};
