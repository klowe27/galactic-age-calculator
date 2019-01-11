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
      expect(user.lifeExpectency).toEqual(86);

      const user2 = new AgeCalculator(32, "female", "high", "unhealthy");
      expect(user2.lifeExpectency).toEqual(81);

      const user3 = new AgeCalculator(32, "female", "low", "healthy");
      expect(user3.lifeExpectency).toEqual(78);

      const user4 = new AgeCalculator(32, "female", "low", "unhealthy");
      expect(user4.lifeExpectency).toEqual(73);

      const user5 = new AgeCalculator(32, "male", "high", "healthy");
      expect(user5.lifeExpectency).toEqual(78);

      const user6 = new AgeCalculator(32, "male", "low", "healthy");
      expect(user6.lifeExpectency).toEqual(70);

      const user7 = new AgeCalculator(32, "male", "high", "unhealthy");
      expect(user7.lifeExpectency).toEqual(73);

      const user8 = new AgeCalculator(32, "male", "low", "unhealthy");
      expect(user8.lifeExpectency).toEqual(65);

    });
  });

  // describe('calculateStats', function() {
  //   it('should calculate the stats for a given planet', function() {
  //     expect(user.calculateStats("mercury")).toEqual("Age: ");
  //   });
  // });


});
