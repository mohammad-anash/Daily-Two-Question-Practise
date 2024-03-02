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

// 41 => write a function to find the multiple middle value in the array of name

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
//   checkAllVowelPresentOrNot("my name is anash i want to be programmer")
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
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) {
      return "increasing";
    } else if (arr[i] > arr[i + 1]) {
      return "decreasing";
    } else {
      return "neither";
    }
  }
}

console.log(check([1, 2, 3])); //  "increasing"
console.log(check([3, 2, 1])); //  "decreasing"
console.log(check([1, 2, 1])); //  "neither"
console.log(check([1, 1, 2])); //  "neither"
