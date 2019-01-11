// Super Galactic Age Calculator
// A solar year lasts 365 days on planet Earth. However, the length of a solar year varies from planet to planet. For instance, a solar year on Mercury lasts 88 days. Write an application that determines a user’s age based on a planet’s solar years. You will need to use the Javascript Date object.
//
// You are not required to build a UI for this application. Instead, focus on thoroughly testing each piece of functionality. Make sure to commit your specs before starting to code. You need at least one test for each spec.
//
// The business logic of your application should:
//
// Take a person’s age in years and create a class that does the following:
//
// Returns their age in Mercury years. (A Mercury year is .24 Earth years.)
// if someone is 32 years old on earth. 32/.24 = 133.3333333 Mercury years.
// Returns their age in Venus years. (A Venus year is .62 Earth years.)
// Returns their age in Mars years. (A Mars year is 1.88 Earth years.)
// Returns their age in Jupiter years. (A Jupiter year is 11.86 Earth years.)
// Determines how many years a user has left to live on each planet… (yikes!) To do this, the application will have to calculate the user’s life expectancy. You can determine average life expectancy as you see fit. A simple way to do this would be to have the user input the average life expectancy for their demographic. A more involved way to do this would be to collect other information from the user (e.g. lifestyle, country of residence, activity level, etc.) to determine their life expectancy.
// If a user has already surpassed the average life expectancy, return the number of years they have lived past the life expectancy.

// Further Exploration
// If you're able to complete the project with time to spare, implement additional features such as:
//
// Add a UI to your application.
// Return the date of a user’s next birthday on each planet.
// Return the age Keith Richards will be in dog years on the planet Jupiter in 2073.
// Assuming that the average lifespan of a mayfly is 5 minutes, determine how many mayfly lifespans a human user has lived and then compare it the current age (in Earth years) of our sun.
// Make your application look nice and give it a solar theme!

export class AgeCalculator {
  constructor(ageInYears) {
    this.ageInYears = ageInYears;
  }

  ageInMercuryYears() {
    return (this.ageInYears/.24).toFixed(2);
  }

  ageInVenusYears() {
    return (this.ageInYears/.64).toFixed(2);
  }

  ageInMarsYears() {
    return (this.ageInYears/1.88).toFixed(2);
  }
}
