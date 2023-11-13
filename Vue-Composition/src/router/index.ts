import { AppLayoutsEnum } from '@/layouts/layouts.conf';
import { createRouter, createWebHistory } from 'vue-router';
import { links } from './links';
import { useLoad } from '@/components';
import { loadLayoutMiddleware } from './middleware/loadLayout.middleware';
import { RouteNamesEnum } from './router.conf';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 };
  },
  routes: [
    {
      path: links.HOME_ROUTER,
      name: RouteNamesEnum.home,
      component: () => import(/* webpackChunkName: "Landing" */ '@/views/Landing/Landing.vue'),
      meta: {
        layout: AppLayoutsEnum.landing,
      },
    },

    {
      path: links.LOGIN_ROUTER,
      name: RouteNamesEnum.login,
      component: () => import(/* webpackChunkName: "Login" */ '@/views/Login/SignIn/SignIn.vue'),
      meta: {
        layout: AppLayoutsEnum.login,
      },
    },
    {
      path: links.RESTORE_ROUTER,
      name: RouteNamesEnum.restore,
      component: () => import(/* webpackChunkName: "Restore Pass" */ '@/views/Login/ResotePass/ResotePass.vue'),
      meta: {
        layout: AppLayoutsEnum.login,
      },
    },
    {
      path: links.CONFIRM_EMAIL_ROUTER,
      name: RouteNamesEnum.confirmEmai,
      component: () => import(/* webpackChunkName: "Confirm Email" */ '@/views/Login/ConfirmEmail/ConfirmEmail.vue'),
      meta: {
        layout: AppLayoutsEnum.login,
      },
    },
    {
      path: links.REGISTRATION_ROUTER,
      name: RouteNamesEnum.signup,
      component: () => import(/* webpackChunkName: "SignUp" */ '@/views/Login/SignUp/SignUp.vue'),
      meta: {
        layout: AppLayoutsEnum.login,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const { CHANGE_LOAD, onceExecute, CHANGE_ACTION } = useLoad();
  loadLayoutMiddleware(to);
  if (onceExecute.value) {
    CHANGE_LOAD(true);
    CHANGE_ACTION(false);
  }
  next();
});

router.beforeResolve(() => {
  const { CHANGE_LOAD } = useLoad();
  CHANGE_LOAD(false);
});

export default router;
