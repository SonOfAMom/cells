import {capitalizeFirstLetter} from '@core/utils';

export class DOMListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error('No $root provided to DOMListener.');
    }
    this.$root = $root;
    this.listeners = listeners;
  }

  initDOMListeners() {
    this.listeners.forEach((listener) => {
      const method = 'on' + capitalizeFirstLetter(listener);
      // console.log(this);
      // console.log(this['onInput']);
      // console.log(this.onInput);
      this.$root.on(listener, this[method]);
    });
  }

  removeDOMListeners() {

  }
}
