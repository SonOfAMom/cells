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
      if (!this[method]) {
        throw new Error(
            `Method ${method} is not implemented in ${this.name} component.`
        );
      }
      this[method] = this[method].bind(this);
      this.$root.on(listener, this[method]);
    });
  }

  removeDOMListeners() {
    this.listeners.forEach((listener) => {
      const method = 'on' + capitalizeFirstLetter(listener);
      this.$root.off(listener, this[method]);
    });
  }
}
