import { Authentication } from '@authentication';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from '../app/app';

export type RouterProps = {
  exact?: boolean;
  path: string;
  component: any;
};

const routes: RouterProps[] = [
  {
    exact: true,
    path: '/',
    component: App,
  },
  {
    exact: true,
    path: '/login',
    component: Authentication,
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
