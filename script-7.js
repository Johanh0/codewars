/*
Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.

Example:
For input: [3, 4, 4, 3, 6, 3]

remove the 3 at index 0
remove the 4 at index 1
remove the 3 at index 3
Expected output: [4, 6, 3]

More examples can be found in the test cases.

Good luck!
*/

const numbers = [3, 4, 4, 3, 6, 3];

function removeDuplicates(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (result.indexOf(num) === -1) {
      result.push(num);
    }
  }

  for (let i = 0; i < result.length; i++) {
    let num = result[i];
    for (let index = 0; index < arr.length; index++) {
      if (arr[index] === num && index !== arr.lastIndexOf(num)) {
        arr[index] = null;
      }
    }
  }

  return arr.filter((num) => num !== null);
}

console.log(removeDuplicates(numbers)); // Output: [4, 6, 3]
