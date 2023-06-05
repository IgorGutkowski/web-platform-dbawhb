var rows = document.getElementById('rows');
var cols = document.getElementById('cols');
var form = document.getElementById('form');
var table = document.getElementById('table');

function generateTable(event) {
  event.preventDefault();
  let rowsNumber = parseInt(rows.value);
  let colsNumber = parseInt(cols.value);
  if (
    !isNaN(rowsNumber) &&
    !isNaN(colsNumber) &&
    rowsNumber > 0 &&
    colsNumber > 0
  ) {
    table.innerHTML = '';
    for (let i = 0; i < rowsNumber; i++) {
      let row = document.createElement('tr');

      for (let j = 0; j < colsNumber; j++) {
        let col = document.createElement('td');
        col.textContent = `Wiersz ${i + 1}, Kolumna ${j + 1}`;
        row.appendChild(col);
      }

      table.appendChild(row);
    }
  } else {
    window.alert('Liczba kolumn oraz liczba wierszy musi być większa od zera.');
  }
}

if (form) {
  form.addEventListener('submit', generateTable);
}
