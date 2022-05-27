import {CellsComponent} from '@core/CellsComponent';

export class Toolbar extends CellsComponent {
  static className = 'cells__toolbar';

  constructor($root, options) {
    super($root, {
      name: 'Toolbar',
      listeners: [],
      ...options,
    });
  }

  toHTML() {
    return `
      <div class="button">
        <span class="material-icons">
          format_bold
        </span>
      </div>
      <div class="button">
        <span class="material-icons">
          format_italic
        </span>
      </div>
      <div class="button">
              <span class="material-icons">
                  strikethrough_s
              </span>
      </div>
      <div class="button">
              <span class="material-icons">
                  format_align_left
              </span>
      </div>
      <div class="button">
              <span class="material-icons">
                  format_align_center
              </span>
      </div>
      <div class="button">
              <span class="material-icons">
                  format_align_right
              </span>
      </div>
    `;
  }
}
