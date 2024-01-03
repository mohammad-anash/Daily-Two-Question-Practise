// Write a function that takes a number and returns the perimeter of either a circle or a square. The input will be in the form (letter l, number num) where the letter will be either "s" for square, or "c" for circle, and the number will be the side of the square or the radius of the circle.

// Use the following formulas:

// Perimeter of a square: 4 * side.
// Perimeter of a circle: 6.28 * radius.
// The catch is you can only use arithmetic or comparison operators, which means:

// No if... else statements.
// No objects.
// No arrays.
// No formatting methods, etc.
// The goal is to write a short, branch-free piece of code.

// Examples;

function perimeter(letter, number) {
  const finalRsulte = letter === "s" ? 4 * number : 2 * 3.14159 * number;
  return finalRsulte.toFixed(2);
}

// console.log(perimeter("s", 7));
// console.log(perimeter("c", 4));
// console.log(perimeter("c", 9));

// A tetrahedron is a pyramid with a triangular base and three sides. A tetrahedral number is a number of items within a tetrahedron.

// Create a function that takes an integer n and returns the nth tetrahedral number.

function tetra(n) {
  return (n * (n + 1) * (n + 2)) / 6;
}

// console.log(tetra(2)); // Output: 4
// console.log(tetra(5)); // Output: 35
// console.log(tetra(6)); // Output: 56

// loops Question and Reduce

// This Triangular Number Sequence is generated from a pattern of dots that form a triangle. The first 5 numbers of the sequence, or dots, are:

// 1, 3, 6, 10, 15
// This means that the first triangle has just one dot, the second one has three dots, the third one has 6 dots and so on.

// Write a function that returns the number of dots when given its corresponding triangle number of the sequence.

function triangle(n) {
  let sum = 0;
  let store = [];
  for (let i = 1; i <= n; i++) {
    store.push((sum += i));
  }
  console.log(`Sum of this number ${n}`);
  // return store;
}
// Second approch

function triangle(n) {
  return Array.from({ length: n }).reduce((prev, _, index) => {
    const addValue = index + 1;
    prev += addValue;
    console.log(prev);
    return prev;
  }, 0);
}

// console.log(triangle(5));
// console.log(triangle(6));
// console.log(triangle(215));

// Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.

function arrayOfMultiples(start, end) {
  let store = [];

  for (let i = 1; i <= end; i++) {
    store.push(start * i);
  }
  return store;
}

// Second approch

function arrayOfMultiples(start, end) {
  return Array.from({ length: end }).reduce((prev, _, index) => {
    prev.push(start * (index + 1));
    return prev;
  }, []);
}

// console.log(arrayOfMultiples(7, 5)); //  [7, 14, 21, 28, 35]
// console.log(arrayOfMultiples(12, 10)); //  [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
// console.log(arrayOfMultiples(17, 6)); //  [17, 34, 51, 68, 85, 102]

// Create a function that counts the integer's number of digits.

function count(n) {
  const breakN = n.toString().split("-");
  const storeValue = [];
  for (let i = 0; i < breakN.length; i++) {
    const onlyNumber = breakN[i].toString().split("");
    storeValue.push(onlyNumber);
  }
  return storeValue.flat().length;
}

// console.log(count(318));
// console.log(count(-92563));
// console.log(count(4666));
// console.log(count(-314890));
// console.log(count(654321));
// console.log(count(638476));

// For an added challenge, try to solve this without using strings.
// Alternatively, you can solve this via a recursive approach.
// A reversion of this challenge can be found via this link.

// Create a function which concatenates the number 7 to the end of every chord in an array. Ignore all chords which already end with 7.

function jazzify(arr) {
  let store = [];

  for (let i = 0; i < arr.length; i++) {
    const breakSeven = arr[i].split("7").join("");
    store.push(breakSeven + "7");
  }
  // return store;
}

// Second Approch

function jazzify(arr) {
  return arr.map((element) => element.split("7").join("") + "7");
}

function jazzify(arr) {
  return arr.reduce((prev, current) => {
    const breakSeven = current.split("7").join("");
    prev.push(breakSeven + "7");
    // return prev;
  }, []);
}

// console.log(jazzify(["G", "F", "C"]));
// console.log(jazzify(["Dm", "G", "E", "A"]));
// console.log(jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"]));
// console.log(jazzify([]));

// An array is special if every even index contains an even number and every odd index contains an odd number. Create a function that returns true if an array is special, and false otherwise.

// function isSpecialArray(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0 && i % 2 != 0) {
//       return false;
//     } else if (arr[i] % 2 !== 0 && i % 2 == 0) {
//       return false;
//     }
//   }
//   return true;
// }

// Second Approch

function isSpecialArray(arr) {
  return arr.every((current, index) => {
    if (
      (current % 2 == 0 && index % 2 != 0) ||
      (current % 2 != 0 && index % 2 == 0)
    ) {
      return false;
    }
    return true;
  });
}

// console.log(isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]));
// console.log(isSpecialArray([2, 7, 8, 9, 7, 1, 6, 3]));
// console.log(isSpecialArray([2, 7, 8, 8, 6, 1, 9, 3]));

// You just returned home to find your mansion has been robbed! Given an object of the stolen items, return the total amount of the burglary (number). If nothing was robbed, return the string "Lucky you!".

function stolenTime(obj) {
  let sum = 0;
  for (const keys in obj) {
    sum += obj[keys];
  }

  // return sum === 0 ? "Lucky You" : sum;
}

// Second Approch

function stolenTime(obj) {
  const getValues = Object.values(obj);
  const findSum = getValues.reduce((prev, current) => (prev += current), 0);
  return findSum === 0 ? "Luck You" : findSum;
}

// console.log(
//   stolenTime({
//     tv: 30,
//     skate: 20,
//     stereo: 50,
//   })
// ); //  100

// console.log(
//   stolenTime({
//     painting: 20000,
//   })
// ); //  20000

// console.log(stolenTime({})); //  "Lucky you!"

// A factor chain is an array where each previous element is a factor of the next consecutive element. The following is a factor chain:

function factorChain(arr) {
  // for (let i = 0; i < arr.length - 1; i++) {
  //   if (arr[i + 1] % arr[i] !== 0) {
  //     return false;
  //   }
  // }
  // // return true;
}

// Create a function that returns true if all parameters are truthy, and false otherwise.

function allTruthy() {
  // for (let i = 0; i < arguments.length; i++) {
  //   if (arguments[i] === false) {
  //     return false;
  //   }
  // }
  // return true
}

// Second Approch

function allTruthy() {
  const Arr = [...arguments];
  return Arr.every((current, index) => current);
}

// third Approch

function allTruthy() {
  const Arr = [...arguments];
  // indexOf
  // return Arr.indexOf(false) === 1 ? false : true

  // includes
  // return !Arr.includes(false)

  // lastIndexOf
  return Arr.lastIndexOf(false) === 1 ? false : true;
}

// console.log(allTruthy(true, true, true));
// console.log(allTruthy(true, false, true));
// console.log(allTruthy(5, 4, 3, 2, 1, 0));

// Given an array of numbers, write a function that returns an array that...
//
// Has all duplicate elements removed.
// Is sorted from least to greatest value.

function uniqueSort(arr) {
  const removeDup = [];
  for (let i = 0; i < arr.length; i++) {
    if (!removeDup.includes(arr[i])) {
      removeDup.push(arr[i]);
    }
  }

  for (let i = 0; i < removeDup.length; i++) {
    for (let j = i + 1; j < removeDup.length; j++) {
      if (removeDup[i] > removeDup[j]) {
        let temp = removeDup[i];
        removeDup[i] = removeDup[j];
        removeDup[j] = temp;
      }
    }
  }
  // return removeDup;
}

// Second Approch

function uniqueSort(arr) {
  return Array.from(new Set(arr)).sort((a, b) => a - b);
}

// console.log(uniqueSort([1, 2, 4, 3]));
// console.log(uniqueSort([1, 4, 4, 4, 4, 4, 3, 2, 1, 2]));
// console.log(uniqueSort([6, 7, 3, 2, 1]));

// Create a function that returns the mean of all digits.

function mean(n) {
  const breakN = n.toString().split("");
  let sum = 0;

  for (let i = 0; i < breakN.length; i++) {
    sum += +breakN[i];
  }
  // return sum / breakN.length
}

function mean(num) {
  const breakNum = num.toString().split("");

  const findMean = breakNum.reduce((prev, current, index) => {
    const Numbers = +current;
    prev += Numbers;
    return prev;
  }, 0);

  return findMean / breakNum.length;
}

// console.log(mean(42));
// console.log(mean(12345));
// console.log(mean(666));

// Create a function that returns true if an asterisk * is inside a box.

function inBox(arr) {
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i].includes("*")) {
  //     return true;
  //   }
  // }
  // return false;
}

function inBox(arr) {
  return arr.some((element) => element.includes("*"));
}

// console.log(inBox(["###", "#*#", "###"]));
// console.log(inBox(["####", "#* #", "#  #", "####"]));
// console.log(inBox(["*####", "# #", "#  #*", "####"]));
// console.log(inBox(["#####", "#   #", "#   #", "#   #", "#####"]));

// Create a function that takes a string as an argument and converts the first character of each word to uppercase. Return the newly formatted string.

function makeTitle(string) {
  const removeSpace = string.split(" ");

  let newstring = "";
  for (let i = 0; i < removeSpace.length; i++) {
    const firstLetter = removeSpace[i].charAt(0).toUpperCase();
    const values = removeSpace[i].slice(1);
    newstring += `${firstLetter}${values} `;
  }
  // return newstring
}

// Second Approch

function makeTitle(string) {
  // return string
  // .split(" ")
  // .map((element) => element.charAt(0).toUpperCase() + element.slice(1))
  // .join(" ");
}

// third Approch

function makeTitle(string) {
  let newstring = "";
  const newStr = string.split(" ");
  for (const item of newStr) {
    const firstletter = item.charAt(0).toUpperCase();
    const addMoreValue = item.slice(1);
    newstring += `${firstletter}${addMoreValue} `;
  }
  // return newstring;
}

// fourth Approch

function makeTitle(string) {
  return string.split(" ").reduce((prev, current) => {
    const firstletter = current.charAt(0).toUpperCase();
    const someMoreValue = current.slice(1);
    prev += `${firstletter}${someMoreValue} `;
    return prev;
  }, "");
}

// console.log(makeTitle("This is a title"));
// console.log(makeTitle("capitalize every word"));
// console.log(makeTitle("I Like Pizza"));
// console.log(makeTitle("PIZZA PIZZA PIZZA"));

// Create a function that takes a number as its argument and returns an array of all its factors.

function factorize(n) {
  let store = [];

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      store.push(i);
    }
  }
  return store;
}

// console.log(factorize(12));
// console.log(factorize(4));
// console.log(factorize(17));

// Create a function that will remove the letters "a", "b" and "c" from the given string and return the modified version. If the given string does not contain "a", "b", or "c", return null.

function removeABC(string) {
  let newstring = "";

  for (let i = 0; i < string.length; i++) {
    if (!"abc".includes(string[i])) {
      newstring += string[i];
    }
  }
  // return newstring;
}

function removeABC(string) {
  return string
    .split("")
    .filter((element) => !"abc".includes(element))
    .join("");
}

// console.log(removeABC("This might be a bit hard"));
// console.log(removeABC("hello world!"));
// console.log(removeABC(""));

function fabSeries(n) {
  let count = 0;
  count++;
  return Array.from({ length: n }, (_, i) => {
    if (i % 2 == 0) {
      console.log(i);
    }
  });
}

// console.log(fabSeries(100));

// let arr = [4, 2, 6, 4];
// arr.sort((a, b) => a - b);

// An isogram is a word that has no duplicate letters. Create a function that takes a string and returns either true or false depending on whether or not it's an "isogram".

function isIsogram(string) {
  const breakString = string.toLowerCase().split("");

  let finalResult = true;
  for (let i = 0; i < breakString.length; i++) {
    const oneStepAHead = breakString.slice(i + 1);
    if (oneStepAHead.includes(breakString[i])) {
      finalResult = false;
    }
  }
  // return finalResult;
}

// Second Approch

function isIsogram(string) {
  const breakString = string.toLowerCase().split("");
  let obj = {};

  breakString.forEach((element) => {
    if (obj[element]) obj[element]++;
    else obj[element] = 1;
  });

  const getValuesObj = Object.values(obj);
  return getValuesObj.every((element) => element === 1);
}

// console.log(isIsogram("Algorism"));
// console.log(isIsogram("PasSword"));
// console.log(isIsogram("Consecutive"));

// Create a function that performs an even-odd transform to an array, n times. Each even-odd transformation:

// Adds two (+2) to each odd integer.
// Subtracts two (-2) from each even integer.

// function evenOddTransform(arr, n) {
//   for (let j = 0; j < n; j++) {
//     let transformedArray = arr.slice(); // Make a copy of the array

//     for (let i = 0; i < transformedArray.length; i++) {
//       if (transformedArray[i] % 2 !== 0) {
//         transformedArray[i] += 2;
//       } else {
//         transformedArray[i] -= 2;
//       }
//     }

//     arr = transformedArray; // Update the original array with the transformed one
//   }

//   return arr;
// }

// console.log(evenOddTransform([3, 4, 9], 3)); // [9, -2, 15]
// console.log(evenOddTransform([0, 0, 0], 10)); // [-20, -20, -20]
// console.log(evenOddTransform([1, 2, 3], 1)); // [3, 0, 5]

// There's a great war between the even and odd numbers. Many numbers already lost their lives in this war and it's your task to end this. You have to determine which group sums larger: the evens, or the odds. The larger group wins.

// Create a function that takes an array of integers, sums the even and odd numbers separately, then returns the difference between the sum of the even and odd numbers.

function warOfNumbers(arr) {
  let evenSum = 0;
  let oddSum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      evenSum += arr[i];
    } else {
      oddSum += arr[i];
    }
  }
  if (oddSum > evenSum) {
    let tem = evenSum;
    evenSum = oddSum;
    oddSum = tem;
  }
  // return evenSum - oddSum
}

// Second Approch

function warOfNumbers(arr) {
  let evensum = arr
    .filter((element) => element % 2 == 0)
    .reduce((prev, current) => (prev += current), 0);

  let oddSum = arr
    .filter((element) => element % 2 !== 0)
    .reduce((prev, current) => (prev += current), 0);

  if (oddSum > evensum) {
    let temp = evensum;
    evensum = oddSum;
    oddSum = temp;
  }
  return evensum - oddSum;
}

// console.log(warOfNumbers([2, 8, 7, 5]));
// console.log(warOfNumbers([12, 90, 75]));
// console.log(warOfNumbers([5, 9, 45, 6, 2, 7, 34, 8, 6, 90, 5, 243]));

// Write a function that takes a string of one or more words as an argument and returns the same string, but with all five or more letter words reversed. Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

function reverse(string) {
  let newstring = "";

  const breakString = string.split(" ");
  for (let i = 0; i < breakString.length; i++) {
    if (breakString[i].length > 5) {
      newstring += `${breakString[i].toString().split("").reverse().join("")} `;
    } else {
      newstring += `${breakString[i]} `;
    }
  }
  // return newstring;
}

// Second approch

function reverse(string) {
  // return string
  //   .split(" ")
  //   .map((element) =>
  //     element.length >= 5
  //       ? element.toString().split("").reverse().join("")
  //       : element
  //   ).join(" ");
}

// Third Apporch

function reverse(string) {
  return string
    .split(" ")
    .reduce(
      (prev, current) =>
        current.length >= 5
          ? (prev += `${current.toString().split("").reverse().join("")} `)
          : (prev += `${current} `),
      ""
    );
}

// console.log(reverse("Reverse"));
// console.log(reverse("This is a typical sentence."));
// console.log(reverse("The dog is big."));

// Build a function that creates histograms. Every bar needs to be on a new line and its length corresponds to the numbers in the array passed as an argument. The second argument of the function represents the character to be used for the bar.

function histogram(arr, rug) {
  let newString = "";

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i]; j++) {
      newString += rug;
    }
    newString += "\n";
  }
  // return newString;
}

// Second Approch

function histogram(arr, rug) {
  // return arr.map(element => rug.repeat(element)).join("\n")
}

// third Approch

function histogram(arr, rug) {
  return arr.reduce(
    (prev, current) => (prev += rug.repeat(current) + "\n"),
    ""
  );
}

// console.log(histogram([1, 3, 4], "#"));
// console.log(histogram([6, 2, 15, 3], "="));
// console.log(histogram([1, 10], "+"));

// Write a function that takes a positive integer num and calculates how many dots exist in a pentagonal shape around the center dot on the Nth iteration.

// In the image below you can see the first iteration is only a single dot. On the second, there are 6 dots. On the third, there are 16 dots, and on the fourth there are 31 dots.

function pentagonal(n) {
  let sum = 0;
  let value;
  for (let i = 0; i < n; i++) {
    value = 1 + 5 * (sum += i);
  }
  // return value;
}

function pentagonal(n) {
  let sum = 0;
  return Array.from({ length: n }).reduce((prev, current, index) => {
    prev = 1 + 5 * (sum += index);
    return prev;
  }, 0);
}

// console.log(pentagonal(1));
// console.log(pentagonal(2));
// console.log(pentagonal(3));
// console.log(pentagonal(8));

// write a function to find string woth Number

function numInStr(object) {
  let numbers = "12345678910";
  let stringwithNumber = [];

  object.forEach(function (element) {
    for (let i = 0; i < numbers.length; i++) {
      if (element.includes(numbers[i])) {
        stringwithNumber.push(element);
        break;
      }
    }
  });
  return stringwithNumber;
}

// console.log(numInStr(["1a", "a", "2b", "b"])); // Output: ["1a", "2b"]
// console.log(numInStr(["abc", "abc10"])); // Output: ["abc10"]
// console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"])); // Output: ["ab10c", "a10bc"]
// console.log(numInStr(["this is a test", "test1"])); // Output: ["test1"]

// write a function to find the Second largest number in the array

function secondLargest(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  return sortedArr.slice(-2, -1);
}

// Second Approch

function secondLargest(arr) {
  const sortedArr = arr.sort((a, b) => a - b);

  const store = [];
  for (let i = 0; i < sortedArr.length - 1; i++) {
    store.push(arr[i]);
  }
  return store.pop();
}

// console.log(secondLargest([67, 54, 23, 45, 60]));

// third Approch

function secondLargest(arr) {
  const sortedArr = arr.sort((a, b) => a - b);

  let firstElement = sortedArr[0];
  for (let i = 0; i < sortedArr.length; i++) {
    if (
      firstElement != sortedArr[i] &&
      sortedArr[i] != sortedArr[sortedArr.length - 1]
    ) {
      firstElement = sortedArr[i];
    }
  }
  return firstElement;
}

// console.log(secondLargest([67, 54, 23, 45, 60]));

// write a function to find the maximum number in the array

// function findMaximum(arr) {
//   return Math.max(...arr);
// }
// console.log(findMaximum([2, 4, 5, 23, 45, 67]));

function fabSeries(n) {
  let num = 2;
  let arr = [0, 1];
  return Array.from({ length: n }).reduce((arr, current, index) => {
    const value = arr[num - 2] + arr[num - 1];
    arr.push(value);
    num++;
    return arr;
  }, arr);
}

// console.log(fabSeries(10));

function chunkArr(arr) {
  return arr.reduce((prev, current, index, array) => {
    if (index % 2 == 0) {
      prev.push(arr.slice(index, index + 2));
    }
    return prev;
  }, []);
}

// console.log(chunkArr([1, 2, 3, 4, 5, 6]));

// Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. If there are no strings containing numbers, return an empty array.

function numInStr(arr) {
  const counting = "123456789";

  let store = [];
  for (let i = 0; i < counting.length; i++) {
    arr.forEach((element) => {
      if (element.includes(counting[i])) {
        store.push(element);
      }
    });
  }
  // return store;
}

function numInStr(arr) {
  const counting = "0123456789"; // Updated to include all digits 0-9

  return arr.filter((element) => {
    return counting.split("").some((digit) => element.includes(digit));
  });
}

// console.log(numInStr(["1a", "a", "2b", "b"]));
// console.log(numInStr(["abc", "abc10"]));
// console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"]));
// console.log(numInStr(["this is a test", "test1"]));

// write a function to find the median value in the string

function medianValue(string) {
  const length = string.length;
  const breakString = string.split("");
  const middleValue = Math.floor(length / 2);

  if (length % 2 != 0) {
    return breakString[middleValue];
  } else {
    return string.slice(middleValue - 1, middleValue + 1);
  }
}

// console.log(medianValue("anash"));
// console.log(medianValue("filter"));

// write a function to find the multiple mean value in the array of name

// function findMultipleMedian(array) {
//   const storeMedian = [];

//   for (let i = 0; i < array.length; i++) {
//     const lengths = array[i].length;
//     const middleValue = Math.floor(lengths / 2);
//     const breakString = array[i].toString().split("");

//     if (lengths % 2 !== 0) {
//       storeMedian.push(breakString[middleValue]);
//     } else {
//       storeMedian.push(
//         breakString.slice(middleValue - 1, middleValue + 1).join("")
//       );
//     }
//   }
//   return storeMedian;
// }

// console.log(findMultipleMedian(["anash", "programmer", "Cristopher"]));

// ek function likho jiski bhi age even hu uss perone ka name console kro

const person = [
  { name: "anash", age: 33 },
  { name: "john", age: 24 },
  { name: "rohan", age: 57 },
  { name: "Abbas", age: 86 },
];
function evenAges(person) {
  return person.reduce((prev, current) => {
    if (current.age % 2 == 0) {
      prev.push(current);
    }
    return prev;
  }, []);
}

// console.log(evenAges(person));

// write a function to find the the largest ages name

// function largestAges(user) {
//   return user.reduce((prev, current) =>
//     Math.max(current.age) === current.age ? current.name : true
//   );
// }

// console.log(largestAges(person));

// // write a function to find the lowest age name is the person object

// function largestAges(user) {
//   return user.reduce((prev, current) =>
//     Math.min(current.age) === current.age ? current.name : true
//   );
// }

// console.log(largestAges(person));

// write a function to capitalize each first letter of word in the person object

// function capFirstLetter(user) {
//   return user.map((current) => {
//     const names = current.name.charAt(0).toUpperCase() + current.name.slice(1);
//     const Ages = current.age;
//     return { name: names, age: Ages };
//   });
// }

// console.log(capFirstLetter(person));

// Second approch

// function capFirstLetter(user) {
//   let store = [];

//   for (const keys in user) {
//     const names =
//       user[keys].name.charAt(0).toUpperCase() + user[keys].name.slice(1);

//     const ages = user[keys].age;
//     store.push({ name: names, age: ages });
//   }
//   return store;
// }
// console.log(capFirstLetter(person));
