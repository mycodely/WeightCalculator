/* Calculadora que estime un cambio de peso positivo/negativo segun :
- Peso ingresado inicial
- Pérdida de peso semanal(coeficiente)
- Peso objetivo
- Tiempo estimado

¿Que outputs generará?
Puede ser un objeto en el que diga:
- Diferencia entre los pesos que se quiere llegar
- Registro semanal basado en el coeficiente

First approach:
function calc(pesoInicial, coeficiente, pesoObjetivo) {
  // Calcula el cambio de peso semanal
  const cambioPesoSemanal = pesoInicial - pesoObjetivo > 0 ? -coeficiente : coeficiente;

  // Calcula el tiempo necesario para llegar al peso objetivo en semanas
  const tiempoEstimadoSemanas = Math.ceil(Math.abs((pesoInicial - pesoObjetivo) / cambioPesoSemanal));

  // Convierte el tiempo estimado a horas
  const tiempoEstimadoHoras = tiempoEstimadoSemanas * 7 * 24;

  return { cambioPesoSemanal, tiempoEstimadoSemanas, tiempoEstimadoHoras };
}

console.log(calc(60, 1, 58))


// Generar el registro semanal usando el coeficiente por defecto
weightCalculator.generateWeeklyRecord();
console.log(`Tu registro semanal de peso es: ${weightCalculator.weeklyReg}`);

 // Generar el registro semanal con un coeficiente personalizado para la segunda semana
weightCalculator.generateWeeklyReg({ week: 1, value: 0.3 });
console.log(`Tu registro semanal de peso con coeficiente personalizado es: ${weightCalculator.weeklyRecord}`); 

solo funcion a en positivo

generateWeeklyReg(coefficient) {
    let currentWeight = this.initWeight;

    for (let i = 0; i < this.estimatedTime; i++) {
      currentWeight -= (coefficient !== undefined && i === coefficient.week) ? coefficient.value : this.weeklyCoefficient;
      this.weeklyReg.push(currentWeight.toFixed(2));
    }
  }, 



*/


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

// Ejemplo de uso decreciente
console.log("Test negativo perdida de peso");
weightCalculator.initWeight = 60;
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









