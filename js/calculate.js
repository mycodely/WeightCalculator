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
  
  /*Usando while para verificar si se alcanzo el peso
  
   while (Math.abs(currentWeight - futureWeight) >= Math.abs(coefficient)) {
    currentWeight += coefficient;
    this.weeklyReg.push(currentWeight.toFixed(2));
  } */
  
      for (let i = 0; i < this.estimatedTime; i++) {
        currentWeight > futureWeight ? currentWeight = currentWeight - this.weeklyCoefficient : currentWeight = currentWeight + this.weeklyCoefficient;
        
        this.weeklyReg.push(currentWeight.toFixed(2));
      }
    }, 
  };

  
  export default weightCalculator;