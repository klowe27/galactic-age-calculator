import { AgeCalculator } from './../src/age-calculator.js';

describe('AgeCalculator', function() {
  let user;

  beforeEach(function() {
    user = new AgeCalculator(32, "female", "high", "healthy");
  });

  describe('constructor', function() {
    it('should create a new instance of AgeCalculator and save the age (in years) property', function() {
      expect(user.ageInYears).toEqual(32);
    });
  });

  describe('mercuryYears', function() {
    it('should convert Earth years to Mercury years', function() {
      expect(user.mercuryYears(user.ageInYears)).toEqual(133.33333333333334);
    });
  });

  describe('venusYears', function() {
    it('should convert Earth years to Venus years', function() {
      expect(user.venusYears(user.ageInYears)).toEqual(50);
    });
  });

  describe('marsYears', function() {
    it('should convert Earth years to Mars years', function() {
      expect(user.marsYears(user.ageInYears)).toEqual(17.021276595744681);
    });
  });

  describe('jupiterYears', function() {
    it('should convert Earth years to Jupiter years', function() {
      expect(user.jupiterYears(user.ageInYears)).toEqual(2.69814502529511);
    });
  });

  describe('lifeExpectency', function() {
    it('should calculate the user\'s life expectency in Earth years based on user input', function() {
      expect(user.lifeExpectency().toEqual(80);
    });
  });

});
