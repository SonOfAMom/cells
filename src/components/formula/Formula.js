import {CellsComponent} from '@core/CellsComponent';

export class Formula extends CellsComponent {
  static className = 'cells__formula';

  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'click'],
    });
  }

  toHTML() {
    return `
      <div class="info">
          <div class="fx"></div>
      </div>
      <div class="input" contenteditable spellcheck="false"></div>
    `;
  }

  onInput(event) {
    console.log('Formula onInput event:', event);
  }
}
