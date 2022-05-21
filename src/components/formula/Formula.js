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
    console.log(this.$root);
    console.log('Formula onInput event:', event.target.textContent.trim());
  }

  onClick(event) {
    console.log(this.$root);
    console.log('Formula onClick event:', event);
  }
}
