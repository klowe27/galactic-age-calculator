import { AgeCalculator } from './../src/age-calculator.js';

describe('AgeCalculator', function() {
  let user;

  beforeEach(function() {
    user = new AgeCalculator(32);
  });

  describe('constructor', function() {
    it('should create a new instance of AgeCalculator and save the age (in years) property', function() {
      expect(user.ageInYears).toEqual(32);
    });
  });

  describe('ageInMercuryYears', function() {
    it('should calculate the user\'s age in Mercury years', function() {
      expect(user.ageInMercuryYears()).toEqual(133.33333333333334);
    });
  });
});
