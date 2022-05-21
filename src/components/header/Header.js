import {CellsComponent} from '@core/CellsComponent';

export class Header extends CellsComponent {
  static className = 'cells__header';

  toHTML() {
    return `
      <input type="text" class="title-input" value="New spreadsheet" />
      <div>
          <div class="button">
                  <span class="material-icons">
                      delete_forever
                  </span>
          </div>
          <div class="button">
                  <span class="material-icons">
                      exit_to_app
                  </span>
          </div>
      </div>
    `;
  }
}
