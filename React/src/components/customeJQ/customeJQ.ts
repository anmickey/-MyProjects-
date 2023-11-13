export class JQ {
  private el: HTMLElement[];

  constructor(arg: string | HTMLElement | HTMLElement[]) {
    this.el = this.toArray(arg);
    this.prev = this.prev.bind(this);
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
    this.toArray = this.toArray.bind(this);
    this.toggle = this.toggle.bind(this);
    this.next = this.next.bind(this);
    this.siblings = this.siblings.bind(this);
  }

  toArray(arg) {
    let target: HTMLElement[] = [];

    if (typeof arg == 'string') {
      arg.split(',').map((item) => {
        target.push(
          ...(Array.from(document.querySelectorAll(item)) as HTMLElement[])
        );
      });
    } else if (Array.isArray(arg)) {
      target = arg;
    } else if (arg?.nodeType == 1) {
      target.push(arg);
    }

    return target;
  }

  take() {
    return this.el[0];
  }

  add(className: string) {
    this.el.map((item) => {
      item.classList.add(className);
    });
  }

  remove(className: string) {
    this.el.map((item) => {
      item.classList.remove(className);
    });
  }

  toggle(className: string) {
    this.el.map((item) => {
      item.classList.toggle(className);
    });
  }

  has(className: string) {
    if (this.el.length > 1) {
      const arr = this.el.filter((item) => {
        return item.classList.contains(className);
      });
      if (arr.length > 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return this.el[0].classList.contains(className);
    }
  }

  prev(sib?: boolean) {
    const siblings: HTMLElement[] = [];

    for (const item of this.el) {
      let target = item;
      while (target.previousSibling) {
        target = target.previousSibling as HTMLElement;

        target.nodeType == 1 && siblings.push(target);
      }
    }
    if (sib) {
      return siblings;
    }

    return customeJQ(siblings);
  }

  next(sib?: boolean) {
    const siblings: HTMLElement[] = [];
    for (const item of this.el) {
      let target = item;
      while (target.nextSibling) {
        target = target.nextSibling as HTMLElement;
        target.nodeType == 1 && siblings.push(target);
      }
    }
    if (sib) {
      return siblings;
    }
    return customeJQ(siblings);
  }
  siblings() {
    const siblings: HTMLElement[] = [];
    siblings.push(...(this.prev(true) as HTMLElement[]));
    siblings.push(...(this.next(true) as HTMLElement[]));
    return customeJQ(siblings);
  }

  focus() {
    this.el[0].focus();
  }

  style(key: string, value: string) {
    this.el.map((item) => {
      if (+parseFloat(value)) {
        item.style[key] = /px|%|vh|em|vw/.test(value) ? value : value + 'px';
      } else {
        item.style[key] = value;
      }
    });
  }

  attr(key: string, value: string) {
    this.el.map((item) => {
      if (value) item.setAttribute(key, value);
      else item.getAttribute(key);
    });
  }
}

function customeJQ(arg: string | HTMLElement | HTMLElement[]) {
  const el = arg;
  return new JQ(el);
}

export { customeJQ as $ };
