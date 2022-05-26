import {isCell, matrix} from '@/components/table/table.utils';
import {$} from '@core/dom';

export function mouseSelect($root, event, selection) {
  const $start = $(event.target);
  selection.clearAll();
  selection.select($start);
  let lastId = null;
  document.onmousemove = (e) => {
    if ( isCell(e) ) {
      const $end = $(e.target);
      if ($end.id() !== lastId) {
        lastId = $end.id();
        const $cells = matrix($start, $end)
            .map((id) => $root.find(`[data-id="${id}"]`));

        selection.selectGroup($cells, $start);
      }
    }
  };

  document.onmouseup = () => {
    document.onmousemove = null;
    document.onmouseup = null;
  };
}

export function keyShiftSelection($root, event, selection) {
  const $target = $(event.target);
  const $cells = matrix(selection.$current, $target)
      .map((id) => $root.find(`[data-id="${id}"]`));
  selection.selectGroup($cells, selection.$current);
  setTimeout(() => {
    selection.$current.focus();
  }, 0);
}
