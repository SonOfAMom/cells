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

export function nextCell(key, {row, col}) {
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
