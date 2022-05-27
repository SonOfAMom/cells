export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// returns an array [start, ..., stop] or [0, ..., start]
export function range(start, stop) {
  if (stop === undefined) {
    stop = start;
    start = 0;
  }

  if (start > stop) {
    const temp = start;
    start = stop;
    stop = temp;
  }

  return new Array(stop - start + 1).fill(start).map((el, i) => el + i);
}
