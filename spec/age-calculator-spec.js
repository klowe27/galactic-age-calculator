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

  describe('calculateStats', function() {
    it('should calculate the user\'s age and life expectency for each planet', function() {
      expect(user.calculateStats()).toEqual([['Earth', 32, 86, 54],['Mercury', 133.33333333333334, 358.33333333333337, 225.00000000000003], ['Venus', 208.33333333333334, 559.8958333333334, 351.5625], ['Mars', 110.81560283687945, 297.8169326241135, 187.00132978723406], ['Jupiter', 9.343642734981405, 25.111039850262525, 15.76739711528112]]);

      const user2 = new AgeCalculator(100, "female", "high", "healthy");
      expect(user2.calculateStats()).toEqual([['Earth', 100, 86, "You've already lived 14 years longer than expected."],['Mercury', 416.6666666666667, 358.33333333333337, 'You\'ve already lived 58.333333333333314 years longer than expected.'], ['Venus', 651.0416666666666, 559.8958333333334, 'You\'ve already lived 91.14583333333326 years longer than expected.'], ['Mars', 346.2987588652482, 297.8169326241135, 'You\'ve already lived 48.481826241134684 years longer than expected.'], ['Jupiter', 29.198883546816884, 25.111039850262525, 'You\'ve already lived 4.0878436965543585 years longer than expected.']]);

    });
  });
});
