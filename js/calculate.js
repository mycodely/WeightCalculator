const weightCalculator = {
    initWeight: 0,
    weeklyCoefficient: 0,
    targetWeight: 0,
    estimatedTime: 0,
    weeklyReg: [],
  
    calculateWeightDif() {
      return Math.abs(this.initWeight - this.targetWeight);
    },
  
    calculateEstimatedTime() {
      const weightDif = this.calculateWeightDif();
      const weeklyChange = Math.abs(this.weeklyCoefficient);
      const estimatedTime = Math.ceil(weightDif / weeklyChange);
      this.estimatedTime = estimatedTime;
    },
  
    generateWeeklyReg(coefficient) {
      let currentWeight = this.initWeight;
      let futureWeight = this.targetWeight;
    
      for (let i = 0; i < this.estimatedTime; i++) {
        currentWeight > futureWeight ? currentWeight = currentWeight - this.weeklyCoefficient
        : currentWeight = currentWeight + this.weeklyCoefficient;
        
        this.weeklyReg.push(currentWeight.toFixed(2));
      }
    }, 
  };

  
  export default weightCalculator;
