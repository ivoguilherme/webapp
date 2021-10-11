import { Box, Typography } from '@material-ui/core';
import { useStepContext } from '../../providers/StepProvider';
import { LoginForm } from './login-form';

export function Login() {
  const { navigate } = useStepContext();

  const handleFormSubmit = (data: any) => {
    console.log(data);

    if (data) navigate('register');
  };

  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box width="500px" padding="15px">
        <Box width="100%" textAlign="center" mb={{ xs: 2, sm: 6 }}>
          <Typography variant="h1" fontWeight="500">
            Acesse ou crie uma nova conta
          </Typography>
        </Box>
        <LoginForm onSubmit={handleFormSubmit} />
      </Box>
    </Box>
  );
}

export default Login;
