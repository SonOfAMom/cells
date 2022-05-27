import {DOMListener} from '@core/DOMListener';

export class CellsComponent extends DOMListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name ?? '';
    this.emitter = options.emitter;
    this.unsubscribers = [];
  }
  /**
   * Returns component template.
   * @return {string} HTML.
   */
  toHTML() {
    return '';
  }

  $emit(event, ...args) {
    this.emitter.emit(event, ...args);
  }

  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn);
    this.unsubscribers.push(unsub);
  }

  init() {
    this.initDOMListeners();
  }

  destroy() {
    this.removeDOMListeners();
    this.unsubscribers.forEach( (unsub) => unsub() );
  }
}
