export class AgeCalculator {
  constructor(ageInYears) {
    this.ageInYears = ageInYears;
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

  lifeExpectency(gender, activityLevel, lifestyle) {
    let lifeExpectencyEarthYears = 75;
    if (gender === "female") {
      lifeExpectencyEarthYears += 5;
    } else if (gender === "male") {
      lifeExpectencyEarthYears -=3;
    } else {
      lifeExpectencyEarthYears += 0;
    }

    (activityLevel === "high") ? lifeExpectencyEarthYears += 3 : lifeExpectencyEarthYears -= 5;
    (lifestyle === "healthy") ? lifeExpectencyEarthYears += 3 : lifeExpectencyEarthYears -=2;

    return lifeExpectencyEarthYears;
  }
}
