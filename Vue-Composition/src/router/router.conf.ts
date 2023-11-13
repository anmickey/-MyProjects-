import type { VueElement } from 'vue';
import type { AppLayoutsEnum } from '@/layouts/layouts.conf';

declare module 'vue-router' {
  interface RouteMeta {
    layout?: AppLayoutsEnum;
    layoutComponent?: VueElement;
  }
}

export enum RouteNamesEnum {
  home = 'home',
  login = 'login',
  restore = 'restore',
  confirmEmai = 'confirmEmail',
  signup = 'signup',
}
