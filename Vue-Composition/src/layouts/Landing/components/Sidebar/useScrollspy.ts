import { $ } from '@/components/myJQ/myJQ';

export function scrollspy(right: boolean) {
  let scrollAll = 0;

  const spy = () => {
    const scrollTop = window.pageYOffset;
    if (right) {
      if (scrollTop > 200 && scrollTop >= scrollAll) {
        $('.sidebar').style('transform', 'rotate(-90deg) translateY(-100%)');
        $('.sidebar.right').style('transform', 'rotate(90deg) translateY(-100%)');
        $('.header').style('transform', 'translateY(-100%)');
      } else {
        $('.sidebar').style('transform', 'rotate(-90deg) translateY(0%)');
        $('.sidebar.right').style('transform', 'rotate(90deg) translateY(0%)');
        $('.header').style('transform', 'translateY(0%)');
      }
    }
    scrollAll = +scrollTop;
  };

  return { spy };
}

export function shadowSidebar() {
  const width = document.documentElement.clientWidth;

  if (width < 1000) {
    $('.sidebar').style('display', 'none');
  } else {
    $('.sidebar').style('display', 'block');
  }
}
