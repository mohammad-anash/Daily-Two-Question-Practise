// loop Question Practise

// 1 => write a function to capitalizze eack first letter of wornd in the string

function capFirstLetter(string) {
  let newString = "";
  const breakSpace = string.split(" ");
  for (let i = 0; i < breakSpace.length; i++) {
    const getFirstElement = breakSpace[i].charAt(0).toUpperCase();
    const ignoreFirstLetter = breakSpace[i].slice(1);
    newString += `${getFirstElement}${ignoreFirstLetter} `;
  }
  return newString;
}

// console.log(capFirstLetter("this is the string"));

// 2 => write a function to reverse a array using loop

function reverseArray(arr) {
  let store = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    store.push(arr[i]);
  }
  return store;
}

// console.log(reverseArray([1, 2, 3, 4, 5]));

// Second Approch

function reverseArray(arr) {
  let store = [];

  for (let i = 0; i < arr.length; i++) {
    store.unshift(arr[i]);
  }
  return store;
}

// console.log(reverseArray([1, 2, 3, 4, 5]));

// 3 => write a function to find the sum of even number in the array

function sumOfEven(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) sum += arr[i];
  }
  return sum;
}

// console.log(sumOfEven([12, 34, 67, 55, 90, 82]));

// 4 => write a function to check the given string is palimdrom or not

function isPalindrom(sentence) {
  let reverseString = "";

  for (let i = sentence.length - 1; i >= 0; i--) {
    reverseString += sentence[i];
  }
  return sentence === reverseString;
}

// console.log(isPalindrom("anash"));

// second approch but without loop

function isPalindrom(sentence) {
  return sentence === sentence.split("").reverse().join("");
}

// console.log(isPalindrom("ansh"));

// 5=>  write a function to find the factorial of the given number

function factorial(n) {
  let product = 1;

  for (let i = 1; i < n; i++) {
    product *= i;
  }
  return product;
}

// console.log(factorial(6));

// 6 => write a funcion to find the average of the array

function averageOfArr(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return +(sum / arr.length).toFixed(2);
}

// console.log(averageOfArr([1, 34, 23, 56, 79, 45]));

// 7 => write a function to check the given number of is prime or not

// function isPrime(n) {
//   for (let i = 2; i <= n; i++) {
//     if (n % i === 0) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(isPrime(37));

// 8 => write a function to generate a fabonanci Series

function fabonanciSeries(n) {
  let arr = [0, 1];

  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr;
}

// console.log(fabonanciSeries(5));

// 9 => write a function to find the duplicate numbers in the array

function findDuplicate(arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) obj[arr[i]]++;
    else obj[arr[i]] = 1;
  }

  let store = [];
  for (const keys in obj) {
    if (obj[keys] >= 2) store.push(+keys);
  }
  return store;
}

// console.log(findDuplicate([1, 2, 3, 4, 2, 4, 3, 5, 4]));

// 10 =>  Write a program that prints the numbers from 1 to 100. But for multiples of 3, print "Fizz" instead of the number, and for the multiples of 5, print "Buzz." For numbers that are multiples of both three and five, print "FizzBuzz."

function fizzBuzzChallenge(start, end) {
  for (let i = start; i <= end; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

// fizzBuzzChallenge(1, 100);

// While loop Question Practise

// 11 => write a function to reverse array using while loop

function reverseArray(arr) {
  let store = [];
  let i = arr.length - 1;
  while (i >= 0) {
    store.push(arr[i]);
    i--;
  }
  return store;
}

// console.log(reverseArray([1, 2, 3, 4, 5]));

// 12 => write a function to generate fabonanci Series using while loop

function fabSeries(n) {
  let arr = [0, 1];
  let i = 2;
  while (i <= n) {
    arr.push(arr[i - 2] + arr[i - 1]);
    i++;
  }
  return arr;
}

// console.log(fabSeries(5));

// 13 => write a function to find the factiorial of the given number in the argument

function factorial(n) {
  let product = 1;
  let i = 1;
  while (i <= n) {
    product *= i;
    i++;
  }
  return product;
}

// console.log(factorial(6));

// 14 => write a function to check the given number in prime or not

function isPrime(n) {
  let i = 2;
  while (i < n) {
    if (n % i === 0) {
      return false;
    }
    i++;
  }
  return true;
}

// console.log(isPrime(17));

// 15 => write a function to generat e table for the given number in the argument

function generateTable(n) {
  let i = 1;
  while (i <= 10) {
    console.log(`${n} x ${i} = ${n * i}`);
    i++;
  }
}

// console.log(generateTable(5));

// 16 => write a function to check the given string in palimdrom or not

function isPalindrom(string) {
  const breakString = string.split("");
  let newString = "";
  let i = string.length - 1;
  while (i >= 0) {
    newString += breakString[i];
    i--;
  }
  return newString === string;
}

// console.log(isPalindrom("anash"));

// 17 => Implement a binary search algorithm using a while loop to find the index of a specific element in a sorted array.

function binarySearch(arr, n) {
  let i = 0;
  while (i <= arr.length) {
    if (arr[i] === n) {
      return true;
    }
    i++;
  }
  return false;
}

// console.log(binarySearch([1, 2, 3, 4, 5], 5));

// 18 => write a function to reverse a number using while loop

// function reverseNumber(n) {
//   let rev = 0;
//   while (n > 0) {
//     let rem = n % 10;
//     rev = rev * 10 + rem;
//     n = Math.floor(n / 10);
//   }
//   return rev
// }

// console.log(reverseNumber(123));
// rev = 32;

// Second Approch

function reverseNumber(n) {
  let store = [];
  let inArray = n.toString().split("");
  let i = inArray.length - 1;
  while (i >= 0) {
    store.push(+inArray[i]);
    i--;
  }
  const inNumber = +store.join("");
  return inNumber;
}

// console.log(reverseNumber(123));

// 19 => write a function to find the even number in the array

function findEven(arr) {
  let store = [];
  let i = 0;
  while (i < arr.length) {
    if (arr[i] % 2 === 0) {
      store.push(arr[i]);
    }
    i++;
  }
  return store;
}

// console.log(findEven([1, 2, 3, 4, 5, 6]));

// 20 => write a function to find the average of even number in the array

function averageOEven(arr) {
  let i = 0;
  let sum = 0;
  while (i < arr.length) {
    sum += arr[i];
    i++;
  }
  return sum / arr.length;
}
// console.log(averageOEven([1, 23, 45, 23, 45, 67]));

// nested loop practise

// 21 => write a function to generate left trainle angle

function generateLeftTraingle() {
  let traingle = "";

  for (let i = 1; i <= 5; i++) {
    for (let j = 0; j < i; j++) {
      traingle += "*";
    }
    traingle += "\n";
  }
  return traingle;
}

// console.log(generateLeftTraingle());

// Second Approch

function generateLeftTraingle() {
  let newString = "";
  for (let i = 1; i <= 5; i++) {
    newString += "*".repeat(i);
    newString += "\n";
  }
  return newString;
}

// console.log(generateLeftTraingle());

// => 22 write a function to generate rigth angle traingle

function leftAngleTraingle() {
  let newString = "";

  for (let i = 5; i >= 1; i--) {
    for (let j = 0; j < i; j++) {
      newString += "*";
    }
    newString += "\n";
  }
  return newString;
}

// console.log(leftAngleTraingle());

// Second Approch

function reverseAngleTraingle() {
  let newString = "";

  for (let i = 5; i >= 1; i--) {
    newString += "*".repeat(i);
    newString += "\n";
  }
  return newString;
}

// console.log(reverseAngleTraingle());

// 23 =>  Create a JavaScript program to generate a multiplication table (up to a specified range) using nested loops.

function generateTable(start, end) {
  for (let i = 1; i <= end; i++) {
    for (let j = start; j <= 10; j++) {
      console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log(`------------`);
  }
}

// console.log(generateTable(1, 5));

// 24 => write a function to generat rigth angle traingle using nested loop

function rigthAngleTraingle() {
  let rigthTraingle = "";

  for (let i = 1; i <= 5; i++) {
    for (let j = 0; j < 5 - i; j++) {
      rigthTraingle += " ";
    }
    for (let k = 0; k < i; k++) {
      rigthTraingle += "*";
    }
    rigthTraingle += "\n";
  }
  return rigthTraingle;
}

// console.log(rigthAngleTraingle());

// Second Approch

function rigthAngleTraingle() {
  let rigthTraingle = "";

  for (let i = 1; i <= 5; i++) {
    for (let j = 0; j < 5 - i; j++) {
      rigthTraingle += " ";
    }
    rigthTraingle += "*".repeat(i);
    rigthTraingle += "\n";
  }
  return rigthTraingle;
}

// console.log(rigthAngleTraingle());

// 25 => write a function to generate the reverse rigth traingle like thie:

// *****
//  ****
//   ***
//    **
//     *

function reverseRigthAngleTraingle() {
  let rigthTraingle = "";

  for (let i = 5; i >= 1; i--) {
    for (let j = 0; j < 5 - i; j++) {
      rigthTraingle += " ";
    }
    for (let k = 0; k < i; k++) {
      rigthTraingle += "*";
    }
    rigthTraingle += "\n";
  }
  return rigthTraingle;
}

// console.log(reverseRigthAngleTraingle());

// Second Approch

function reverseRigthAngleTraingle() {
  let rigthTraingle = "";

  for (let i = 5; i >= 1; i--) {
    rigthTraingle += " ".repeat(5 - i);
    rigthTraingle += "*".repeat(i);
    rigthTraingle += "\n";
  }
  return rigthTraingle;
}

// console.log(reverseRigthAngleTraingle());

// 26 => write a function generate number like this:

// 1111
// 1111
// 1111
// 1111

function numberPattern() {
  let pattern = "";

  for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= 4; j++) {
      pattern += "1";
    }
    pattern += "\n";
  }
  return pattern;
}

// console.log(numberPattern());

// Second Approch

function numberPattern() {
  let pattern = "";
  for (let i = 1; i <= 4; i++) {
    pattern += "1".repeat(4);
    pattern += "\n";
  }
  return pattern;
}

// console.log(numberPattern());

// 27 => write a function to generate number pattern like this

// 1111
// 2222
// 3333
// 4444

function numberPattern(string) {
  let newString = "";
  let num = 0;

  for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= 4; j++) {
      newString += string.slice(num, i);
    }
    newString += "\n";
    num++;
  }
  return newString;
}

// console.log(numberPattern("1234"));

// Second APProch

function numberPattern(string) {
  let newString = "";

  const breakString = string.split("");
  for (let i = 0; i < breakString.length; i++) {
    newString += breakString[i].repeat(4);
    newString += "\n";
  }
  return newString;
}

// console.log(numberPattern("1234"));

// 28 => write a function to generate number pattern like thie

// 1
// 22
// 333
// 4444

function numberPattern(string) {
  let newString = "";

  let num = 0;
  for (let i = 1; i <= string.length; i++) {
    for (let j = 0; j < i; j++) {
      newString += string.slice(num, i);
    }
    newString += "\n";
    num++;
  }
  return newString;
}

// console.log(numberPattern("1234"));

// Second Approch

function numberPattern(string) {
  let newString = "";

  let num = 0;
  for (let i = 1; i <= string.length; i++) {
    newString += string.slice(num, i).repeat(i);
    newString += "\n";
    num++;
  }
  return newString;
}

// console.log(numberPattern("1234"));

// 29 => write a function to generate nukber pattern like thid

// 1
// 23
// 456
// 78910

function numberPattern(string) {
  let newString = "";

  let initialValue = 0;
  for (let i = 0; i <= 5; i++) {
    let row = string.slice(initialValue, initialValue + i);
    newString += row + "\n";
    initialValue += i;
  }
  return newString;
}

// console.log(numberPattern("12345678910"));

// Second Approch

function numberPattern(string) {
  let newString = "";
  let initialValue = 0;

  for (let i = 1; i <= 5; i++) {
    let row = string.slice(initialValue, initialValue + i);
    newString += row + "\n";
    initialValue += i;
  }
  return newString;
}

// console.log(numberPattern("12345678910"));

// 30 => write a function to generate the triangle

function generateTraingle() {
  let newString = "";

  for (let i = 1; i <= 5; i++) {
    for (let j = 0; j < 5 - i; j++) {
      newString += " ";
    }

    for (let k = 0; k < 2 * i - 1; k++) {
      newString += "*";
    }
    newString += "\n";
  }
  return newString;
}

// console.log(generateTraingle());

// Second Approch

function generateTraingle() {
  let newString = "";

  for (let i = 1; i <= 5; i++) {
    newString += " ".repeat(5 - i);
    newString += "*".repeat(2 * i - 1);
    newString += "\n";
  }
  return newString;
}

// console.log(generateTraingle());

// 31 => write a function to generate reverse traingle

function reverseTraingle() {
  let newString = "";

  for (let i = 5; i >= 1; i--) {
    newString += " ".repeat(5 - i);
    newString += "*".repeat(2 * i - 1);
    newString += "\n";
  }
  return newString;
}

// console.log(reverseTraingle());

// string question practise

// 32 => write a function to count how many words and letter in the string

function countCharLetter(string) {
  let countWords = 1;
  let countLetter = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      countWords++;
    } else {
      countLetter++;
    }
  }
  // return [countWords, countLetter];
}

// Second Approch

function countCharLetter(string) {
  const letter = string.replaceAll(" ", "").length;
  const words = string.split(" ").length;

  return { words: words, letter: letter };
}

// console.log(countCharLetter("something create new"));

// 33 => write a function to count vowel and consonant in the string;

function countVowelConsonant(string) {
  let vowel = "";
  let consonant = "";

  const removeSpace = string.replaceAll(" ", "");
  for (let i = 0; i < removeSpace.length; i++) {
    if ("aeiou".includes(removeSpace[i])) {
      vowel += removeSpace[i];
    } else {
      consonant += removeSpace[i];
    }
  }
  return {
    vowels: vowel,
    vowelLength: vowel.length,
    ConstantLength: consonant.length,
    Consonant: consonant,
  };
}

// console.log(countVowelConsonant("my name is anash"));

// 34 => write a function to convert every first letter of word in capitalize;

function capitalize(string) {
  let newString = "";
  let breakSpace = string.split(" ");
  for (const words of breakSpace) {
    const firstLetter = words.charAt(0).toUpperCase() + words.slice(1);
    newString += `${firstLetter} `;
  }
  return newString;
}

// console.log(capitalize("my name is anash"));

// Second Appeoch with map

function capitalize(string) {
  return string
    .split(" ")
    .map((element) => element.charAt(0).toUpperCase() + element.slice(1))
    .join(" ");
}

// console.log(capitalize("this is the string"));

// 35 => write a function to check the words of string is contain more then 5 letter then reverse it

function isMoreThenFive(string) {
  let newString = "";

  const breakSpace = string.split(" ");
  for (const words of breakSpace) {
    if (words.length >= 5) {
      newString += `${words.toString().split("").reverse().join("")} `;
    } else {
      newString += `${words} `;
    }
  }
  return newString;
}

// console.log(isMoreThenFive("frontend is better then bakend"));

// solve in one line

function isMoreThenFive(string) {
  return string
    .split(" ")
    .map((element) =>
      element.length >= 5
        ? element.toString().split("").reverse().join("")
        : element
    )
    .join(" ");
}
// console.log(isMoreThenFive("frontend is better then backend"))

// 36 => write a function to convert a letter in lowercase if letter in uppercase other in uppercase

// function caseModifyier(string) {
//   let newString = "";
//   let store = [];

//   for (let i = 0; i < string.length; i++) {
//     const charCode = string[i].charCodeAt()
//     if (charCode >= 97 && charCode <= 122) {
//       newString += String.fromCharCode(charCode - 32);
//     } else if (charCode >= 65 && charCode <= 90) {
//       newString += String.fromCharCode(charCode + 32);
//     } else {
//       newString += String.fromCharCode(charCode)
//     }
//   }
//   return newString;
// }

// console.log(caseModifyier("This Is The String"));

// Second Approch

function caseModifyier(string) {
  let newString = "";

  for (let i = 0; i < string.length; i++) {
    const caseLower = string[i].toLowerCase();
    const caseUpper = string[i].toUpperCase();

    if (string[i].includes(caseLower)) {
      newString += string[i].toUpperCase();
    } else if (string[i].includes(caseUpper)) {
      newString += string[i].toLowerCase();
    } else {
      newString += string[i];
    }
  }
  return newString;
}

// console.log(caseModifyier("This Is The String"));

// third Approch

function caseModifier(string) {
  return string
    .split("")
    .map((element) =>
      element === element.toLowerCase()
        ? element.toUpperCase()
        : element.toLowerCase()
    )
    .join("");
}

// console.log(caseModifier("This Is The String"));

// 37 => write a function to the given string in anagra, or not

function isAnagram(string1, string2) {
  const sortingString1 = string1.split("").sort().join("");
  const sortingString2 = string2.split("").sort().join("");

  return sortingString1 === sortingString2;
}

// console.log(isAnagram("ilterf", "filter"));

// 38 => Implement a function to perform basic string compression using the counts of repeated characters. For example, the string "aabcccccaaa" would become "a2b1c5a3".

// function stringComparison(string) {
//   const breakString = string.split("");
//   let obj = {};

//   breakString.forEach((element) => {
//     if (obj[element]) obj[element]++;
//     else obj[element] = 1;
//   });

//   const getKeys = Object.keys(obj);
//   const getValues = Object.values(obj);

//   let newString = "";

//   for (let i = 0; i < getKeys.length; i++) {
//     newString += `${getKeys[i]}${getValues[i]}`;
//   }
//   return newString;
// }

// console.log(stringComparison("aabcccccaaa"));

// 39 => Given a string and a pattern, find the minimum window in the string that contains all the characters of the pattern.

function minimumWindowSubstring(string, pattern) {
  let newString = "";

  for (let i = 0; i < string.length; i++) {
    if (string[i].includes(pattern)) {
      newString += string[i];
    }
  }
  return newString;
}

console.log(minimumWindowSubstring("ADOBECODEBANC", "ABC"));