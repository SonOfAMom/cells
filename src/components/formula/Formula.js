import {CellsComponent} from '@core/CellsComponent';
import {$} from '@core/dom';

export class Formula extends CellsComponent {
  static className = 'cells__formula';

  constructor($root, options) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'keydown'],
      ...options,
    });
  }

  init() {
    super.init();

    const $formula = this.$root.find('#formula');
    this.$on('table:current-changed', ($current) => {
      $formula.text($current.text());
    });

    this.$on('table:input', (text) => $formula.text(text));
  }

  onInput(event) {
    this.$emit('formula:input', $(event.target).text());
  }

  onKeydown(event) {
    const {key} = event;
    const keys = ['Enter', 'Tab'];
    if (keys.includes(key)) {
      event.preventDefault();
      this.$emit('formula:special-key', key);
    }
  }

  toHTML() {
    return `
      <div class="info">
          <div class="fx"></div>
      </div>
      <div 
        id="formula" 
        class="input" 
        contenteditable 
        spellcheck="false"
      ></div>
    `;
  }
}
