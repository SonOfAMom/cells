import {CellsComponent} from '@core/CellsComponent';

export class Formula extends CellsComponent {
  static className = 'cells__formula';

  toHTML() {
    return `
      <div class="info">
          <div class="fx"></div>
      </div>
      <div class="input" contenteditable spellcheck="false"></div>
    `;
  }
}
