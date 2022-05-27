class Dom {
  constructor(selector) {
    this.$nativeElement = typeof selector === 'string' ?
      document.querySelector(selector) :
      selector;
  }

  html(html) {
    if (typeof html === 'string') {
      this.$nativeElement.innerHTML = html;
      return this;
    }
    return this.$nativeElement.innerHTML;
  }

  text(text) {
    if (typeof text === 'string') {
      this.$nativeElement.textContent = text;
      return this;
    }
    return this.$nativeElement.textContent.trim();
  }

  clear() {
    this.html('');
    return this;
  }

  append(node) {
    if (node instanceof Dom) {
      node = node.$nativeElement;
    }
    this.$nativeElement.appendChild(node);
    return this;
  }

  on(eventType, callback) {
    this.$nativeElement.addEventListener(eventType, callback);
  }

  off(eventType, callback) {
    this.$nativeElement.removeEventListener(eventType, callback);
  }

  closest(selector) {
    return $(this.$nativeElement.closest(selector));
  }

  getRect() {
    return this.$nativeElement.getBoundingClientRect();
  }

  get data() {
    return this.$nativeElement.dataset;
  }

  find(selector) {
    return $(this.$nativeElement.querySelector(selector));
  }

  findAll(selector) {
    return this.$nativeElement.querySelectorAll(selector);
  }

  css(styles = {}) {
    Object.keys(styles)
        .forEach((key) => {
          this.$nativeElement.style[key] = styles[key];
        });
  }

  addClass(...classNames) {
    this.$nativeElement.classList.add(...classNames);
  }

  removeClass(...classNames) {
    this.$nativeElement.classList.remove(...classNames);
  }

  id(parse) {
    if (parse) {
      const parsed = this.data.id.split('-');
      return {
        row: +parsed[0],
        col: +parsed[1],
      };
    }
    return this.data.id;
  }

  focus() {
    this.$nativeElement.focus();
  }
}

export function $(selector) {
  return new Dom(selector);
}

$.create = (tagName, classes = '') => {
  const el = document.createElement(tagName);
  if (classes) {
    el.classList.add(classes);
  }
  return $(el);
};
