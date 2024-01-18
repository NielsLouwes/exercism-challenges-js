// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let totalCount = 0;

  for (let i = 0; i < birdsPerDay.length; i++) {
   totalCount += birdsPerDay[i]
  }
  return totalCount;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */

// splice the week according to week number - if week is 1 = splice(0,6) , if week = 2 splice(6)
// count up that week and return it

export function birdsInWeek(birdsPerDay, week) {
  const daysPerWeek = 7;
  const startIndex = (week - 1) * daysPerWeek; // 0, 7, 14, etc
  const endIndex = startIndex + daysPerWeek; // 7 , 14, 21 ,etc

  const weeklyBirds = birdsPerDay.slice(startIndex, endIndex);

  let totalCount = 0;
  for (let i = 0; i < weeklyBirds.length; i++) {
    totalCount += weeklyBirds[i];
  }

  return totalCount;
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */

// every even index, add 1 to the even index array item

export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i++) {
    if (i % 2 === 0){
      birdsPerDay[i]++;  
    }
  }
  return birdsPerDay; 
}
