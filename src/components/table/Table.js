import {tableResizeHandler} from '@/components/table/table.resize';
import {createTable} from '@/components/table/table.template';
import {TableSelection} from '@/components/table/TableSelection';
import {CellsComponent} from '@core/CellsComponent';

export class Table extends CellsComponent {
  static className = 'cells__table';

  constructor($root) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown'],
    });
  }

  init() {
    super.init();
    this.selection = new TableSelection();
    const $cell = this.$root.find('[data-id="1-0"]');
    this.selection.select($cell);
  }

  onMousedown(event) {
    if (event.target.dataset.resize) {
      tableResizeHandler(this.$root, event);
    }
  }

  toHTML() {
    return createTable(50);
  }
}
