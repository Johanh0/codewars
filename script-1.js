// Are the numbers in order?
// In this Kata, your function receives an array of integers as input. Your task is to determine whether the numbers are in ascending order. An array is said to be in ascending order if there are no two adjacent integers where the left integer exceeds the right integer in value.

// For the purposes of this Kata, you may assume that all inputs are valid, i.e. arrays containing only integers.

// Note that an array of 0 or 1 integer(s) is automatically considered to be sorted in ascending order since all (zero) adjacent pairs of integers satisfy the condition that the left integer does not exceed the right integer in value.

// For example:

// inAscOrder([1,2,4,7,19]); // returns true
// inAscOrder([1,2,3,4,5]); // returns true
// inAscOrder([1,6,10,18,2,4,20]); // returns false
// inAscOrder([9,8,7,6,5,4,3,2,1]); // returns false because the numbers are in DESCENDING order

/*
PSEUDO CODE

1. Iterate the array --> for loop
2. Compare IF the second value is grater than the first value
3. Move to the next value and compare again
4. IF the second value is NOT grater than the first one BREAK the loop
*/

function inAscOrder(arrayNumber) {
  let result;

  for (let index = 1; index < arrayNumber.length; index++) {
    if (arrayNumber[index] > arrayNumber[index - 1]) {
      result = true;
    } else {
      result = false;
      break;
    }
  }

  return console.log(result);
}

inAscOrder([1, 2, 4, 7, 19]); // returns true
inAscOrder([1, 2, 3, 4, 5]); // returns true
inAscOrder([1, 6, 10, 18, 2, 4, 20]); // returns false
inAscOrder([9, 8, 7, 6, 5, 4, 3, 2, 1]); // returns false because the numbers are in DESCENDING order
