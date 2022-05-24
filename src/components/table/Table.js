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
      const resizeType = $resizer.data.resize;
      const rect = $parent.getRect();
      let delta;
      $resizer.addClass('active');
      $resizer.css({opacity: 1});

      document.onmousemove = (e) => {
        if (resizeType === 'col') {
          delta = e.pageX - rect.right;
          $resizer.css({right: -delta + 'px'});
        } else {
          delta = e.pageY - rect.bottom;
          $resizer.css({bottom: -delta + 'px'});
        }
      };

      document.onmouseup = () => {
        document.onmousemove = null;
        document.onmouseup = null;

        if (resizeType === 'col') {
          const id = $parent.data.col;
          const cellsToResize = this.$root.findAll(`[data-col="${id}"]`);
          const newWidth = Math.max(Math.floor(rect.width + delta + 1), 0);
          cellsToResize.forEach((el) => el.style.width = newWidth + 'px');
          $resizer.css({opacity: 0, right: '-1px'});
        } else {
          const newHeight = Math.max(Math.floor(rect.height + delta), 0);
          $parent.css({height: newHeight + 'px'});
          $resizer.css({opacity: 0, bottom: '-1px'});
        }
        $resizer.removeClass('active');
      };
    }
  }

  toHTML() {
    return createTable(50);
  }
}
