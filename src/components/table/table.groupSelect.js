import {isCell, matrix} from '@/components/table/table.utils';
import {$} from '@core/dom';

export function tableGroupSelect($root, event, selection) {
  const $start = $(event.target);
  let lastId = null;
  document.onmousemove = (e) => {
    if ( isCell(e) ) {
      const $end = $(e.target);
      if ($end.id() !== lastId) {
        lastId = $end.id();
        const $cells = matrix($start, $end)
            .map((id) => $root.find(`[data-id="${id}"]`));

        selection.selectGroup($cells);
      }
    }
  };

  document.onmouseup = (e) => {
    document.onmousemove = null;
    document.onmouseup = null;
  };
}
