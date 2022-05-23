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
      const resizeType = $resizer.data.resize;

      const cellsToResize = this.$root.findAll(`[data-col="${id}"]`);

      document.onmousemove = (e) => {
        if (resizeType === 'col') {
          const delta = e.pageX - rect.right;
          const newWidth = Math.floor(rect.width + delta) + 'px';
          cellsToResize.forEach((el) => el.style.width = newWidth);
        } else {
          const delta = e.pageY - rect.bottom;
          const newHeight = Math.floor(rect.height + delta) + 'px';
          $parent.css({height: newHeight});
        }
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
