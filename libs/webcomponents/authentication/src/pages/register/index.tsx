import { Button } from '@material-ui/core';
import { useStepContext } from '../../providers/StepProvider';

export function Register() {
  const { navigate } = useStepContext();

  return <Button onClick={() => navigate('login')}>Previous</Button>;
}
