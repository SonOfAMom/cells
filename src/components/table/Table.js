import {tableGroupSelect} from '@/components/table/table.groupSelect';
import {tableResizeHandler} from '@/components/table/table.resize';
import {createTable} from '@/components/table/table.template';
import {isCell, matrix} from '@/components/table/table.utils';
import {TableSelection} from '@/components/table/TableSelection';
import {CellsComponent} from '@core/CellsComponent';
import {$} from '@core/dom';

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
    } else if ( isCell(event) ) {
      const $target = $(event.target);
      if (event.shiftKey) {
        const $cells = matrix(this.selection.$current, $target)
            .map((id) => this.$root.find(`[data-id="${id}"]`));

        this.selection.selectGroup($cells);
      } else {
        tableGroupSelect(this.$root, event, this.selection);
      }
    }
  }

  toHTML() {
    return createTable(50);
  }
}
