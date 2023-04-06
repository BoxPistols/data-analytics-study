/* 正規化 */
const dataBody = document.getElementById('data-body');
const normalizedBody = document.getElementById('normalized-body');
const dataTable = document.getElementById('data-table');
const normalizedTable = document.getElementById('normalized-table');

for (let i = 0; i < dataset.length; i++) {
  const row = document.createElement('tr');
  const data = dataset[i];
  const heightCell = document.createElement('td');
  heightCell.innerText = data.height;
  row.appendChild(heightCell);
  const weightCell = document.createElement('td');
  weightCell.innerText = data.weight;
  row.appendChild(weightCell);
  dataBody.appendChild(row);
}

function normalize() {
  let heightMin = Infinity;
  let heightMax = -Infinity;
  let weightMin = Infinity;
  let weightMax = -Infinity;
  for (let i = 0; i < dataset.length; i++) {
    const data = dataset[i];
    if (data.height < heightMin) heightMin = data.height;
    if (data.height > heightMax) heightMax = data.height;
    if (data.weight < weightMin) weightMin = data.weight;
    if (data.weight > weightMax) weightMax = data.weight;
  }

  const normalizedDataset = [];
  for (let i = 0; i < dataset.length; i++) {
    const data = dataset[i];
    const normalizedHeight =
      (data.height - heightMin) / (heightMax - heightMin);
    const normalizedWeight =
      (data.weight - weightMin) / (weightMax - weightMin);
    normalizedDataset.push({
      height: normalizedHeight,
      weight: normalizedWeight,
    });
  }

  normalizedBody.innerHTML = '';
  for (let i = 0; i < normalizedDataset.length; i++) {
    const row = document.createElement('tr');
    const data = normalizedDataset[i];
    const heightCell = document.createElement('td');
    heightCell.innerText = data.height.toFixed(2);
    row.appendChild(heightCell);
    const weightCell = document.createElement('td');
    weightCell.innerText = data.weight.toFixed(2);
    row.appendChild(weightCell);
    normalizedBody.appendChild(row);
  }
}

function normalizeAndToggle() {
  normalize();
  toggleTable();
}

function toggleTable() {
  if (dataTable.style.display === 'none') {
    dataTable.style.display = '';
    normalizedTable.style.display = 'none';
  } else {
    dataTable.style.display = 'none';
    normalizedTable.style.display = '';
  }
}
