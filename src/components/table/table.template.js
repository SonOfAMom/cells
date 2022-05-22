const CODES = {
  A: 65,
  Z: 90,
};

function createColumn(char) {
  return `
      <div class="column">
          ${char}
          <div class="col-resize"></div>
      </div>
  `;
}

function createRow(data, index = '') {
  const resizer = index ? '<div class="row-resize"></div>' : '';
  return `
    <div class="row">
        <div class="row-info">
            ${index}
            ${resizer}
        </div>
        <div class="row-data">${data}</div>
    </div>
  `;
}

function createCell() {
  return `
    <div class="cell" contenteditable></div>
  `;
}

function createHeader(columns) {
  let header = '';
  for (let i = CODES.A; i < CODES.A + columns; i++) {
    header += createColumn(String.fromCharCode(i));
  }
  return createRow(header);
}

function fillRow(columnsCount) {
  return new Array(columnsCount).fill('').map(createCell).join('');
}

export function createTable(rowsCount) {
  const columnsCount = 15;
  const rows = [];

  rows.push(createHeader(columnsCount));

  for (let i = 1; i <= rowsCount; i++) {
    rows.push(createRow(fillRow(columnsCount), i));
  }

  return rows.join('');
}
