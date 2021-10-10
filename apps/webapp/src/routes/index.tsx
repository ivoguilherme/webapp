import { Login } from '@authentication';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export type RouterProps = {
  exact?: boolean;
  path: string;
  component: any;
};

const routes: RouterProps[] = [
  {
    exact: true,
    path: '/',
    component: Login,
  },
];

export default function Routes() {
  return (
    <Router>
      <Switch>
        {routes.map((props) => (
          <Route {...props} />
        ))}
      </Switch>
    </Router>
  );
}
