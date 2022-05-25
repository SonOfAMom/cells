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
    <div class="row" data-type="resizable">
        <div class="row-info">
            ${index}
            ${resizer}
        </div>
        <div class="row-data">${data}</div>
    </div>
  `;
}

function createCell(row) {
  return (_, col) => {
    return `
     <div 
        class="cell" 
        contenteditable 
        data-col="${col}" 
        data-id="${row}-${col}">
     </div>
    `;
  };
}

function createHeader(columns) {
  let header = '';
  for (let i = CODES.A; i < CODES.A + columns; i++) {
    header += createColumn(String.fromCharCode(i), i - CODES.A);
  }
  return createRow(header);
}

function fillRow(columnsCount, row) {
  return new Array(columnsCount).fill('').map(createCell(row)).join('');
}

export function createTable(rowsCount) {
  const columnsCount = 26;
  const rows = [];

  rows.push(createHeader(columnsCount));

  for (let row = 1; row <= rowsCount; row++) {
    rows.push(createRow(fillRow(columnsCount, row), row));
  }

  return rows.join('');
}
