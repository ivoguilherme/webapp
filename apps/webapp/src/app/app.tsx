import { Button } from '@material-ui/core';
import { useHistory } from 'react-router';

export function App() {
  const history = useHistory();

  const handleLoginClick = () => history.push('/login');

  return <Button onClick={handleLoginClick}>Login</Button>;
}

export default App;
