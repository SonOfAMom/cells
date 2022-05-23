const CODES = {
  A: 65,
  Z: 90,
};

function createColumn(char, index) {
  return `
      <div class="column" data-type="resizable" data-col="${index}">
          ${char}
          <div class="col-resize" data-resize="col"></div>
      </div>
  `;
}

function createRow(data, index = '') {
  const resizer = index ? '<div class="row-resize" data-resize="row"></div>' : '';
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

function createCell(_, index) {
  return `
    <div class="cell" contenteditable data-col="${index}"></div>
  `;
}

function createHeader(columns) {
  let header = '';
  for (let i = CODES.A; i < CODES.A + columns; i++) {
    header += createColumn(String.fromCharCode(i), i - CODES.A);
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
