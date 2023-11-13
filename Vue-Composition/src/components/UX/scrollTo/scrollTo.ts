import { $ } from '@/components/myJQ/myJQ';

export function scrollTo(where: string, behavior = false) {
  const el = ($(`div[data-below=${where}]`)?.take() as HTMLElement)?.getBoundingClientRect().top + window.pageYOffset;

  if (el && behavior) window.scrollTo({ top: +el, behavior: 'smooth' });
  else if (el) window.scrollTo({ top: +el, behavior: 'smooth' });
}
