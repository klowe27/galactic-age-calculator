import { AgeCalculator } from './../src/age-calculator.js';

describe('AgeCalculator', function() {

  describe('constructor', function() {
    it('should create a new instance of AgeCalculator and save the age (in years) property', function() {
      let user = new AgeCalculator(55);
      expect(user.ageInYears).toEqual(55);
    });
  });
});
