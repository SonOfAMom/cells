import {DOMListener} from '@core/DOMListener';

export class CellsComponent extends DOMListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
  }
  /**
   * Returns component template.
   * @return {string} HTML.
   */
  toHTML() {
    return '';
  }

  init() {
    this.initDOMListeners();
  }
}
