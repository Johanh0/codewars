/*
What's in a name?
...Or rather, what's a name in? For us, a particular string is where we are looking for a name.

Task
Write a function, taking two strings in parameter, that tests whether or not the first string contains all of the letters of the second string, in order.

The function should return true if that is the case, and else false. Letter comparison should be case-INsensitive.

Examples
    "Across the rivers", "chris" --> true
      ^      ^  ^^   ^
      c      h  ri   s
                
    Contains all of the letters in "chris", in order.
----------------------------------------------------------
    "Next to a lake", "chris" --> false

    Contains none of the letters in "chris".
--------------------------------------------------------------------
    "Under a sea", "chris" --> false
         ^   ^
         r   s

    Contains only some of the letters in "chris".
--------------------------------------------------------------------
    "A crew that boards the ship", "chris" --> false
       cr    h              s i
       cr                h  s i  
       c     h      r       s i
                 ...
          
    Contains all of the letters in "chris", but not in order.
--------------------------------------------------------------------
    "A live son", "Allison" --> false
     ^ ^^   ^^^
     A li   son
            
    Contains all of the correct letters in "Allison", in order, but not enough of all of them (missing an 'l').


PSEUDO CODE

1. Create a function that takes a phrase and a name
2. Convert the phrase into lower case and an array
3. Make sure name is lower case
4. Create a for each to run the array phrase
5. Compare if the letter from the array is the same letter in the name index
6. return true or false 
*/

function isName(phrase, name) {
  const arrayPhrase = phrase.toLowerCase().split("");
  name = name.toLowerCase();
  let nameIndex = 0;
  let result = [];

  arrayPhrase.forEach((letter) => {
    if (letter === name.at(nameIndex)) {
      result.push(letter);
      nameIndex++;
    }
  });

  name === result.join("") ? console.log(true) : console.log(false);
}

isName("Across the rivers", "CHRIS");
isName("Next to a lake", "chris");
