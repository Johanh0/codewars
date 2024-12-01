/*
You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.

Your function will accept three arguments:
The first and second argument should be numbers.
The third argument should represent a sign indicating the operation to perform on these two numbers.

if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.

Example:
calculator(1,2,"+"); //=> result will be 3
calculator(1,2,"&"); //=> result will be "unknown value"
calculator(1,"k","*"); //=> result will be "unknown value"
Good luck!

*/

function calculator(num1, num2, sign) {
  switch (sign) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) {
        return "unknown value";
      }
      return num1 / num2;
    default:
      return "unknown value";
  }
}

console.log(calculator(1, 2, "+")); // 3
console.log(calculator(1, 2, "&")); // "unknown value"
console.log(calculator(1, "k", "*")); // "unknown value"
console.log(calculator(10, 2, "/")); // 5
console.log(calculator(10, 0, "/")); // "unknown value"