import { $ } from '@/components/myJQ/myJQ';

export function useObserve(target: string, elements: string) {
  const options = {
    threshold: 0,
  };

  function call(entries: any) {
    const [entry] = entries;
    if (entry && entry.isIntersecting && entry.intersectionRatio >= options.threshold) {
      $(elements).add('show');
    }
  }

  const observer = new IntersectionObserver(call, options);

  observer.observe($(target).take());
}
