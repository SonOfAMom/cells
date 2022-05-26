import {range} from '@core/utils';

export function matrix($current, $target) {
  const currentId = $current.id(true);
  const targetId = $target.id(true);

  const columns = range(currentId.col, targetId.col);
  const rows = range(currentId.row, targetId.row);

  return columns.reduce((acc, cur) => {
    rows.forEach((row) => acc.push(`${row}-${cur}`));
    return acc;
  }, []);
}

export function isCell(event) {
  return event.target.dataset.type === 'cell';
}
