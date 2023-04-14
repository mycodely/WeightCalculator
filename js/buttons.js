import weightCalculator from './calculate.js';
import showResults from './main.js';

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
      showResults();
  }

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
 }


   export { handleCalculateClick, handleResetClick, handleSaveClick };