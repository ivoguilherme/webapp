import { Authentication } from '@webcomponents';
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
    component: Authentication,
  },
];

export default function Routes() {
  return (
    <Router>
      <Switch>
        {routes.map((props) => (
          <Route key={props.path} {...props} />
        ))}
      </Switch>
    </Router>
  );
}
