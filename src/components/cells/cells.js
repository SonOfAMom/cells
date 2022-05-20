import {$} from '@core/dom';

export class Cells {
  constructor(selector, options) {
    this.$el = document.querySelector(selector);
    this.components = options.components ?? [];
  }

  getRoot() {
    const $root = $.create('div', 'cells');

    this.components.forEach((Component) => {
      const $el = $.create('div', component.className);
      const component = new Component($el);
      $el.innerHTML = component.toHTML();
      $root.appendChild($el);
    });

    return $root;
  }

  render() {
    this.$el.appendChild(this.getRoot());
  }
}
