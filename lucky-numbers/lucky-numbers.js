// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let numbersOne = array1.join().replace(/,/g, "");
  let numbersTwo = array2.join().replace(/,/g, "");

  const numberTypeOne = Number(numbersOne);
  const numberTypeTwo = Number(numbersTwo);

  return numberTypeOne + numberTypeTwo;
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */

export function luckyNumber(value) {
  const reversedValue = value.toString().split("").reverse().join("");

  if (reversedValue == value) {
    return true;
  } else return false;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */

export function errorMessage(input) {
  if (!input) {
    return 'Required field'
  }

  return Number(input) ? '' : 'Must be a number besides 0'
}
