import { AgeCalculator } from './../src/age-calculator.js';

describe('AgeCalculator', function() {

  describe('constructor', function() {
    it('should create a new instance of AgeCalculator and save the age property', function() {
      let userAge = new AgeCalculator(55);
      expect(userAge.age).toEqual(55);
    });
  });
});
