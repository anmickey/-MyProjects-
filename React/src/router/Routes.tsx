import { Navigate, Route, Routes } from 'react-router-dom';
import { links, loginRoutes } from './index';
import Home from '../pages/Home/Home';
import { Layout, LayoutLogin } from '../components';

export default function Routers() {
  return (
    <Routes>
      <Route path={links.LOGIN_ROUTER} element={<LayoutLogin />}>
        {loginRoutes.map((item) => {
          return (
            <Route
              key={item.path}
              element={<item.element />}
              path={item.path}
            />
          );
        })}
      </Route>
      <Route path='/' element={<Layout />}>
        <Route element={<Navigate to={links.HOME_ROUTER} replace />} path='*' />
        <Route element={<Home />} index />
      </Route>
    </Routes>
  );
}
