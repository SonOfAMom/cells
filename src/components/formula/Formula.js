import {CellsComponent} from '@core/CellsComponent';

export class Formula extends CellsComponent {
  static className = 'cells__formula';

  constructor($root, options) {
    super($root, {
      name: 'Formula',
      listeners: ['input'],
      ...options,
    });
  }

  onInput(event) {
    const text = event.target.textContent.trim();
    this.$emit('formula:input', text);
  }

  toHTML() {
    return `
      <div class="info">
          <div class="fx"></div>
      </div>
      <div class="input" contenteditable spellcheck="false"></div>
    `;
  }
}
