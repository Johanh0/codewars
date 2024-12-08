/*
Description:
Define a method/function that removes from a given array of integers all the values contained in a second array.

Examples (input -> output):
* [1, 1, 2, 3, 1, 2, 3, 4], [1, 3] -> [2, 2, 4]
* [1, 1, 2, 3, 1, 2, 3, 4, 4, 3, 5, 6, 7, 2, 8], [1, 3, 4, 2] -> [5, 6, 7, 8]
* [8, 2, 7, 2, 3, 4, 6, 5, 4, 4, 1, 2, 3], [2, 4, 3] -> [8, 7, 6, 5, 1]

PSEUDO CODE
1. Iterate in the arrayInteger
2. Search if the arrayInteger has any of the values from the arrayList
3. Returnr an array with the integers that are not in the arrayList
*/

// Option 1
Array.prototype.removeSpecificNumbers = (arrayIntegers, arrayList) => {
  let result = [];
  arrayIntegers.forEach((number) => {
    if (arrayList.includes(number)) {
      return;
    }

    result.push(number);
  });

  return result;
};

console.log(
  Array.prototype.removeSpecificNumbers([1, 1, 2, 3, 1, 2, 3, 4], [1, 3])
);

console.log(
  Array.prototype.removeSpecificNumbers(
    [1, 1, 2, 3, 1, 2, 3, 4, 4, 3, 5, 6, 7, 2, 8],
    [1, 3, 4, 2]
  )
);

console.log(
  Array.prototype.removeSpecificNumbers(
    [8, 2, 7, 2, 3, 4, 6, 5, 4, 4, 1, 2, 3],
    [2, 4, 3]
  )
);

// Option 2

Array.prototype.removeSpecificNumbers2 = (arrayInteger, arrayList) => {
  return arrayInteger.filter((number) => !arrayList.includes(number));
};

console.log(
  Array.prototype.removeSpecificNumbers2([1, 1, 2, 3, 1, 2, 3, 4], [1, 3])
);

console.log(
  Array.prototype.removeSpecificNumbers2(
    [1, 1, 2, 3, 1, 2, 3, 4, 4, 3, 5, 6, 7, 2, 8],
    [1, 3, 4, 2]
  )
);

console.log(
  Array.prototype.removeSpecificNumbers2(
    [8, 2, 7, 2, 3, 4, 6, 5, 4, 4, 1, 2, 3],
    [2, 4, 3]
  )
);
