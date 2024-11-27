/*
Philip's just turned four and he wants to know how old he will be in various years in the future such as 2090 or 3044. His parents can't keep up calculating this so they've begged you to help them out by writing a programme that can answer Philip's endless questions.

Your task is to write a function that takes two parameters: the year of birth and the year to count years in relation to. As Philip is getting more curious every day he may soon want to know how many years it was until he would be born, so your function needs to work with both dates in the future and in the past.

Provide output in this format: For dates in the future: "You are ... year(s) old." For dates in the past: "You will be born in ... year(s)." If the year of birth equals the year requested return: "You were born this very year!"

"..." are to be replaced by the number, followed and proceeded by a single space. Mind that you need to account for both "year" and "years", depending on the result.

Good Luck!

PSEUDO CODE

1. I need a FUNCTION that takes two PARAMETERS
2. IF yearToCompare is bigger than birthYear --> Calculate with substraction how old would be in an specific year
3. IF birthYear is bigger than yearToCompare --> Calculate with substracition how old woul be in the past
4. IF born in the same exact year return the message
*/

function calculatingAge(birthYear, yearToCompare) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;

  if (yearToCompare > birthYear) {
    const yearInFuture = yearToCompare - birthYear;
    console.log(`
            Your current age is: ${age}. In the future in the year ${yearToCompare} you be: ${yearInFuture} years old
        `);

    return;
  }

  if (birthYear > yearToCompare) {
    const yearInPast = birthYear - yearToCompare;

    console.log(`
        Your current age is: ${age}. In the past in the year ${yearToCompare} you will be born in ${yearInPast} years
    `);
    return;
  }

  if (birthYear === yearToCompare) console.log("You were born this very year!");
}
console.log("\n");
calculatingAge(2020, 2030);
console.log("\n");
calculatingAge(2020, 1990);
console.log("\n");
calculatingAge(2020, 2020);
console.log("\n");
