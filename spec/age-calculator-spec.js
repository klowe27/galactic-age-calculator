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

  describe('ageInVenusYears', function() {
    it('should calculate the user\'s age in Venus years', function() {
      expect(user.ageInVenusYears()).toEqual(51.6129);
    });
  });

});

// Returns their age in Venus years. (A Venus year is .62 Earth years.)
