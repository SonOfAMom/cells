import {createTable} from '@/components/table/table.template';
import {CellsComponent} from '@core/CellsComponent';

export class Table extends CellsComponent {
  static className = 'cells__table';

  toHTML() {
    return createTable(50);
  }
}
