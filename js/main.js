import { handleCalculateClick, handleResetClick, handleSaveClick } from './buttons.js';
import weightCalculator from './calculate.js';

// Build Header
const buildHeader = () =>{

const thead = document.createElement("thead");
const headers = ["Week", "Weight"];
const headerRow = document.createElement("tr");
headers.forEach(headerText => {
  const header= document.createElement("th");
  header.textContent= headerText;
  headerRow.appendChild(header)
});
thead.appendChild(headerRow);
return thead;
}

// Build Table Body
const buildTableBody = () =>{
const tbody = document.createElement("tbody");
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
return tbody;
}

// Event Listeners
document.getElementById("calculate-button").addEventListener("click", handleCalculateClick);
document.getElementById("reset-button").addEventListener("click", handleResetClick);
document.getElementById("save-button").addEventListener("click", handleSaveClick);

const estimatedTime = document.getElementById('estimated-time');
document.documentElement.style.setProperty('--estimated-time-height', estimatedTime.offsetHeight + 'px');

// Build data and show results on the webpage
const showResults = () => {
  document.getElementById("estimated-time").textContent = `The estimated time in weeks to reach the target weight is: ${weightCalculator.estimatedTime}`;

  const thead = buildHeader();
  const tbody = buildTableBody();
  
  // Build Table
  const table = document.createElement("table");
  table.appendChild(thead);
  table.appendChild(tbody);

  const resultTable = document.getElementById("weekly-reg");
  resultTable.innerHTML = "";
  resultTable.appendChild(table);
};

export default showResults;