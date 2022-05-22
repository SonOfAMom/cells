import {createTable} from '@/components/table/table.template';
import {CellsComponent} from '@core/CellsComponent';

export class Table extends CellsComponent {
  static className = 'cells__table';

  constructor($root) {
    super($root, {
      name: 'Table',
      listeners: ['click', 'mousedown', 'mouseup'],
    });
  }

  onClick(event) {
    console.log('Click on table');
  }

  onMousedown(event) {
    console.log(event.target);
  }

  onMouseup(event) {
    console.log('Mouseup on table');
  }

  toHTML() {
    return createTable(50);
  }
}
