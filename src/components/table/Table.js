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
      listeners: ['mousedown', 'keydown'],
    });
  }

  init() {
    super.init();
    this.selection = new TableSelection();
  }

  toHTML() {
    return createTable(50);
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

  onKeydown(event) {
    const keys = [
      'Enter',
      'Tab',
      'ArrowUp',
      'ArrowRight',
      'ArrowDown',
      'ArrowLeft',
    ];
    const {key} = event;

    if ( keys.includes(key) && !event.shiftKey ) {
      event.preventDefault();
      const id = this.selection.$current.id(true);
      const $next = this.$root.find(nextCell(key, id));
      this.selection.select($next);
    }
  }
}

function nextCell(key, {row, col}) {
  const TOP_BORDER = 1;
  const LEFT_BORDER = 0;
  const RIGHT_BORDER = 25;
  const BOTTOM_BORDER = 50;
  switch (key) {
    case 'Enter':
    case 'ArrowDown':
      row = row + 1 > BOTTOM_BORDER ? BOTTOM_BORDER : row + 1;
      break;
    case 'Tab':
    case 'ArrowRight':
      col = col + 1 > RIGHT_BORDER ? RIGHT_BORDER : col + 1;
      break;
    case 'ArrowUp':
      row = row - 1 < TOP_BORDER ? TOP_BORDER : row - 1;
      break;
    case 'ArrowLeft':
      col = col - 1 < LEFT_BORDER ? LEFT_BORDER : col - 1;
      break;
  }
  return `[data-id="${row}-${col}"]`;
}
