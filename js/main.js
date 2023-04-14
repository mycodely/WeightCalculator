import { handleCalculateClick, handleResetClick, handleSaveClick } from './buttons.js';
import weightCalculator from './calculate.js';


// Event Listeners
document.getElementById("calculate-button").addEventListener("click", handleCalculateClick);
document.getElementById("reset-button").addEventListener("click", handleResetClick);
document.getElementById("save-button").addEventListener("click", handleSaveClick);

// Mostrar los resultados en la página
const estimatedTime = document.getElementById('estimated-time');
document.documentElement.style.setProperty('--estimated-time-height', estimatedTime.offsetHeight + 'px');

const showResults = () => {
  document.getElementById("estimated-time").textContent = `The estimated time in weeks to reach the target weight is: ${weightCalculator.estimatedTime}`;
  // Obtenemos la referencia al elemento donde queremos mostrar la tabla
  const weeklyRegElement = document.getElementById("weekly-reg");

  // Creamos la tabla y sus elementos
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");

  // Agregamos los encabezados de las columnas
  const headers = ["Week", "Weight"];
  const headerRow = document.createElement("tr");
  headers.forEach(headerText => {
    const header = document.createElement("th");
    header.textContent = headerText;
    headerRow.appendChild(header);
  });
  thead.appendChild(headerRow);

  // Agregamos los datos de cada semana
  const weeklyReg = weightCalculator.weeklyReg;

  for (let i = 0; i < weeklyReg.length; i++) {
    const row = document.createElement("tr");
    const weekCell = document.createElement("td");
    weekCell.textContent = `${i + 1}`;
    const weightCell = document.createElement("td");
    weightCell.textContent = weeklyReg[i];
    row.appendChild(weekCell);
    row.appendChild(weightCell);
    tbody.appendChild(row);
  }

  // Agregamos los elementos a la tabla
  table.appendChild(thead);
  table.appendChild(tbody);

  // Agregamos la tabla al elemento en el HTML
  weeklyRegElement.innerHTML = "";
  weeklyRegElement.appendChild(table);
};

export default showResults;