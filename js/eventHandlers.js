import weightCalculator from './calculate.js';
// Function for the calculate button
const handleCalculateClick = () => {
    // Obtener los valores ingresados por el usuario
    let initWeight = Number(document.getElementById("init-weight").value);
    let weeklyCoeff = Number(document.getElementById("weekly-coeff").value);
    let targetWeight = Number(document.getElementById("target-weight").value);
  
    // Asignar los valores al objeto weightCalculator
    weightCalculator.initWeight = initWeight;
    weightCalculator.weeklyCoefficient = weeklyCoeff;
    weightCalculator.targetWeight = targetWeight;
  
    // Calcular el tiempo estimado y el registro semanal
    weightCalculator.calculateEstimatedTime();
    weightCalculator.generateWeeklyReg(weightCalculator.weeklyCoefficient);
  
    // Mostrar los resultados en la página
  
    const estimatedTime = document.getElementById('estimated-time');
  document.documentElement.style.setProperty('--estimated-time-height', estimatedTime.offsetHeight + 'px');
  
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
  weeklyRegElement.appendChild(table);
  
  };

  // Función para manejar el evento de clic en el botón "Resetear"
const handleResetClick = () => {
    // Reiniciar los valores del objeto weightCalculator
    weightCalculator.initWeight = 0;
    weightCalculator.weeklyCoefficient = 0;
    weightCalculator.targetWeight = 0;
    weightCalculator.estimatedTime = 0;
    weightCalculator.weeklyReg = [];
  
    // Limpiar los valores de los campos de entrada y los resultados en la página
    document.getElementById("init-weight").value = "";
    document.getElementById("weekly-coeff").value = "";
    document.getElementById("target-weight").value = "";
    document.getElementById("estimated-time").textContent = "";
    document.getElementById("weekly-reg").textContent = "";
  };
  
  const handleSaveClick = () => {
    document.write("Not working yet");
   };


   export { handleCalculateClick, handleResetClick, handleSaveClick };