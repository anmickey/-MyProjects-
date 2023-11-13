import type { RouteLocationNormalized } from 'vue-router';
import { AppLayoutsEnum, AppLayoutToFileMap } from '@/layouts/layouts.conf';

export async function loadLayoutMiddleware(route: RouteLocationNormalized): Promise<void> {
  const { layout } = route.meta;
  const normalizedLayoutName = layout || AppLayoutsEnum.landing;
  const fileName = AppLayoutToFileMap[normalizedLayoutName];

  const component = await import(`@/layouts/${fileName}.vue`);

  route.meta.layoutComponent = component.default;
}
