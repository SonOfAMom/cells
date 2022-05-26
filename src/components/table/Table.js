// eslint-disable-next-line max-len
import {keyShiftSelection, mouseSelect} from '@/components/table/table.selectionTypes';
import {tableResizeHandler} from '@/components/table/table.resize';
import {createTable} from '@/components/table/table.template';
import {isCell} from '@/components/table/table.utils';
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
  }

  onMousedown(event) {
    if (event.target.dataset.resize) {
      tableResizeHandler(this.$root, event);
    } else if ( isCell(event) ) {
      if (event.shiftKey) {
        keyShiftSelection(this.$root, event, this.selection);
      } else {
        mouseSelect(this.$root, event, this.selection);
      }
    }
  }

  toHTML() {
    return createTable(50);
  }
}
