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

// function factorial(n) {
//   let product = 1;

//   for (let i = 1; i < n; i++) {
//     product *= i;
//   }
//   return product;
// }

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

// function fabonanciSeries(n) {
//   let arr = [0, 1];

//   for (let i = 2; i <= n; i++) {
//     arr.push(arr[i - 2] + arr[i - 1]);
//   }
//   return arr;
// }

// console.log(fabonanciSeries(4));

// 9 => write a function to find the duplicate numbers in the array

// function findDuplicate(arr) {
//   let obj = {};

//   for (let i = 0; i < arr.length; i++) {
//     if (obj[arr[i]]) obj[arr[i]]++;
//     else obj[arr[i]] = 1;
//   }

//   let store = [];
//   for (const keys in obj) {
//     if (obj[keys] >= 2) store.push(+keys);
//   }
//   return store;
// }

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

//console.log(generateTable(5));

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

//console.log(binarySearch([1, 2, 3, 4, 5], 5));

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

// console.log(countVowelConsonant("my names is anash"));

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

// console.log(capitalize("my names is anash"));

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

// 39 => write a function to add between tow who even

// exampl: 567841;
// answer: 5678-41;

// function addHyphen(string) {
//   let store = [];
//   string.split("").forEach((char) => {
//     const inNumber = +char;
//     store.push(inNumber);
//   });

//   let newString = `${store[0]}`;
//   for (let i = 1; i < store.length; i++) {
//     if (store[i - 1] % 2 === 0 && store[i] % 2 === 0) {
//       newString += `-${store[i]}`;
//     } else {
//       newString += `${store[i]}`;
//     }
//   }
//   return newString;
// }

// console.log(addHyphen("567841"));

// Second Approch

// function addHyphen(string) {
//   let store = [];
//   string.split("").forEach((char) => {
//     const inNumber = +char;
//     store.push(inNumber);
//   });

//   return store.reduce(
//     (prev, current, index, array) =>
//       index < array.length - 1 &&
//       current % 2 === 0 &&
//       array[index + 1] % 2 === 0
//         ? (prev += `${current}-`)
//         : (prev += `${current}`),
//     ""
//   );
// }

// console.log(addHyphen("567841"));

// 40 => write a function to find the middle value of the string

function medianValue(string) {
  let length = string.length;
  const middleValue = Math.floor(length / 2);

  for (let i = 0; i < string.length; i++) {
    if (length % 2 != 0) {
      return string[middleValue];
    } else {
      return string.slice(middleValue - 1, middleValue + 1);
    }
  }
}

// console.log(medianValue("application"));
// console.log(medianValue("filter"));

// 41 => write a function to find the multiple middle value in the array of names

function multipleMiddle(arr) {
  let store = [];
  for (const names of arr) {
    const length = names.length;
    const middle = Math.floor(length / 2);

    if (length % 2 != 0) {
      store.push(names.slice(middle, middle + 1));
    } else {
      store.push(names.slice(middle - 1, middle + 1));
    }
  }
  return store;
}

// console.log(multipleMiddle(["anash", "filter", "nawaz", "abbas", "kyle"]));

// Second Approch

function multipleMiddle(arr) {
  return arr.reduce((prev, current, index) => {
    const lengths = current.length;
    const middle = Math.floor(lengths / 2);

    lengths % 2 != 0
      ? prev.push(current.slice(middle, middle + 1))
      : prev.push(current.slice(middle - 1, middle + 1));

    return prev;
  }, []);
}

// console.log(multipleMiddle(["anash", "filter", "nawaz", "abbas", "kyle"]));

// 42 => doing a simple task

// create one input and two button addbutton and displaybutton
// your task  like write value in input and click addbutton and input value is empty
// then second time wrie  more valuke in the input and click addbuttion then click in display button
// the the show the whole data you write in input

// select all element

// const inputEl = document.querySelector("#input");
// const addButton = document.querySelector(".add");
// const displayButton = document.querySelector(".display");

// let store = [];
// function addvalue() {
//   let inputValue = +inputEl.value;
//   store.push(inputValue)
//   inputEl.value = "";
//   return store;
// }

// function showStoreData(){
//   console.log(addvalue())
// }

// displayButton.addEventListener("click", showStoreData);
// addButton.addEventListener("click", addvalue);

// 43 => write a function to find the second largest element in the array

function secondLargest(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  let firstElement = arr[0];
  const lastElement = arr[arr.length - 1];

  for (let i = 0; i < sortedArr.length; i++) {
    if (firstElement !== sortedArr[i] && sortedArr[i] != lastElement) {
      firstElement = sortedArr[i];
    }
  }
  return firstElement;
}

// console.log(secondLargest([54, 67, 34, 21, 90]));

// second Approch

function secondLargest(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  return sortedArr[sortedArr.length - 2];
}

// console.log(secondLargest([54, 67, 34, 21, 90]));

// third Approch

function secondLargest(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  const maximumNumber = Math.max(...sortedArr);
  const findIndex = sortedArr.indexOf(maximumNumber) - 1;
  return `this is second largest element in the array: ${arr[findIndex]}`;
}

// console.log(secondLargest([54, 67, 34, 21, 90]));

// 44 => impelement a function to find the missing element & number in the array

function somethingIsMissing(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + 1 != arr[i + 1]) {
      return arr[i] + 1;
    }
  }
}

// console.log(somethingIsMissing([1, 2, 3, 4, 6]));

// Second Approch

function somethingIsMissing(arr) {
  const reverseArr = arr.reverse();
  for (let i = 0; i < reverseArr.length - 1; i++) {
    if (reverseArr[i] - reverseArr[i + 1] !== 1) {
      return reverseArr[i] - 1;
    }
  }

  return "No missing element found";
}

// console.log(somethingIsMissing([1, 1, 1, 1, 3]));

// 45 => write a function to generate the faboananci Series using reduce method

function fabSerires(n) {
  let num = 2;
  return Array.from({ length: n }).reduce(
    (prev, current) => {
      const getValues = prev[num - 2] + prev[num - 1];
      prev.push(getValues);
      num++;
      return prev;
    },
    [0, 1]
  );
}

// console.log(fabSeries(10));

// 46 => write a function to print this type of pattern like this:

//       *
//       *
//       *
// * * * * * * *
//       *
//       *
//       *

// function plusPattern() {
//   let newString = "";

//   for (let i = 1; i <= 4; i++) {
//     newString += " ".repeat(5);
//     for (let j = 1; j >= 1; j--) {
//       newString += "*";
//     }
//     newString += "\n";
//   }
//   for (let k = 1; k <= 6; k++) {
//     newString += "* ";
//   }
//   newString += "\n";

//   for (let l = 0; l <= 3; l++) {
//     newString += " ".repeat(5);

//     for (let m = 1; m >= 1; m--) {
//       newString += "*";
//       newString += "\n";
//     }
//   }
//   return newString;
// }

// console.log(plusPattern());

// Second Approch

// function plusPattern() {
//   let newString = "";

//   for (let i = 1; i <= 4; i++) {
//     newString += " ".repeat(5);
//     newString += "*".repeat(1);
//     newString += "\n";
//   }
//   newString += "* ".repeat(6);
//   newString += "\n";

//   for (let l = 0; l <= 3; l++) {
//     newString += " ".repeat(5);
//     newString += "*".repeat(1);
//     newString += "\n";
//   }
//   return newString;
// }

// console.log(plusPattern());

// 47 => write a function to generate the pattern like this

//         *
//        * *
//       *   *
//      *     *
//     *       *
//    *         *
//   * * * * * * *

// function trainglePattern() {
//   let newString = "";
//   for (let i = 0; i < 1; i++) {
//     newString += " ".repeat(8);
//     newString += "*".repeat(1)
//     newString += "\n";
//   }

//   let n = 1;
//   for (let i = 0; i <= 7; i++) {
//     for (let j = 0; j < 7 - i; j++) {
//       newString += " ";
//     }
//     const increaseSpace = " ".repeat(n + i);
//     newString += `*${increaseSpace}*`;
//     newString += "\n";
//     n++;
//   }
//   newString += "* ".repeat(9);
//   return newString;
// }

// console.log(trainglePattern());

// 48 => write a function generate a patternn like this

// ********
// *      *
// *      *
// *      *
// ********

// function generatePattern() {
//   let newString = "********\n";
//   for (let i = 1; i <= 5; i++) {
//     newString += "*      *\n";
//   }
//   newString += "********\n"
//   return newString;
// }

// console.log(generatePattern());

// 49 => write funttion to geneta a diamond patterns

// function diamondPattern() {
//   let newString = "";

//   for (let i = 1; i <= 5; i++) {
//     for (let j = 0; j < 5 - i; j++) {
//       newString += " ";
//     }

//     for (let k = 0; k < 2 * i - 1; k++) {
//       newString += "*";
//     }
//     newString += "\n";
//   }
//   for (let n = 5; n >= 1; n--) {
//     for (let m = 0; m < 5 - n; m++) {
//       newString += " ";
//     }
//     for (let l = 0; l < 2 * n - 1; l++) {
//       newString += "*";
//     }
//     newString += "\n";
//   }
//   return newString;
// }

// console.log(diamondPattern());

// 50 => write afunction to print pattern like this

// ******
// *****
// ***
// **
// *
// **
// ***
// ****
// ******

// function generatePattern() {
//   let newString = "";
//   for (let i = 5; i >= 1; i--) {
//     for (let j = 0; j < i; j++) {
//       newString += "* ";
//     }
//     newString += "\n";
//   }

//   for (let l = 2; l <= 5; l++) {
//     for (let m = 0; m < l; m++) {
//       newString += "* ";
//     }
//     newString += "\n";
//   }
//   return newString;
// }

// console.log(generatePattern());

// Maths Problem

// 51 => write a function to check the given string is pangram or not

function isPangram(string) {
  const allLetters = "äbcdefghijklmnopqrstuvwxyz";
  const lowerCaseString = string.toLowerCase();

  for (const letter of lowerCaseString) {
    if (lowerCaseString.indexOf(letter) === -1) {
      return "Not Pangram";
    }
  }
  return "string is Pangram";
}

// console.log(isPangram("The Quick Brown Fox Jumps over the Lazy Dog"));

// 52 => write a function to count digit;

function counterDigit(digit) {
  return digit.toString().length;
}

// console.log(counterDigit(12345));

// 53 =>  write a function to reverse a number

function reverseNumber(number) {
  return +number.toString().split("").reverse().join("");
}

// console.log(reverseNumber(123));

// Second Way

function reverseNumber(number) {
  const inString = number.toString();
  let reverseIt = "";

  for (let i = inString.length - 1; i >= 0; i--) {
    reverseIt += inString[i];
  }
  return +reverseIt;
}

// console.log(reverseNumber(1234));

// 54 => write a function to check the given number is plimdrom or not

function isPalimdrom(number) {
  const inString = +number.toString().split("").reverse().join("");

  return number === inString
    ? "Number is Palimdrom"
    : "Number is Not Palimdrom";
}

// console.log(isPalimdrom(343));

// 55 => write a function to check the given number is armstring

function isArmstrong(number) {
  const inString = number.toString().split("");
  let sum = 0;

  for (let i = 0; i < inString.length; i++) {
    const makeArmstrongNumber = (+inString[i]) ** 3;
    sum += makeArmstrongNumber;
  }
  return sum === number ? "Number is ArmStrong" : "Number is not ArmStrong";
}
// console.log(isArmstrong(153));

// let's do with reduce method

function isArmstrong(number) {
  const checkArmstrong = number
    .toString()
    .split("")
    .reduce((prev, current) => {
      prev += (+current) ** 3;
      return prev;
    }, 0);

  return checkArmstrong === number
    ? "number is armstrong"
    : "number is not armstrong";
}

// console.log(isArmstrong(153));

// 56 => Given a number, print all the divisors of the number. A divisor is a number that gives the remainder as zero when divided.

// Input: n = 36
// Output: 1 2 3 4 6 9 12 18 36
// Explanation: All the divisors of 36 are printed.

function allNDivisor(n) {
  let store = [];
  let i = 0;

  while (n >= i) {
    if (n % i === 0) {
      store.push(i);
    }
    i++;
  }
  return store;
}

// console.log(allNDivisor(36));

// Second Approch

function allNDivisor(n) {
  let store = [];

  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      store.push(i);
    }
  }
  return store;
}

// console.log(allNDivisor(36));

// 57 => Given a number, check whether it is prime or not. A prime number is a natural number that is only divisible by 1 and by itself.

// Example 1:
// Input: N = 3
// Output: Prime
// Explanation: 3 is a prime number

function isPrime(n) {
  let i = 2;

  while (n >= i) {
    if (i % n === 0) {
      return true;
    }
    i++;
  }
  return false;
}

// console.log(isPrime(17));

function isPrime(n) {
  for (let i = 2; i <= n; i++) {
    if (i % n === 0) {
      return true;
    }
  }
  return false;
}

// console.log(isPrime(17));

// write a function to the given number is strong or not

// Example => we have a number 145
// now find the factorial of each digit 1 =>1, 2 => 24, 5 => 125
// and let;s add then then what is answer => 145

// let's Solve

// function isStrongNumber(number) {
//   const inString = number.toString().split("");
//   let store = [];

//   let sum = 0;
//   let product = 1;
//   for (let i = 0; i < inString.length; i++) {
//     for (let j = 1; j <= inString[i]; j++) {
//       product *= j;
//     }
//     store.push(product);
//     product = 1;
//     sum += store[i];
//   }
//   return sum === number ? "this is strong number" : "this is not strong number";
// }

// console.log(isStrongNumber(145));

// 58 => write a function to check the all vowel present in the sentence or not

function checkAllVowelPresentOrNot(sentence) {
  let newString = "";
  const vowel = "aeiou";
  for (let i = 0; i < vowel.length; i++) {
    const firstValue = vowel[i].toString().split("").shift();
    if (sentence.includes(firstValue)) {
      newString += firstValue;
    }
  }
  return newString === vowel
    ? "yes all vowel present in the sentence"
    : "not all vowel present in the sentence";
}

// console.log(
//   checkAllVowelPresentOrNot("my names is anash i want to be programmer")
// );

// 59 => wrtie a function to the given number is strong number or not

function isStrongNumber(number) {
  let sum = 0;
  let product = 1;
  const inArray = number.toString().split("");

  for (let i = 0; i < inArray.length; i++) {
    const inNumber = Number(inArray[i]);
    for (let j = 1; j <= inNumber; j++) {
      product *= j;
    }
    sum += product;
    product = 1;
  }
  return sum === number
    ? "this is the strong number"
    : "this is not strong number";
}

// console.log(isStrongNumber(145));

// 60 => write a function to find the twin prime number between 2 to 100

// function isPrime(n) {
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// function primeBetweenToTwoHundred(start, end) {
//   let store = [];
//   let twinPrime = "";
//   for (let i = start; i <= end; i++) {
//     if (isPrime(i)) {
//       store.push(i);
//     }
//    }
//   for (let i = 0; i < store.length; i++) {
//     if (store[i + 1] - store[i] === 2) {
//       twinPrime += `${store[i]} ${store[i + 1]}`;
//       twinPrime += "\n";
//     }
//   }
//   return twinPrime;
// }
// console.log(primeBetweenToTwoHundred(2, 100));

// 61 => Given an array of numbers, write a function that returns an array that...

// Has all duplicate elements removed.
// Is sorted from least to greatest value.

function uniqueSort(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }

  for (let i = 0; i < result.length; i++) {
    if (result[i] < result[i + 1]) {
      let temp = result[i + 1];
      result[i + 1] = result[i];
      result[i] = temp;
    }
  }
  // return result.reverse();
}

// console.log(uniqueSort([1, 2, 4, 3])); //  [1, 2, 3, 4]
// console.log(uniqueSort([1, 4, 4, 4, 4, 4, 3, 2, 1, 2])); //  [1, 2, 3, 4]
// console.log(uniqueSort([6, 7, 3, 2, 1])); //  [1, 2, 3, 6, 7]

// Second Approch

function uniqueSort(arr) {
  const removedDuplicate = Array.from(new Set(arr)).sort((a, b) => a - b);
  return removedDuplicate;
}

// console.log(uniqueSort([1, 2, 4, 3])); //  [1, 2, 3, 4]
// console.log(uniqueSort([1, 4, 4, 4, 4, 4, 3, 2, 1, 2])); //  [1, 2, 3, 4]
// console.log(uniqueSort([6, 7, 3, 2, 1])); //  [1, 2, 3, 6, 7]

// 62 =>  Create a function that takes an array of numbers and returns the sum of the two lowest positive numbers.

function sumTwoSmallestNums(arr) {
  let onlyPositive = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      onlyPositive.push(arr[i]);
    }
  }
  const sortedArr = onlyPositive.sort((a, b) => a - b);
  let sum = 0;
  for (let i = 0; i <= 1; i++) {
    sum += sortedArr[i];
  }
  // return sum;
}

// console.log(sumTwoSmallestNums([19, 5, 42, 2, 77])); //  7
// console.log(sumTwoSmallestNums([10, 343445353, 3453445, 3453545353453])); //  3453455
// console.log(sumTwoSmallestNums([2, 9, 6, -1])); //  8
// console.log(
//   sumTwoSmallestNums([879, 953, 694, -847, 342, 221, -91, -723, 791, -587])
// ); //  563
// console.log(sumTwoSmallestNums([3683, 2902, 3951, -475, 1617, -2385])); //  451

// Second Approch

function sumTwoSmallestNums(arr) {
  const positiveInteger = arr.filter((element) => element > 0);

  const reverseSorted = positiveInteger.sort((a, b) => a - b).reverse();
  const firstLowest = reverseSorted[reverseSorted.length - 1];
  const secondLowest = reverseSorted[reverseSorted.length - 2];

  return firstLowest + secondLowest;
}

// console.log(sumTwoSmallestNums([19, 5, 42, 2, 77])); //  7
// console.log(sumTwoSmallestNums([10, 343445353, 3453445, 3453545353453])); //  3453455
// console.log(sumTwoSmallestNums([2, 9, 6, -1])); //  8
// console.log( sumTwoSmallestNums([879, 953, 694, -847, 342, 221, -91, -723, 791, -587])
// );/  563
// console.log(sumTwoSmallestNums([3683, 2902, 3951, -475, 1617, -2385])); //  451

// 63 => Given a square matrix (i.e. same number of rows as columns), its trace is the sum of the entries in the main diagonal (i.e. the diagonal line from the top left to the bottom right).

// As an example, for:

// [
// [1, 2, 3],
// [4, 5, 6],
// [7, 8, 9]
// ]
// ... the trace is 1 + 5 + 9 = 15.

function trace(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i][i];
  }
  return sum;
}

// console.log(
//   trace([
//     [1, 4],
//     [4, 1],
//   ])
// ); //  2
// // 1 + 1 = 2
// console.log(
//   trace([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// ); //  15
// // 1 + 5 + 9 = 15
// console.log(
//   trace([
//     [1, 0, 1, 0],
//     [0, 2, 0, 2],
//     [3, 0, 3, 0],
//     [0, 4, 0, 4],
//   ])
// ); //  10

// // 1 + 2 + 3 + 4 = 10

// 64 => Given a total due and an array representing the amount of change in your pocket, determine whether or not you are able to pay for the item. Change will always be represented in the following order: quarters, dimes, nickels, pennies.

// To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50.

function changeEnough(change, amount_due) {
  const total_change =
    change[0] * 0.25 + change[1] * 0.1 + change[2] * 0.05 + change[3] * 0.01;

  return total_change >= amount_due;
}

// // Test cases
// console.log(changeEnough([2, 100, 0, 0], 14.11)); // //  false
// console.log(changeEnough([0, 0, 20, 5], 0.75)); // //  true
// console.log(changeEnough([30, 40, 20, 5], 12.55)); // //  true
// console.log(changeEnough([10, 0, 0, 50], 3.85)); // //  false
// console.log(changeEnough([1, 0, 5, 219], 19.99)); // //  false

// 65 => Create a function that takes an array of items and checks if the last item matches the rest of the array concatenated together.

function matchLastItem(arr) {
  const lastItem = arr.pop();
  const connectOtherElement = arr.join("");
  return lastItem === connectOtherElement;
}

// console.log(matchLastItem(["rsq", "6hi", "g", "rsq6hig"])); //  true
// console.log(matchLastItem([1, 1, 1, "11"])); //  false
// console.log(matchLastItem([8, "thunder", true, "8thundertrue"])); //  true

function matchLastItem(arr) {
  const lastItem = arr[arr.length - 1];
  const otherElement = arr.slice(0, arr.length - 1).join("");
  return otherElement === lastItem;
}

// console.log(matchLastItem(["rsq", "6hi", "g", "rsq6hig"])); //  true
// console.log(matchLastItem([1, 1, 1, "11"])); //  false
// console.log(matchLastItem([8, "thunder", true, "8thundertrue"])); //  true

// 66 => Given an array of integers, find the pair of adjacent elements that have the largest product and return that product.

function adjacentProduct(arr) {
  let ProductTwoWElement = [];

  for (let i = 0; i < arr.length - 1; i++) {
    ProductTwoWElement.push(arr[i] * arr[i + 1]);
  }
  const largestProduct = Math.max(...ProductTwoWElement);
  return largestProduct;
}

// console.log(adjacentProduct([3, 6, -2, -5, 7, 3])); //  21
// console.log(adjacentProduct([5, 6, -4, 2, 3, 2, -23])); //  30
// console.log(adjacentProduct([0, -1, 1, 24, 1, -4, 8, 10])); //  80

// 67 => John is playing a dice game. The rules are as follows.

// Roll two dice.
// Add the numbers on the dice together.
// Add the total to your overall score.
// Repeat this for three rounds.
// But if you roll DOUBLES, your score is instantly wiped to 0 and your game ends immediately!

// Create a function which takes in a matrix as input, and return John's score after his game has ended.

function diceGame(arr) {
  let totalScore = 0;

  for (let pair of arr) {
    console.log(arr);
    if (pair[0] === pair[1]) {
      totalScore += 0;
    } else {
      totalScore += pair[0] + pair[1];
    }
  }

  return totalScore;
}

// // Test cases
// console.log(
//   diceGame([
//     [1, 2],
//     [3, 4],
//     [5, 6],
//   ])
// console.log(// ); //);
// console.log(
//   diceGame([
//     [1, 1],
//     [5, 6],
//     [6, 4],
//   ])
// console.log(// ); //);
// console.log(
//   diceGame([
//     [4, 5],
//     [4, 5],
//     [4, 5],
//   ])
// console.log(// ); //);

// console.log(
//   diceGame([
//     [1, 2],
//     [3, 4],
//     [5, 6],
//   ])
// ); // '' 21
// console.log(
//   diceGame([
//     [1, 1],
//     [5, 6],
//     [6, 4],
//   ])
// ); // '' 0
// console.log(
//   diceGame([
//     [4, 5],
//     [4, 5],
//     [4, 5],
//   ])
// ); // '' 27

// 68 => In this challenge, you have to establish if a given integer n is a Sastry number. If the number resulting from the concatenation of an integer n with its successor is a perfect square, then n is a Sastry Number.

// Given a positive integer n, implement a function that returns true if n is a Sastry number, or false if it's not.

function isSastry(n) {
  let concatenated = parseInt(String(n) + String(n + 1));
  let squareRoot = Math.sqrt(concatenated);
  return Number.isInteger(squareRoot);
}

// console.log(isSastry(183));
// // Concatenation of n and its successor = 183184
// // 183184 is a perfect square (428 ^ 2)
// console.log(isSastry(184));
// // Concatenation of n and its successor = 184185
// // 184185 is not a perfect square
// console.log(isSastry(106755));
// // Concatenation of n and its successor = 106755106756
// // 106755106756 is a perfect square (326734 ^ 2)

// 69 => Given an array with an odd number of elements, return whether the scale will tip "left" or "right" based on the sum of the numbers. The scale will tip on the direction of the largest total. If both sides are equal, return "balanced".

function scaleTip(arr) {
  const findTipIndex = arr.indexOf("I");
  const leftArr = arr.slice(0, findTipIndex);
  const rigthArr = arr.slice(findTipIndex + 1, arr.length);

  let leftSum = 0;
  let rigthSum = 0;
  for (let i = 0; i < leftArr.length; i++) {
    leftSum += leftArr[i];
    rigthSum += rigthArr[i];
  }
  if (leftSum > rigthSum) return "left";
  else if (rigthSum > leftSum) return "right";
  else return "balance";
}

// console.log(scaleTip([0, 0, "I", 1, 1]));
// // 0 < 2 so it will tip right
// console.log(scaleTip([1, 2, 3, "I", 4, 0, 0]));
// // 6 > 4 so it will tip left
// console.log(scaleTip([5, 5, 5, 0, "I", 10, 2, 2, 1]));
// // 15 = 15 so it will stay balanced

// 70 => Write a method that returns array of all the numbers from 1 to an integer argument. But for multiples of three use “Fizz” instead of the number and for the multiples of five use “Buzz”. For numbers which are multiples of both three and five use “FizzBuzz”.

function fizzBuzz(n) {
  let store = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0) {
      store.push("fizz");
    } else if (i % 5 === 0) {
      store.push("Buzz");
    } else if (i % 3 === 0 && i % 5 === 0) {
      store.push("fizzBuzz");
    } else {
      store.push(i);
    }
  }
  return store;
}

// console.log(fizzBuzz(10)); //  [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz"]
// console.log(fizzBuzz(15)); //  [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]

// 71 => Create a function which takes in a number n as input and returns all numbers up to and including n joined together in a string. Separate each digit from each other with the character "-".

function joinDigits(n) {
  let digitString = "";

  for (let i = 1; i <= n; i++) {
    digitString += i;
  }

  const counting = digitString.split("");
  let newString = "";
  for (let i = 0; i < counting.length; i++) {
    newString += `${counting[i]}-`;
  }
  const finalResult = newString.slice(0, newString.length - 1);
  return finalResult;
}

// console.log(joinDigits(4)); //  "1-2-3-4"
// console.log(joinDigits(11)); // "1-2-3-4-5-6-7-8-9-1-0-1-1"
// console.log(joinDigits(15)); //1-2-3-4-5-6-7-8-9-1-0-1-1-1-2-1-3-1-4-1-5"

// 72 => An isogram is a word that has no duplicate letters. Create a function that takes a string and returns either true or false depending on whether or not it's an "isogram".

function isIsogram(string) {
  let letter = string.toLowerCase().split("");
  for (let i = 0; i < letter.length; i++) {
    if (letter[i] === letter[i + 1]) {
      return false;
    }
  }
  return true;
}

// console.log(isIsogram("Algorism"));
// console.log(isIsogram("PasSword"));
// console.log(isIsogram("Consecutive"));

// 73 => Write a function that returns the longest sequence of consecutive zeroes in a binary string
function longestZero(string) {
  let newString = [];
  let main = [];

  for (let i = 0; i < string.length; i++) {
    if (string[i] === "0") {
      newString.push(string[i]);
    } else {
      if (newString.length > 0) {
        main.push(newString);
        newString = [];
      }
    }
  }

  if (newString.length > 0) {
    main.push(newString);
  }

  return main;
}

// console.log(longestZero("01100001011000")); //  [["0", "0", "0", "0"]]
// console.log(longestZero("100100100")); //  [["0", "0"]]
// console.log(longestZero("11111")); //  []

// 74 => Given what is supposed to be typed and what is actually typed, write a function that returns the broken key(s). The function looks like:

function findBrokenKeys(str1, str2) {
  const uniqueElement = [];
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      uniqueElement.push(str1[i]);
    }
  }
  // return uniqueElement;
}

// console.log(findBrokenKeys("happy birthday", "hawwy birthday")); //  ["p"]
// console.log(findBrokenKeys("starry night", "starrq light")); //  ["y", "n"]
// console.log(findBrokenKeys("beethoven", "affthoif5")); //  ["b", "e", "v", "n"]

// Second approch

function findBrokenKeys(str1, str2) {
  return str1.split("").filter((char) => !str2.includes(char));
}

// console.log(findBrokenKeys("happy birthday", "hawwy birthday")); //  ["p"]
// console.log(findBrokenKeys("starry night", "starrq light")); //  ["y", "n"]
// console.log(findBrokenKeys("beethoven", "affthoif5")); //  ["b", "e", "v", "n"]

// 75 => Create a function that takes in an array (slot machine outcome) and returns true if all elements in the array are identical, and false otherwise. The array will contain 4 elements.

function testJackpot(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i + 1]) {
      return false;
    }
  }
  return true;
}

// console.log(testJackpot(["@", "@", "@", "@"])); //  true
// console.log(testJackpot(["abc", "abc", "abc", "abc"])); //  true
// console.log(testJackpot(["SS", "SS", "SS", "SS"])); //  true
// console.log(testJackpot(["&&", "&", "&&&", "&&&&"])); //  false
// console.log(testJackpot(["SS", "SS", "SS", "Ss"])); //  false

// 76 => You have an array of integers, and for each index you want to find the product of every integer except the integer at that index.

// Create a function that takes an array of integers and returns an array of the products.\

function getProducts(arr) {
  let product = 1;
  let store = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) {
        store.push(i);
      } else {
        product *= arr[j];
      }
    }
    store[i] = product;
    product = 1;
  }
  return store;
}

// console.log(getProducts([1, 7, 3, 4])); //  [84, 12, 28, 21]
// console.log(getProducts([1, 2, 6, 5, 9])); //  [540, 270, 90, 108, 60]
// console.log(getProducts([1, 2, 3, 0, 5])); //  [0, 0, 0, 30, 0]

// 77 => Create a function that takes an array and finds the integer which appears an odd number of times.

function findOdd(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let countObj = {};
  arr.forEach((num) => {
    if (countObj[num]) {
      countObj[num]++;
    } else {
      countObj[num] = 1;
    }
  });
  for (let key in countObj) {
    if (countObj.hasOwnProperty(key)) {
      if (countObj[key] % 2 !== 0) {
        return parseInt(key);
      }
    }
  }
}

// console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5])); //  -1
// console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5])); //  5
// console.log(findOdd([10])); //  10

// function findOdd(arr) {
//   const countOccurence = arr.reduce((prev, current) => {
//     if (prev[current]) prev[current]++;
//     else prev[current] = 1;
//     return prev;
//   }, {});

//   for (const keys in countOccurence) {
//     if (countOccurence[keys] % 2 !== 0) {
//       return parseInt(keys);
//     }
//   }
// }

// console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5])); //  -1
// console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5])); //  5
// console.log(findOdd([10])); //  10

// 78 => Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string.

function hackerSpeak(string) {
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "a") {
      newString += string[i] = 4;
    } else if (string[i] === "o") {
      newString += string[i] = 0;
    } else if (string[i] === "i") {
      newString += string[i] = 1;
    } else if (string[i] === "s") {
      newString += string[i] = 5;
    } else {
      newString += string[i];
    }
  }
  return newString;
}

// console.log(hackerSpeak("javascript is cool")); //  "j4v45cr1pt 15 c00l"
// console.log(hackerSpeak("programming is fun")); //  "pr0gr4mm1ng 15 fun"
// console.log(hackerSpeak("become a coder")); //  "b3c0m3 4 c0d3r"

function hackerSpeak(string) {
  const changeString = string
    .replaceAll("a", "4")
    .replaceAll("i", "1")
    .replaceAll("o", "0")
    .replaceAll("s", "5");

  return changeString;
}

// console.log(hackerSpeak("javascript is cool")); //  "j4v45cr1pt 15 c00l"
// console.log(hackerSpeak("programming is fun")); //  "pr0gr4mm1ng 15 fun"
// console.log(hackerSpeak("become a coder")); //  "b3c0m3 4 c0d3r"

// 79 =>Create a function that takes an array of numbers and returns the number that's unique.

function unique(arr) {
  let obj = {};

  arr.forEach((item) => {
    if (obj[item]) obj[item]++;
    else obj[item] = 1;
  });

  for (const keys in obj) {
    if (obj[keys] === 1) {
      return +keys;
    }
  }
}

// console.log(unique([3, 3, 3, 7, 3, 3])); // 7
// console.log(unique([0, 0, 0.77, 0, 0])); // 0.77
// console.log(unique([0, 1, 1, 1, 1, 1, 1, 1])); // 0

// 80 => Create a function that takes a string as an argument and returns the Morse code equivalent.

function encodeMorse(string) {}

// console.log(encodeMorse("EDABBIT CHALLENGE")); //  ". -.. .- -... -... .. -   -.-. .... .- .-.. .-.. . -. --. ."
// console.log(encodeMorse("HELP ME !")); //  ".... . .-.. .--.   -- .   -.-.--"

// 81 => Create a function that takes an array of card numbers and checks if the sum of their value exceeds 21. If the sum exceeds 21, return true and if the sum is under or equal to 21, return false. Values of the cards are as follows:

function overTwentyOne(arr) {
  let totalValue = 0;
  let numAces = 0;

  arr.forEach((cards) => {
    if (!isNaN(cards)) {
      totalValue += parseInt(cards);
    } else if (cards === "A") {
      numAces++;
    } else {
      totalValue += 10;
    }
  });

  for (let i = 0; i < numAces; i++) {
    if (totalValue + 11 > 21) {
      totalValue += 1;
    } else {
      totalValue += 11;
    }
  }
  if (totalValue > 21) {
    return true;
  } else {
    return false;
  }
}

// console.log(overTwentyOne([2, 8, "J"])); //  false
// console.log(overTwentyOne(["A", "J", "K"])); //  false
// console.log(overTwentyOne([5, 5, 3, 9])); //  true
// console.log(overTwentyOne([2, 6, 4, 4, 5])); //  false
// console.log(overTwentyOne(["J", "Q", "K"])); //  true

// 82 => A Sudoku is a 9x9 grid that is completed when every 3x3 square, row and column consists of the numbers 1-9.

// For this task, you will be given a completed 3x3 square, in the form of a two-dimensional array. Create a function that checks to make sure this 3x3 square contains each number from 1-9 exactly once. Make sure there are no duplicates, and no numbers outside this range.

function isMiniSudoku(arr) {
  const inOneArr = arr.flat().sort((a, b) => a - b);

  for (let i = 0; i < inOneArr.length; i++) {
    if (inOneArr[i] !== i + 1) {
      return false;
    }
  }
  return true;
}

// console.log(
//   isMiniSudoku([
//     [1, 3, 2],
//     [9, 7, 8],
//     [4, 5, 6],
//   ])
// ); //  true

// console.log(
//   isMiniSudoku([
//     [1, 1, 3],
//     [6, 5, 4],
//     [8, 7, 9],
//   ])
// ); //  false
// // The 1 is repeated twice

// console.log(
//   isMiniSudoku([
//     [0, 1, 2],
//     [6, 4, 5],
//     [9, 8, 7],
//   ])
// ); //  false
// // The 0 is included (outside range)

// console.log(
//   isMiniSudoku([
//     [8, 9, 2],
//     [5, 6, 1],
//     [3, 7, 4],
//   ])
// ); //  true

// other Approch

function isMiniSudoku(arr) {
  const inOneArr = arr.flat().sort((a, b) => a - b);
  for (let i = 0; i < inOneArr.length - 1; i++) {
    if (inOneArr[i + 1] - inOneArr[i] !== 1) {
      return false;
    }
  }
  return true;
}

// console.log(
//   isMiniSudoku([
//     [1, 3, 2],
//     [9, 7, 8],
//     [4, 5, 6],
//   ])
// ); //  true

// console.log(
//   isMiniSudoku([
//     [1, 1, 3],
//     [6, 5, 4],
//     [8, 7, 9],
//   ])
// ); //  false
// // The 1 is repeated twice

// console.log(
//   isMiniSudoku([
//     [0, 1, 2],
//     [6, 4, 5],
//     [9, 8, 7],
//   ])
// ); //  false
// // The 0 is included (outside range)

// console.log(
//   isMiniSudoku([
//     [8, 9, 2],
//     [5, 6, 1],
//     [3, 7, 4],
//   ])
// ); //  true

// 83 => A number is left-heavy if the digits on the left side are larger than the digits on the right. It is right-heavy if the digits on the right side are larger than the digits on the left. Else, it is balanced.

// Create a function that takes in an integer and classifies it into one of the three mutually exclusive categories: left, right or balanced. For inputs with an odd number of integers, ignore the fulcrum (the middle number).

function seesaw(digits) {
  const breakDigits = digits.toString().split("");
  const inNumber = Math.floor(breakDigits.length / 2);
  const firstNumber = parseInt(breakDigits.slice(0, inNumber).join(""));
  const lastNumber = parseInt(breakDigits.slice(-inNumber).join(""));

  if (firstNumber > lastNumber) {
    return "left";
  } else if (lastNumber > firstNumber) {
    return "right";
  } else {
    return "balanced";
  }
}

// console.log(seesaw(3449)); //  "right"   // since 34 < 49
// console.log(seesaw(1143113)); //  "left"    // since 114 > 113 (3 is the fulcrum)
// console.log(seesaw(585585)); //  "balanced"// since 585 == 585

// 84 => Create a function that takes in an array of full names and returns the initials.

function initialize(arr) {
  let initial = [];
  for (const names of arr) {
    let newString = "";
    const getfirstChar = names.split(" ");
    for (const items of getfirstChar) {
      newString += `${items.charAt(0)}. `;
    }
    initial.push(newString.trim());
  }
  return initial;
}

// console.log(initialize(["Stephen Hawking"])); //  ["S. H."]
// console.log(initialize(["Harry Potter", "Ron Weasley"])); //  ["H. P.", "R. W."]
// console.log(initialize(["Sherlock Holmes", "John Watson", "Irene Adler"])); //  ["S. H.", "J. W.", "I. A."]

// other approch

function initialize(arr) {
  return arr.reduce((prev, current) => {
    const getFirstChar = current
      .toString()
      .split(" ")
      .map((names) => `${names.charAt(0)}. `)
      .join(" ")
      .trim();
    return prev.concat(getFirstChar);
  }, []);
}

// console.log(initialize(["Stephen Hawking"])); //  ["S. H."]
// console.log(initialize(["Harry Potter", "Ron Weasley"])); //  ["H. P.", "R. W."]
// console.log(initialize(["Sherlock Holmes", "John Watson", "Irene Adler"])); //  ["S. H.", "J. W.", "I. A."]

// 85 => Create a function that takes an array and determines whether it's strictly increasing, strictly decreasing, or neither.

function check(arr) {
  let increasing = true;
  let decreasing = true;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] >= arr[i + 1]) {
      increasing = false;
    }
    if (arr[i] <= arr[i + 1]) {
      decreasing = false;
    }
  }

  if (increasing) {
    return "increasing";
  } else if (decreasing) {
    return "decreasing";
  } else {
    return "neither";
  }
}

// console.log(check([1, 2, 3])); // "increasing"
// console.log(check([3, 2, 1])); // "decreasing"
// console.log(check([1, 2, 1])); // "neither"
// console.log(check([1, 1, 2])); // "neither"

// 86 => Create a function that takes a phrase and transforms each word using the following rules:

// Keep first and last character the same.
// Transform middle characters into a dash -.

function partiallyHide(string) {
  const breakString = string.split(" ");
  let newString = "";

  for (let i = 0; i < breakString.length; i++) {
    let length = breakString[i].length - 1;
    newString += `${breakString[i].charAt(0)}`;
    newString += `${"-".repeat(breakString[i].slice(1, length).length)}`;
    newString += `${breakString[i].charAt(length)}  `;
  }
  newString += " ";
  return newString;
}

// console.log(partiallyHide("skies were pretty")); //  "s---s w--e p----y"
// console.log(partiallyHide("red is not my color")); //  "r-d is n-t my c---r"
// console.log(partiallyHide("She rolled her eyes")); //  "S-e r----d h-r e--s"
// console.log(partiallyHide("Harry went to fight the basilisk")); //  "H---y w--t to f---t t-e b------k"

// other approch

function partiallyHide(string) {
  return string.split(" ").reduce((prev, current) => {
    prev += current.charAt(0);
    prev += "-".repeat(current.slice(1, current.length - 1).length);
    prev += current.charAt(current.length);

    return prev;
  }, "");
}

// console.log(partiallyHide("skies were pretty")); //  "s---s w--e p----y"
// console.log(partiallyHide("red is not my color")); //  "r-d is n-t my c---r"
// console.log(partiallyHide("She rolled her eyes")); //  "S-e r----d h-r e--s"
// console.log(partiallyHide("Harry went to fight the basilisk")); //  "H---y w--t to f---t t-e b------k"

// other approch

function partiallyHide(string) {
  let newString = "";
  const breakString = string.split(" ");

  for (const names of breakString) {
    newString += names.charAt(0);
    newString += "-".repeat(names.slice(0, names.length - 2).length);
    newString += `${names.charAt(names.length - 1)} `;
  }
  return newString;
}

// console.log(partiallyHide("skies were pretty")); //  "s---s w--e p----y"
// console.log(partiallyHide("red is not my color")); //  "r-d is n-t my c---r"
// console.log(partiallyHide("She rolled her eyes")); //  "S-e r----d h-r e--s"
// console.log(partiallyHide("Harry went to fight the basilisk")); //  "H---y w--t to f---t t-e b------k"

// 87 => Create a function that counts the number of blocks of two or more adjacent 1s in an array.

function countOnes(arr) {
  let countBlocks = 0;
  let currentBlockLength = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      currentBlockLength++;
    } else {
      if (currentBlockLength >= 2) {
        countBlocks++;
      }
      currentBlockLength = 0;
    }
  }

  if (currentBlockLength >= 2) {
    countBlocks++;
  }
  return countBlocks;
}

// console.log(countOnes([1, 0, 0, 1, 1, 0, 1, 1, 1])); //  2// Two instances: [1, 1] (middle) and [1, 1, 1] (end)
// console.log(countOnes([1, 0, 1, 0, 1, 0, 1, 0])); //  0
// console.log(countOnes([1, 1, 1, 1, 0, 0, 0, 0])); //  1
// console.log(countOnes([0, 0, 0])); //  0

// 88 =>  Create a function that keeps only strings with repeating identical characters (in other words, it has a set size of 1).

// function identicalFilter(arr) {
//   let store = [];

//   for (let i = 0; i < arr.length; i++) {
//     const word = arr[i].toString();
//     let isIdentical = true;
//     for (let j = 1; j < word.length; j++) {
//       if (word[j] !== word[0]) {
//         isIdentical = false;
//         break;
//       }
//     }
//     if (isIdentical) {
//       store.push(word);
//     }
//   }
//   return store;
// }

// console.log(identicalFilter(["aaaaaa", "bc", "d", "eeee", "xyz"])); //  ["aaaaaa", "d", "eeee"]
// console.log(identicalFilter(["88", "999", "22", "545", "133"])); //  ["88", "999", "22"]
// console.log(identicalFilter(["xxxxo", "oxo", "xox", "ooxxoo", "oxo"])); //  []
// console.log(identicalFilter(["88", "999", "22"])); //  []

// 89 => Write a function that moves all elements of one type to the end of the array.

function moveToEnd(arr, target) {
  let result = [];
  let targetElement = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      targetElement.push(arr[i]);
    } else {
      result.push(arr[i]);
    }
  }

  result = result.concat(targetElement);
  return result;
}

// console.log(moveToEnd([1, 3, 2, 4, 4, 1], 1)); //  [3, 2, 4, 4, 1, 1]// Move all the 1s to the end of thearray.
// console.log(moveToEnd([7, 8, 9, 1, 2, 3, 4], 9)); //  [7, 8, 1, 2, 3, 4, 9]
// console.log(moveToEnd(["a", "a", "a", "b"], "a")); //  ["b", "a", "a", "a"]

// 90 => Create a function that determines whether elements in an array can be re-arranged to form a consecutive list of numbers where each number appears exactly once.

function cons(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  for (let i = 0; i < sortedArr.length - 1; i++) {
    if (sortedArr[i + 1] - sortedArr[i] !== 1) {
      return false;
    } else if (sortedArr[i] - sortedArr[i + 1] === 0) {
      return false;
    }
  }
  return true;
}

// console.log(cons([5, 1, 4, 3, 2])); //  true// Can be re-arranged to form [1, 2, 3, 4, 5]
// console.log(cons([5, 1, 4, 3, 2, 8])); //  false
// console.log(cons([5, 6, 7, 8, 9, 9])); //  false// 9 appears twice

// 91 => Create a function that divides a string into parts of size n.

function partition(string, n) {
  let store = [];
  const firstElement = string.slice(0, n);
  const lastElement = string.slice(n);

  store.push(firstElement, lastElement);

  return store;
}

// console.log(partition("chew", 2)); //  ["ch", "ew"]
// console.log(partition("thematic", 4)); //  ["them", "atic"]
// console.log(partition("c++", 2)); //  ["c+", "+"]

// other approch

function partition(string, n) {
  let store = [];
  for (let i = 0; i < string.length; i++) {
    if (i < n) {
      store.push(string[i]);
    }
  }
  store.push(string.slice(n));
  return store;
}

// console.log(partition("chew", 2)); //  ["ch", "ew"]
// console.log(partition("thematic", 4)); //  ["them", "atic"]
// console.log(partition("c++", 2)); //  ["c+", "+"]

// 92 => Write a function that reverses the subarray between the start and end index (inclusive). The rest of the array should be kept the same.

function rangedReversal(arr, firstIndex, SecondIndex) {
  let store = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === firstIndex) {
      store.push(arr[SecondIndex]);
    } else if (i === SecondIndex) {
      store.push(arr[firstIndex]);
    } else {
      store.push(arr[i]);
    }
  }
  return store;
}

// console.log(rangedReversal([1, 2, 3, 4, 5, 6], 1, 3)); //  [1, 4, 3, 2, 5, 6]
// console.log(rangedReversal([1, 2, 3, 4, 5, 6], 0, 4)); //  [5, 4, 3, 2, 1, 6]
// console.log(rangedReversal([9, 8, 7, 4], 0, 0)); //  [9, 8, 7, 4]

// 93 => Designing Rugs
// Write a function that accepts the height and width (m, n) and an optional proc s and generates a list with m elements. Each element is a string consisting of either:

// The default character (hash #) repeating n times (if no proc is given).
// The character passed in through the proc repeating n times.
// Examples

function make_rug(firstloop, secondloop, rug) {
  let newString = "";

  for (let i = 0; i < firstloop; i++) {
    for (let j = 0; j < secondloop; j++) {
      newString += rug;
    }
    newString += "\n";
  }
  return newString;
}

// console.log(make_rug(3, 5, "#"));
//  [
// "#####",
// "#####",
// "#####"
// ]
// console.log(make_rug(3, 5, "$"));
//  [
// "$$$$$",
// "$$$$$",
// "$$$$$"
// ]
// console.log(make_rug(2, 2, "A"));
//  [
// "AA",
// "AA"
// ]
//
// Notes
// You can set a value for the parameter when creating the function e.g. def func(x = 3)

// other Approch

function make_rug(firstloop, secondLoop, rug) {
  let newString = "";

  for (let i = 0; i < firstloop; i++) {
    newString += rug.repeat(secondLoop);
    newString += "\n";
  }
  return newString;
}

// console.log(make_rug(3, 5, "#"));
// console.log(make_rug(3, 5, "$"));
// console.log(make_rug(2, 2, "A"));

// 94 => Sum of Missing Numbers
// Create a function that returns the sum of missing numbers from the given list.

// Examples

// function sum_missing_numbers(arr) {
//   const sortedArr = arr.sort((a, b) => a - b);
//   const initiaValue = sortedArr[0];
//   const finalValue = sortedArr[sortedArr.length - 1];
//   let diffrentValue = [];

//   for (let i = initiaValue; i < finalValue; i++) {
//     console.log(sortedArr[i]);
//   }
// }
// console.log(sum_missing_numbers([4, 3, 8, 1, 2])); //  18 // # 5 + 6 + 7 = 18
// console.log(sum_missing_numbers([17, 16, 15, 10, 11, 12])); //  27 // # 13 + 14 = 27
// console.log(sum_missing_numbers([1, 2, 3, 4, 5])); //  0
// # No Missing Numbers (i.e. all numbers in [1, 5] are present in the list)
// Notes
// The numerical range to consider when searching for the missing numbers in the list is the sequence of consecutive numbers between the minimum and maximum of the numbers (inclusive).

// 95 => Sum of List Elements Except Itself
// A list is given. Return a new list having the sum of all its elements except itself. For more clarity, check the examples below.

// Clarification;
// [1, 2, 3, 4] = for first element => sum will be 2+3+4 = [9]
// [1, 2, 3, 4] = for second element => sum will be 1+3+4 = [9, 8]
// [1, 2, 3, 4] = for third element => sum will be 1+2+4 = [9, 8, 7]
// [1, 2, 3, 4] = for fourth element => sum will be 1+2+3 = [9, 8, 7, 6]

// Examples

function lst_ele_sum(arr) {
  let sum;
  let storeSum = [];
  for (let i = 0; i < arr.length; i++) {
    sum = 0;
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        sum += arr[j];
      }
    }
    storeSum.push(sum);
    sum = 0;
  }
  return storeSum;
}

// console.log(lst_ele_sum([1, 2, 3, 2, 1])); //  [8, 7, 6, 7, 8]
// console.log(lst_ele_sum([1, 2])); //  [2, 1]
// console.log(lst_ele_sum([1, 2, 3])); //  [5, 4, 3]
// console.log(lst_ele_sum([1, 2, 3, 4, 5])); //  [14, 13, 12, 11, 10]
// console.log(lst_ele_sum([10, 20, 30, 40, 50, 60])); //  [200, 190, 180, 170, 160, 150]

// other approch

function lst_ele_sum(arr) {
  let storeSum = [];
  let sum;

  for (const number of arr) {
    sum = 0;
    for (const integer of arr) {
      if (integer !== number) {
        sum += integer;
      }
    }
    storeSum.push(sum);
    sum = 0;
  }
  return storeSum;
}

// console.log(lst_ele_sum([1, 2, 3, 2, 1])); //  [8, 7, 6, 7, 8
// console.log(lst_ele_sum([1, 2])); //  [2, 1]
// console.log(lst_ele_sum([1, 2, 3])); //  [5, 4, 3]
// console.log(lst_ele_sum([1, 2, 3, 4, 5])); //  [14, 13, 12, 11, 10]
// console.log(lst_ele_sum([10, 20, 30, 40, 50, 60])); //  [200, 190, 180, 170, 160, 150]

// 96 => Missing Letters
// Given a string containing unique letters, return a sorted string with the letters that don't appear in the string.

function get_missing_letters(string) {
  let letter = "abcedfghijklmnopqrstuvwxyz";
  let newString = "";

  for (let i = 0; i < letter.length; i++) {
    if (!string.includes(letter[i])) {
      newString += letter[i];
    }
  }
  return newString;
}

// Examples
// console.log(get_missing_letters("abcdefgpqrstuvwxyz")); // "hijklmno"
// console.log(get_missing_letters("zyxwvutsrq")); // "abcdefghijklmnop"
// console.log(get_missing_letters("abc")); // "defghijklmnopqrstuvwxyz"
// console.log(get_missing_letters("abcdefghijklmnopqrstuvwxyz")); // ""

// other approch

function get_missing_letters(string) {
  let letter = "abcdefghijklmnopqrstuvwxyz";
  return letter
    .split("")
    .filter((char) => !string.includes(char))
    .join("");
}

// console.log(get_missing_letters("abcdefgpqrstuvwxyz")); // "hijklmno"
// console.log(get_missing_letters("zyxwvutsrq")); // "abcdefghijklmnop"
// console.log(get_missing_letters("abc")); // "defghijklmnopqrstuvwxyz"
// console.log(get_missing_letters("abcdefghijklmnopqrstuvwxyz")); // ""

// other approch
function get_missing_letters(string) {
  const initialValue = "a".charCodeAt();
  const finalValue = "z".charCodeAt();
  const alphabet = [];

  for (let i = initialValue; i <= finalValue; i++) {
    alphabet.push(String.fromCharCode(i));
  }
  const missingLetters = alphabet.filter((letter) => !string.includes(letter));

  return missingLetters.join("");
}

// console.log(get_missing_letters("abcdefgpqrstuvwxyz")); // "hijklmno"
// console.log(get_missing_letters("zyxwvutsrq")); // "abcdefghijklmnop"
// console.log(get_missing_letters("abc")); // "defghijklmnopqrstuvwxyz"
// console.log(get_missing_letters("abcdefghijklmnopqrstuvwxyz")); // ""

// 97 => Censor Words Longer Than Four Characters
// Create a function that takes a string and censors words over four characters with *.

function censor(string) {
  let newString = "";

  const breakString = string.split(" ");

  for (let i = 0; i < breakString.length; i++) {
    if (breakString[i].length > 4) {
      newString += `${"*".repeat(breakString[i].length)} `;
    } else {
      newString += `${breakString[i]} `;
    }
  }
  return newString;
}

// Examples;
// console.log(censor("The code is fourty")); //  "The code is ******"
// console.log(censor("Two plus three is five")); //  "Two plus ***** is five"
// console.log(censor("aaaa aaaaa 1234 12345")); //  "aaaa ***** 1234 *****"
// Notes
// Don't censor words with exactly four characters.
// If all words have four characters or less, return the original string.
// // The amount of * is the same as the length of the word.

// other approch

function censor(string) {
  return string
    .split(" ")
    .map((words) => (words.length > 4 ? "*".repeat(words.length) : words))
    .join(" ");
}

// console.log(censor("The code is fourty"));
// console.log(censor("Two plus three is five"));
// console.log(censor("aaaa aaaaa 1234 12345"));

function censor(string) {
  return string.split(" ").reduce((prev, current) => {
    if (current.length > 4) {
      prev += `${"*".repeat(current.length)} `;
    } else {
      prev += `${current} `;
    }
    return prev;
  }, "");
}

// console.log(censor("The code is fourty"));
// console.log(censor("Two plus three is five"));
// console.log(censor("aaaa aaaaa 1234 12345"));

// 98 => Accumulating List
// Create a function that takes in a list and returns a list of the accumulating sum.

function accumulating_list(arr) {
  let sum = 0;
  let accumulatingSum = [];
  arr.forEach((nums) => {
    sum += nums;
    accumulatingSum.push(sum);
  });
  return accumulatingSum;
}

// console.log(accumulating_list([1, 2, 3, 4])); //  [1, 3, 6, 10]// # [1, 3, 6, 10] can be written as  [1, 1 + 2, 1 + 2 + 3, 1 + 2 + 3 + 4]
// console.log(accumulating_list([1, 5, 7])); //  [1, 6, 13]
// console.log(accumulating_list([1, 0, 1, 0, 1])); //  [1, 1, 2, 2, 3]
// console.log(accumulating_list([])); //  []
// Notes
// An empty list input [] should return an empty list [].

function accumulating_list(arr) {
  let accumulatingSum = [];
  let sum = 0;

  for (const nums of arr) {
    sum += nums;
    accumulatingSum.push(sum);
  }
  return accumulatingSum;
}

// console.log(accumulating_list([1, 2, 3, 4]));
// console.log(accumulating_list([1, 5, 7]));
// console.log(accumulating_list([1, 0, 1, 0, 1]));
// console.log(accumulating_list([]));

// 99 =>  Find The Largest Even Number
// Write a function that finds the largest even number in a list. Return -1 if not found. The use of built-in functions max() and sorted() are prohibited.

// Examples

function largest_even(arr) {
  const storeEvenNumber = [];
  return arr
    .filter((nums) => (nums % 2 === 0 ? storeEvenNumber.push(nums) : -1))
    .reduce((max, current) => {
      if (current > max) {
        max = current;
      }
      return `largest even number in the array${max}`;
    }, 0);
}
// console.log(largest_even([3, 7, 2, 1, 7, 9, 10, 13])); //  10
// console.log(largest_even([1, 3, 5, 7])); //  -1
// console.log(largest_even([0, 19, 18973623])); //  0

// other approch

function largest_even(arr) {
  const EvenNumber = [];
  for (let i = 0; i < arr.length; i += 2) {
    if (arr[i] % 2 === 0) EvenNumber.push(arr[i]);
    else EvenNumber.push(-1);
  }
  const maxEvenNumber = Math.max(...EvenNumber);
  return maxEvenNumber;
}

// console.log(largest_even([3, 7, 2, 1, 7, 9, 10, 13])); //  10
// console.log(largest_even([1, 3, 5, 7])); //  -1
// console.log(largest_even([0, 19, 18973623])); //  0

// 100 => Basic Statistics: Median
// The median of a group of numbers is the middle number when the group is sorted. If the size of the group is even, the median is the average of the middle two numbers. Given a sorted list of numbers, return the median (rounded to one decimal place if the median isn't an integer).

function median(arr) {
  const arrLength = arr.length;
  const medianIndex = Math.floor(arrLength / 2);

  if (arrLength % 2 === 0) {
    return (arr[medianIndex - 1] + arr[medianIndex]) / 2;
  } else {
    return arr[medianIndex];
  }
}

// Examples
// console.log(median([1, 2, 4, 5, 6, 8, 8, 8, 10])); // 6
// console.log(median([2, 2, 6, 8, 8, 10, 10])); // 8
// console.log(median([1, 2, 2, 4, 7, 8, 9, 10])); // 4.5

// 101=> Return Duplicate Numbers
// Given a list nums where each integer is between 1 and 100, return a sorted list containing only duplicate numbers from the given nums list.

function duplicate_nums(arr) {
  let obj = {};
  const duplicateElement = [];

  arr.forEach((number) => {
    if (obj[number]) obj[number]++;
    else obj[number] = 1;
  });

  for (const keys in obj) {
    if (obj[keys] >= 2) {
      duplicateElement.push(keys);
    }
  }
  return duplicateElement.length === 0 ? "none" : duplicateElement;
}

// console.log(duplicate_nums([1, 2, 3, 4, 3, 5, 6])); //  [3]
// console.log(duplicate_nums([81, 72, 43, 72, 81, 99, 99, 100, 12, 54])); //  [72, 81, 99]
// console.log(duplicate_nums([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); //  None

// Notes
// The given list won't contain the same number three times.
// If there are no duplicate numbers, return None.

// 102 =>  Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

function getTarget(arr, target) {
  let indexes = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + arr[i + 1] === target) {
      indexes.push(i, i + 1);
    }
  }
  return indexes;
}

// console.log(getTarget([2, 7, 11, 15], 9));
// console.log(getTarget([3, 2, 4], 6));
// console.log(getTarget([3, 3], 6));

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// 103 => Write a function that takes two arrays and adds the first element in the first array with the first element in the second array, the second element in the first array with the second element in the second array, etc, etc. Return true if all element combinations add up to the same number. Otherwise, return false.

function puzzlePieces(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let storeSum = [];
  for (let i = 0; i < arr1.length; i++) {
    storeSum.push(arr1[i] + arr2[i]);
  }
  const firstNumber = storeSum[0];
  return storeSum.every((char) => firstNumber === char);
}

// console.log(puzzlePieces([1, 2, 3, 4], [4, 3, 2, 1])); //  true
// // 1 + 4 = 5;  2 + 3 = 5;  3 + 2 = 5;  4 + 1 = 5
// // Both arrays sum to [5, 5, 5, 5]
// console.log(puzzlePieces([1, 8, 5, 0, -1, 7], [0, -7, -4, 1, 2, -6])); //  true
// console.log(puzzlePieces([1, 2], [-1, -1])); //  false
// console.log(puzzlePieces([9, 8, 7], [7, 8, 9, 10])); //  false

// 104 => The median of a group of numbers is the middle number when the group is sorted. If the size of the group is even, the median is the average of the middle two numbers. Given a sorted array of numbers, return the median (rounded to one decimal place if the median isn't an integer).

function median(arr) {
  const arrLength = arr.length;
  const medianIndex = Math.floor(arrLength / 2);

  if (arrLength % 2 === 0) {
    return (arr[medianIndex - 1] + arr[medianIndex]) / 2;
  } else {
    return arr[medianIndex];
  }
}

// console.log(median([1, 2, 4, 5, 6, 8, 8, 8, 10])); //  6
// console.log(median([2, 2, 6, 8, 8, 10, 10])); //  8
// console.log(median([1, 2, 2, 4, 7, 8, 9, 10])); //  5.5

// 105 => Each number in the Perrin sequence is created by summing the numbers two positions and three positions before it. The first three numbers are (3, 0, 2), and the sequence is extended as follows:

function perrin(n) {
  var p = [3, 0, 2];

  for (var i = 3; i <= n; i++) {
    p[i] = p[i - 2] + p[i - 3];
  }

  return p[n];
}

// console.log(perrin(1)); // Output: 0
// console.log(perrin(8)); // Output: 10
// console.log(perrin(26)); // Output: 1497

// 106 => Given an array of integers, find the pair of adjacent elements that have the largest product and return that product.

function adjacentProduct(arr) {
  let storeProduct = [];

  for (let i = 0; i < arr.length - 1; i++) {
    storeProduct.push(arr[i] * arr[i + 1]);
  }
  let firstElement = storeProduct[0];
  for (const number of storeProduct) {
    if (firstElement < number) {
      firstElement = number;
    }
  }
  return `largest adjacent product in the array (pair) => ${firstElement}`;
}

// console.log(adjacentProduct([3, 6, -2, -5, 7, 3])); //  21
// console.log(adjacentProduct([5, 6, -4, 2, 3, 2, -23])); //  30
// console.log(adjacentProduct([0, -1, 1, 24, 1, -4, 8, 10])); //  80

// other approch

function adjacentProduct(arr) {
  const pairProduct = arr.reduce((storeProduct, current, index, array) => {
    const product = array[index] * array[index + 1];
    storeProduct.push(product);
    return storeProduct;
  }, []);

  pairProduct.pop();
  const largestAdjacentProduct = Math.max(...pairProduct);
  return `largest adjacent element in the array (pair) => ${largestAdjacentProduct}`;
}

// console.log(adjacentProduct([3, 6, -2, -5, 7, 3])); //  21
// console.log(adjacentProduct([5, 6, -4, 2, 3, 2, -23])); //  30
// console.log(adjacentProduct([0, -1, 1, 24, 1, -4, 8, 10])); //  80

// 107 => Create a function that returns the amount of duplicate characters in a string. It will be case sensitive and spaces are included. If there are no duplicates, return 0.

function duplicates(string) {
  let obj = {};
  const storeValue = [];

  string.split("").forEach((char) => {
    if (obj[char]) obj[char]++;
    else obj[char] = 1;
  });
  for (const keys in obj) {
    if (obj[keys] >= 2) {
      storeValue.push(obj[keys]);
    }
  }
  return storeValue.reduce((sum, current) => {
    const decreaseValue = current - 1;
    sum += decreaseValue;
    return sum;
  }, 0);
}

// console.log(duplicates("Hello World!")); //  3
// // "o" = 2, "l" = 3.
// // "o" is duplicated 1 extra time and "l" is duplicated 2 extra times.
// // Hence 1 + 2 = 3
// console.log(duplicates("foobar")); //  1
// console.log(duplicates("helicopter")); //  1
// console.log(duplicates("birthday")); //  0
// // If there are no duplicates, return 0

// 108 => Given a string, create a function which outputs an array, building and deconstructing the string letter by letter. See the examples below for some helpful guidance.

function constructDeconstruct(string) {
  let newString = "";

  for (let i = 1; i <= string.length; i++) {
    for (let j = 0; j < i; j++) {
      newString += string[j];
    }
    newString += "\n";
  }

  for (let k = string.length; k > 0; k--) {
    for (let l = 0; l < k; l++) {
      newString += string[l];
    }
    newString += "\n";
  }

  return newString;
}

// console.log(constructDeconstruct("Hello"));

//   "H",
//   "He",
//   "Hel",
//   "Hell",
//   "Hello",
//   "Hell",
//   "Hel",
//   "He",
//   "H"
// ]

// console.log(constructDeconstruct("edabit"));
//  [
// "e",
// "ed",
// "eda",
// "edab",
// "edabi",
// "edabit",
// "edabi",
// "edab",
// "eda",
// "ed",
// "e"
// ]

// console.log(constructDeconstruct("the sun"));
//  [
//   "t",
//   "th",
//   "the",
//   "the ",
//   "the s",
//   "the su",
//   "the sun",
//   "the su",
//   "the s",
//   "the ",
//   "the",
//   "th",
//   "t"
// ]

// 109 => Create a function that builds a word from the scrambled letters contained in the first array. Use the second array to establish each position of the letters in the first array. Return a string from the unscrambled letters (that made-up the word).

function wordBuilder(letter, number) {
  let newString = "";

  for (let i = 0; i < number.length; i++) {
    newString += letter[number[i]];
  }
  return newString;
}

// console.log(wordBuilder(["g", "e", "o"], [1, 0, 2])); //  "ego"
// console.log(wordBuilder(["e", "t", "s", "t"], [3, 0, 2, 1])); //  "test"
// console.log(wordBuilder(["b", "e", "t", "i", "d", "a"], [1, 4, 5, 0, 3, 2])); //  "edabit"

// 110 => Create a function which takes in an array of numbers and a number to find. Return the sum of every index in the array which matches the chosen number.

function sumFoundIndexes(arr, matchValue) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === matchValue) {
      sum += i;
    }
  }
  return sum;
}

// console.log(sumFoundIndexes([0, 3, 3, 0, 0, 3], 3));
// // The number 3 was found at indexes 1, 2 and 5.
// // 8 = 1 + 2 + 5
// console.log(sumFoundIndexes([1, 2, 3, 4, 5, 6], 3));
// console.log(sumFoundIndexes([100, 100, 100, 100, 100], 100));
// console.log(sumFoundIndexes([5, 10, 15, 20], 2));

// other approch

function sumFoundIndexes(arr, matchValue) {
  const indexes = arr
    .map((element, index) => (element === matchValue ? index : -1))
    .filter((index) => index !== -1);

  return indexes.reduce((sum, current) => sum + current, 0);
}

// console.log(sumFoundIndexes([0, 3, 3, 0, 0, 3], 3));
// // The number 3 was found at indexes 1, 2 and 5.
// // 8 = 1 + 2 + 5
// console.log(sumFoundIndexes([1, 2, 3, 4, 5, 6], 3));
// console.log(sumFoundIndexes([100, 100, 100, 100, 100], 100));
// console.log(sumFoundIndexes([5, 10, 15, 20], 2));

// 111 => In this challenge you will be given an array of numbers. Your task is to "marry" each pair of adjacent numbers by adding them, and return the array of "couples" (i.e. sums).
// If the array has an odd length, one number is (sadly) left out, so you should return "bad match".

function isGoodMatch(arr) {
  let coupleStore = [];
  let sum;
  for (let i = 0; i < arr.length - 1; i += 2) {
    if (arr.length % 2 === 0) {
      sum = arr[i] + arr[i + 1];
    } else {
      return "bad match";
    }
    coupleStore.push(sum);
  }
  return coupleStore;
}

// console.log(isGoodMatch([1, 2, 4, 7])); //  [1+2, 4+7] //  [3, 11]
// console.log(isGoodMatch([5, 7, 9, -1, 4, 2])); //  [12, 8, 6]
// console.log(isGoodMatch([5, 7, 9, -1, 4, 2, 3])); //  "bad match"
// console.log(isGoodMatch([2, 6, 7, -2, 4])); //  "bad match"

// other approch

function isGoodMatch(arr) {
  let n = arr.length;
  let sum;

  if (n % 2 !== 0) {
    return "bad match";
  }
  return arr.reduce((couples, currentValue, index, array) => {
    if (index % 2 === 0) {
      sum = currentValue + array[index + 1];

      couples.push(sum);
    }
    return couples;
  }, []);
}

// Test cases
// console.log(isGoodMatch([1, 2, 4, 7])); //  [1+2, 4+7] //  [3, 11]
// console.log(isGoodMatch([5, 7, 9, -1, 4, 2])); //  [12, 8, 6]
// console.log(isGoodMatch([5, 7, 9, -1, 4, 2, 3])); //  "bad match"
// console.log(isGoodMatch([2, 6, 7, -2, 4])); //  "bad match"

// // 112 => You have a pack of 5 randomly numbered cards, which can range from 0-9. You can win if you can produce a higher two-digit number from your cards than your opponent. Return true if your cards win that round.

// function winRound(arr, myOpponent) {}

// console.log(winRound([2, 5, 2, 6, 9], [3, 7, 3, 1, 2])); //  true
// Your cards can make the number 96
// Your opponent can make the number 73
// You win the round since 96 > 73
// console.log(winRound([2, 5, 2, 6, 9], [3, 7, 3, 1, 2])); //  true
// console.log(winRound([1, 2, 3, 4, 5], [9, 8, 7, 6, 5])); //  false
// console.log(winRound([4, 3, 4, 4, 5], [3, 2, 5, 4, 1])); //  false

// 113 => For an array of ranges, find the maximum range that is contained in all the ranges. If there is no such range, return "No overlapping".

// console.log(overlapping([[1, 7], [2, 8], [0, 4]])) //  [2, 4]
// console.log(overlapping([[5, 10], [2, 15], [10, 12]])) //  [10, 10]
// console.log(overlapping([[11, 18], [3, 7], [2, 20], [5, 16]])) //  "No overlapping"

// 114 => write function to generate fabonanci series with reduce method

// const fabSeriesGenerate = (n) => {
//   let num = 2;
//   return Array.from({ length: n }).reduce(
//     (arr, _, index, array) => {
//       const addValue = (arr[num - 1]) + (arr[num - 2]);
//       arr.push(addValue);
//       num++;
//       return arr;
//     },
//     [1, 2]
//   );
// };

// console.log(fabSeriesGenerate(5));

// with for loop
function fabSeries(n) {
  if (n === 0) return [0];
  if (n === 1) return [0, 1];

  let arr = [0, 1];
  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr;
}

// console.log(fabSeries(10));

// 115 => If we list all the natural numbers below that are multiples of or, we get and. The sum of these multiples is .

// const naturalNumber = (n) => {
//   const naturalNumberStore = [];
//   for (let i = 1; i < n; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       naturalNumberStore.push(i);
//     }
//   }
//   return naturalNumberStore.reduce((sum, current) => sum + current)
// };
// console.log(naturalNumber(10));

const naturalNumber = (n) => {
  let sum = 0;
  for (let i = 1; i < n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
};
// console.log(naturalNumber(10));

// 116 =>  Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with
//  and
// , the first
//  terms will be:

// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

const evenFibonacciNumbers = (n) => {
  const arr = [1, 2];

  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr.reduce((sum, current) => {
    if (current % 2 === 0) {
      sum += current;
    }
    return sum;
  }, 0);
};

// console.log(evenFibonacciNumbers(10));

// 117 => 13 => Sum of Missing Numbers
// Create a function that returns the sum of missing numbers from the given list.

// Examples
// sum_missing_numbers([4, 3, 8, 1, 2]) //  18
//
// # 5 + 6 + 7 = 18

// sum_missing_numbers([17, 16, 15, 10, 11, 12]) //  27
//
// # 13 + 14 = 27

// sum_missing_numbers([1, 2, 3, 4, 5]) //  0
//
// # No Missing Numbers (i.e. all numbers in [1, 5] are present in the list)
// Notes
// The numerical range to consider when searching for the missing numbers in the list is the sequence of consecutive numbers between the minimum and maximum of the numbers (inclusive).
function sum_missing_numbers(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let missing = 0;
  for (let i = min; i <= max; i++) {
    if (!arr.includes(i)) {
      missing += i;
    }
  }
  return missing;
}

// console.log(sum_missing_numbers([4, 3, 8, 1, 2])); // //  18//
// console.log(sum_missing_numbers([17, 16, 15, 10, 11, 12])); // //  27//
// console.log(sum_missing_numbers([1, 2, 3, 4, 5])); // //  0//

// 118 => Create a function that takes two numbers as arguments (num, length) and returns a list of multiples of num until the list length reaches length.

function list_of_multiples(a, b) {
  const table = [];
  for (let i = 1; i <= b; i++) {
    table.push(a * i);
  }
  return table;
}

// Examples
// console.log(list_of_multiples(7, 5)); // //  [7, 14, 21, 28, 35]
// console.log(list_of_multiples(12, 10)); // //  [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
// console.log(list_of_multiples(17, 6)); // //  [17, 34, 51, 68, 85, 102]

// Notes
// Notice that num is also included in the returned list.

// 119 => Create a function that takes two inputs: idx (an array of integers) and str (a string). The function should return another string with the letters of str at each index in idx in order.
function indexFilter(arr, string) {
  let newLetter = "";

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      newLetter += string.charAt(arr[i]).toLowerCase();
    } else {
      // Handle negative indices by adjusting them to positive indices
      newLetter += string.charAt(string.length + arr[i]).toLowerCase();
    }
  }
  return newLetter;
}

// Examples
console.log(indexFilter([7, -1, 5, 1], "She is the love of my love")); // Output: "tesh"
console.log(
  indexFilter([4, -7, -13, -11, -2, 0], "Relax and stay calm to avoid failures")
); // Output: "xavier"
console.log(
  indexFilter(
    [9, -9, 2, 27, 36, 6, 5, 13, -1, 2, 0, 30, 2],
    "That's life, I've got you under my skin"
  )
);
//  "frank sinatra"
// Notes
// Indexes may not be in order or may be negative (see examples).
// The output string must always be lowercase, but the input str may not be (as in the above examples).
