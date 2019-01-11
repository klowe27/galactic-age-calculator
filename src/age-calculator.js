export class AgeCalculator {
  constructor(ageInYears, gender, activityLevel, lifestyle) {
    this.ageInYears = ageInYears;
    this.lifeExpectency = this.calculateLifeExpectency(gender, activityLevel, lifestyle);
  }

  mercuryYears(earthYears) {
    return earthYears/.24;
  }

  venusYears(earthYears) {
    return earthYears/.64;
  }

  marsYears(earthYears) {
    return earthYears/1.88;
  }

  jupiterYears(earthYears) {
    return earthYears/11.86;
  }

  calculateLifeExpectency(gender, activityLevel, lifestyle) {
    let lifeExpectencyEarthYears = 75;
    (gender === "female") ? lifeExpectencyEarthYears += 5 : lifeExpectencyEarthYears -=3;
    (activityLevel === "high") ? lifeExpectencyEarthYears += 3 : lifeExpectencyEarthYears -= 5;
    (lifestyle === "healthy") ? lifeExpectencyEarthYears += 3 : lifeExpectencyEarthYears -=2;

    return lifeExpectencyEarthYears;
  }


}
