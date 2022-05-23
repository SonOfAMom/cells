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
      let newWidth;

      $resizer.css({opacity: 1});
      const cellsToResize = this.$root.findAll(`[data-col="${id}"]`);

      document.onmousemove = (e) => {
        if (resizeType === 'col') {
          const delta = e.pageX - rect.right;
          $resizer.css({right: -delta + 'px'});
          newWidth = Math.max(Math.floor(rect.width + delta + 1), 0);
        } else {
          const delta = e.pageY - rect.bottom;
          const newHeight = Math.floor(rect.height + delta) + 'px';
          $parent.css({height: newHeight});
        }
      };

      document.onmouseup = () => {
        document.onmousemove = null;
        document.onmouseup = null;

        $resizer.css({opacity: 0, right: '-1px'});
        cellsToResize.forEach((el) => el.style.width = newWidth + 'px');
      };
    }
  }

  toHTML() {
    return createTable(50);
  }
}
