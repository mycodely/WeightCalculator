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
  document.getElementById("estimated-time").textContent = `El tiempo estimado en semanas para llegar al peso objetivo es: ${weightCalculator.estimatedTime}`;
  document.getElementById("weekly-reg").textContent = `Tu registro semanal de peso es: ${weightCalculator.weeklyReg}`;
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

const weightCalculator = {
  initWeight: 0,
  weeklyCoefficient: 0,
  targetWeight: 0,
  estimatedTime: 0,
  weeklyReg: [],

  // Método para calcular la diferencia entre los pesos que se quiere llegar
  calculateWeightDif() {
    return Math.abs(this.initWeight - this.targetWeight);
  },

  // Método para calcular el tiempo estimado en semanas para llegar al peso objetivo
  calculateEstimatedTime() {
    const weightDif = this.calculateWeightDif();
    const weeklyChange = Math.abs(this.weeklyCoefficient);
    const estimatedTime = Math.ceil(weightDif / weeklyChange);
    this.estimatedTime = estimatedTime;
  },

  // Método para generar el registro semanal basado en el coeficiente
  generateWeeklyReg(coefficient) {
    let currentWeight = this.initWeight;
    let futureWeight = this.targetWeight;


    // debo modificar la cuenta para que haga verificacion de suma o resta al registrar en el array los cambios
    for (let i = 0; i < this.estimatedTime; i++) {
      currentWeight > futureWeight ? currentWeight = currentWeight - this.weeklyCoefficient : currentWeight = currentWeight + this.weeklyCoefficient;
      
      this.weeklyReg.push(currentWeight.toFixed(2));
    }
  }, 
};

// Event Listeners
document.getElementById("calculate-button").addEventListener("click", handleCalculateClick);
document.getElementById("reset-button").addEventListener("click", handleResetClick);
document.getElementById("save-button").addEventListener("click", handleSaveClick);


/* TESTS
// Ejemplo de uso decreciente
console.log("Test negativo perdida de peso");
weightCalculator.initWeight = 55;
weightCalculator.weeklyCoefficient = 1;
weightCalculator.targetWeight = 50;
weightCalculator.calculateEstimatedTime();

console.log(`El tiempo estimado en semanas para llegar al peso objetivo es: ${weightCalculator.estimatedTime}`);
// Generar el registro semanal usando el coeficiente inicial (luego se podra modificar y adaptar con otros coeficientes)
weightCalculator.generateWeeklyReg(weightCalculator.weeklyCoefficient);
console.log(`Tu registro semanal de peso es: ${weightCalculator.weeklyReg}`);

console.log(`La diferencia de peso entre el inicial (${weightCalculator.initWeight}) y el objetivo (${weightCalculator.targetWeight}) es ${weightCalculator.calculateWeightDif()}kg`);

console.log("//////////////////////////////////////////////////////////////////");

// reset Array weeklyReg
const resetArr_reg = () => weightCalculator.weeklyReg = [];
resetArr_reg();

// Ejemplo de uso creciente
console.log("Test positivo ganancia de peso");

weightCalculator.initWeight = 80;
weightCalculator.weeklyCoefficient = 2;
weightCalculator.targetWeight = 90;
weightCalculator.calculateEstimatedTime();

console.log(`El tiempo estimado en semanas para llegar al peso objetivo es: ${weightCalculator.estimatedTime}`);
weightCalculator.generateWeeklyReg(weightCalculator.weeklyCoefficient);
console.log(`Tu registro semanal de peso es: ${weightCalculator.weeklyReg}`);

console.log(`La diferencia de peso entre el inicial (${weightCalculator.initWeight}) y el objetivo (${weightCalculator.targetWeight}) es ${weightCalculator.calculateWeightDif()}kg`);
*/








