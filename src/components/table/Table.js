// eslint-disable-next-line max-len
import {keyShiftSelection, mouseSelect, nextCell} from '@/components/table/table.selectionTypes';
import {tableResizeHandler} from '@/components/table/table.resize';
import {createTable} from '@/components/table/table.template';
import {isCell} from '@/components/table/table.utils';
import {TableSelection} from '@/components/table/TableSelection';
import {CellsComponent} from '@core/CellsComponent';
import {$} from '@core/dom';

export class Table extends CellsComponent {
  static className = 'cells__table';

  constructor($root, options) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown', 'keydown', 'input'],
      ...options,
    });
  }

  init() {
    super.init();
    this.selection = new TableSelection();

    const $firstCell = this.$root.find('[data-id="1-0"]');
    this.selectCell($firstCell);

    this.$on('formula:input', (text) => {
      this.selection.$current.text(text);
    });

    this.$on('formula:special-key', (key) => {
      const id = this.selection.$current.id(true);
      const $next = this.$root.find(nextCell(key, id));
      this.selectCell($next);
    });
  }

  toHTML() {
    return createTable(50);
  }

  selectCell($cell) {
    this.selection.select($cell);
    this.$emit('table:current-changed', $cell);
  }

  onMousedown(event) {
    if (event.target.dataset.resize) {
      tableResizeHandler(this.$root, event);
    } else if ( isCell(event) ) {
      if (event.shiftKey) {
        keyShiftSelection(this.$root, event, this.selection);
      } else {
        const $current = mouseSelect(this.$root, event, this.selection);
        this.$emit('table:current-changed', $current);
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
      this.selectCell($next);
    }
  }

  onInput(event) {
    this.$emit('table:input', $(event.target).text());
  }

  destroy() {
    super.destroy();
  }
}
