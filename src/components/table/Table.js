import {createTable} from '@/components/table/table.template';
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

  onMousedown(event) {
    if (event.target.dataset.resize) {
      const $resizer = $(event.target);
      const $parent = $resizer.closest('[data-type="resizable"]');
      const rect = $parent.getRect();
      const id = $parent.data.col;

      const cellsToResize = this.$root.findAll(`[data-col="${id}"]`)
      console.log(id);

      document.onmousemove = (e) => {
        const delta = Math.floor(e.pageX - rect.right);
        const newWidth = (rect.width + delta) + 'px';
        $parent.$nativeElement.style.width = newWidth;
        cellsToResize.forEach((el) => el.style.width = newWidth);
      };

      document.onmouseup = () => {
        document.onmousemove = null;
      };
    }
  }

  toHTML() {
    return createTable(50);
  }
}
