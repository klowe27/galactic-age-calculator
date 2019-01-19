export class AgeCalculator {
  constructor(ageInYears, gender, activityLevel, lifestyle) {
    this.ageInYears = ageInYears;
    this.lifeExpectency = this.calculateLifeExpectency(gender, activityLevel, lifestyle);
  }

  calculateLifeExpectency(gender, activityLevel, lifestyle) {
    let expectencyEarthYears = 75;
    (gender === "female" || gender === "non-binary") ? expectencyEarthYears += 5 : expectencyEarthYears -=3;
    (activityLevel === "high") ? expectencyEarthYears += 3 : expectencyEarthYears -= 5;
    (lifestyle === "healthy") ? expectencyEarthYears += 3 : expectencyEarthYears -=2;
    return expectencyEarthYears;
  }

  calculateStats(){
    const planets = [['Earth', 1], ['Mercury', .24], ['Venus', .64], ['Mars', 1.88], ['Jupiter', 11.86]];
    let results = [];
    let age = this.ageInYears;
    let lifeExpectency = this.lifeExpectency;
    planets.forEach(function(planet) {
      const planetName = planet[0];
      age/=planet[1];
      lifeExpectency/=planet[1];
      let yearsToLive;
      (age > lifeExpectency) ? (yearsToLive = `You've already lived ${age-lifeExpectency} years longer than expected.`) : (yearsToLive = lifeExpectency-age);
      results.push([planetName, age, lifeExpectency, yearsToLive])
    });
    return results;
  }
}
