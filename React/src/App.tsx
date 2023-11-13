import React, { useEffect, Suspense } from 'react';
import { Loading } from './components';
import Routers from './router/Routes';
import {
  userCheckHTTP,
  useAppDispatch,
  getLangHTTP,
  useAppSelector,
  selectLang,
} from './store';
import './style/layouts/_container.scss';

const App: React.FC = (): JSX.Element => {
  const { isAuth } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const fetchingLang = async () => {
    dispatch(getLangHTTP());
  };

  useEffect(() => {
    const localLang = localStorage.getItem('lang');

    dispatch(userCheckHTTP());

    if (isAuth) fetchingLang();
    else if (localLang) dispatch(selectLang(localLang as string));
  }, []);

  useEffect(() => {
    if (isAuth) fetchingLang();
  }, [isAuth]);

  return (
    <Suspense fallback={<Loading />}>
      <Routers />
    </Suspense>
  );
};

export default App;
