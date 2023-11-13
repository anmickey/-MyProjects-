export enum AppLayoutsEnum {
  landing = 'landing',
  login = 'login',
  main = 'main',
  error = 'error',
}

export const AppLayoutToFileMap: Record<AppLayoutsEnum, string> = {
  landing: 'AppLayoutLanding',
  login: 'AppLayoutLogin',
  main: 'AppLayoutMain',
  error: 'AppLayoutError',
};
