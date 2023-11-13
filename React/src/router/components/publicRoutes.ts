import { links } from './links';
import React from 'react';

const SignIn = React.lazy(
  () => import('../../pages/SignInUp/pages/SignIn/SignIn')
);
const SignUp = React.lazy(
  () => import('../../pages/SignInUp/pages/SingUp/SignUp')
);

export const loginRoutes = [
  { path: links.INLOGIN_ROUTER, element: SignIn },
  { path: links.UPLOGIN_ROUTER, element: SignUp },
];
