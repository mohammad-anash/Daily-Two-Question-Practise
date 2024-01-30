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

function isStrongNumber(number) {
  const inString = number.toString().split("");
  let store = [];

  let sum = 0;
  let product = 1;
  for (let i = 0; i < inString.length; i++) {
    for (let j = 1; j <= inString[i]; j++) {
      product *= j;
      console.log(j, product);
    }
    store.push(product);
    product = 1;
    sum += store[i];
  }
  return sum === number ? "this is strong number" : "this is not strong number";
}

console.log(isStrongNumber(145));
