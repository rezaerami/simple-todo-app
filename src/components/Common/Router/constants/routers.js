import {Foo, Bar} from 'components/Pages';

import routes from './routes';

const routers = [
  {
    path: routes.foo,
    exact: true,
    component: Foo,
  },
  {
    path: routes.bar,
    exact: true,
    component: Bar,
  },
];

export default routers;
