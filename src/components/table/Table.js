import {createTable} from '@/components/table/table.template';
import {CellsComponent} from '@core/CellsComponent';

export class Table extends CellsComponent {
  static className = 'cells__table';

  constructor($root) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown'],
    });
  }

  onMousedown(event) {
    if (event.target.dataset.resize) {
      console.log('Resize:', event.target);
    }
  }

  toHTML() {
    return createTable(50);
  }
}
