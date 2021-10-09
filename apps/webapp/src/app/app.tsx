import { useHistory } from 'react-router';
import { ButtonWeb } from '@components';

export function App() {
  const history = useHistory();

  const handleLoginClick = () => history.push('/login');

  return <ButtonWeb onClick={handleLoginClick}>Login</ButtonWeb>;
}

export default App;
