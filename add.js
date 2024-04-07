const indexFilter = (arr, string) => {
  let newString = "";

  for (const index of arr) {
    if (index >= 0) {
      newString += string[index].toLowerCase();
    } else {
      newString += string[string.length + index].toLowerCase();
    }
  }
  return newString;
};

// console.log(indexFilter([7, -1, 5, 1], "She is the love of my love")); // Output: "tesh"
// console.log(
//   indexFilter([4, -7, -13, -11, -2, 0], "Relax and stay calm to avoid failures")
// ); // Output: "xavier"
// console.log(
//   indexFilter(
//     [9, -9, 2, 27, 36, 6, 5, 13, -1, 2, 0, 30, 2],
//     "That's life, I've got you under my skin"
//   )
// );
// ("frank sinatra");

// 120 => Write a function to find the second largest number in an array.

function secondLargest(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  return sortedArr[sortedArr.length - 2];
}
// console.log(secondLargest([34, 67, 89, 34, 12, 100]));

// other approch

function secondLargest(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  let firstElement = sortedArr[0];

  for (let i = 0; i < sortedArr.length; i++) {
    if (
      firstElement !== sortedArr[i] &&
      sortedArr[i] !== sortedArr[sortedArr.length - 1]
    ) {
      firstElement = sortedArr[i];
    }
  }
  return firstElement;
}
// console.log(secondLargest([34, 67, 89, 34, 12, 100]));

// Question 1: Write a function to filter out odd numbers from an array and return a new array containing only even numbers.
function filterOddNumbers(arr) {
  return arr.filter((current) => current % 2 === 0);
}

// console.log(filterOddNumbers([1, 2, 3, 4, 5, 6])); // Output:

// other approch

function filterOddNumbers(arr) {
  let onlyEvenNumber = [];
  for (let i = 1; i < arr.length; i += 2) {
    onlyEvenNumber.push(arr[i]);
  }
  // return onlyEvenNumber;
}

// console.log(filterOddNumbers([1, 2, 3, 4, 5, 6])); // Output:

// now we are doing some object question

//  121 =>  Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.

const getVoteCount = (obj) => {
  return obj.upvotes - obj.downvotes;
};

// console.log(getVoteCount({ upvotes: 13, downvotes: 0 })); //  13
// console.log(getVoteCount({ upvotes: 2, downvotes: 33 })); //  -31
// console.log(getVoteCount({ upvotes: 132, downvotes: 132 })); //  0

// 122 => The police send you an electronic statement for you to sign. As you begin to sign, an error pops up. Apparently, they sent you a protected document.

// This challenge is a bit different as the function you are given already contains some code that you should not change or remove. Also, don't do a return statement, it is already included. Your task is, given an object, prevent changes to that object.

const obj = { noChanges: true };

function preventChanges(obj) {
  // Write your code here, don't use a return statement

  obj.noChanges = false;
  obj.signature = "whatever";
  obj.noChanges = true;
  return obj;
} //) //  { noChanges: true }

// console.log(preventChanges(obj));

// 123 => Create a function that takes an object argument sizes (contains width, length, height keys) and returns the volume of the box.

function volumeOfBox(obj) {
  return obj.width * obj.length * obj.height;
}

// console.log(volumeOfBox({ width: 2, length: 5, height: 1 })); //  10
// console.log(volumeOfBox({ width: 4, length: 2, height: 2 })); //  16
// console.log(volumeOfBox({ width: 2, length: 3, height: 5 })); //  30

// 124 =>Turn an array of voter objects into a count of how many people voted

// function totalVotes(arr) {
//   return arr.filter((obj) => obj.voted === true).length;
// }

// function totalVotes(arr) {
//   const votedStore = [];
//   for (const keys in arr) {
//     if (arr[keys].voted === true) {
//       votedStore.push(arr[keys]);
//     }
//   }
//   return votedStore.length;
// }

// other approch

function totalVotes(arr) {
  return arr.reduce((prev, current) => {
    if (current.voted === true) {
      prev++;
    }
    return prev;
  }, 0);
}

// var voters = [
//   { name: "Bob", age: 30, voted: true },
//   { name: "Jake", age: 32, voted: true },
//   { name: "Kate", age: 25, voted: false },
//   { name: "Sam", age: 20, voted: false },
//   { name: "Phil", age: 21, voted: true },
//   { name: "Ed", age: 55, voted: true },
//   { name: "Tami", age: 54, voted: true },
//   { name: "Mary", age: 31, voted: false },
//   { name: "Becky", age: 43, voted: false },
//   { name: "Joey", age: 41, voted: true },
//   { name: "Jeff", age: 30, voted: true },
//   { name: "Zack", age: 19, voted: false },
// ];
// console.log(totalVotes(voters)); // 7

// 125 =>  Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once

function shoppingSpree(arr) {
  let totalPrice = 0;
  for (const items in arr) {
    totalPrice += arr[items].price;
  }
  // return totalPrice;
}

// var wishlist = [
//   { title: "Tesla Model S", price: 90000 },
//   { title: "4 carat diamond ring", price: 45000 },
//   { title: "Fancy hacky Sack", price: 5 },
//   { title: "Gold fidgit spinner", price: 2000 },
//   { title: "A second Tesla Model S", price: 90000 },
// ];

function shoppingSpree(arr) {
  return arr.reduce((prev, current) => {
    prev += current.price;
    return prev;
  }, 0);
}

const wishlist = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 },
];

// console.log(shoppingSpree(wishlist)); // 227005

// 126 =>  Given an array of arrays, flatten them into a single array
function flatten(arr) {
  // return arr.flat();
  return arr.concat();
}

// var arrays = [["1", "2", "3"], [true], [4, 5, 6]];
//
// console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];

// 127 =>  Given an array of potential voters, return an object representing the results of the vote
// Include how many of the potential voters were in the ages 18-25, how many from 26-35, how many from 36-55, and how many of each of those age ranges actually voted. The resulting object containing this data should have 6 properties. See the example output at the bottom.

// var voters = [
//   { name: "Bob", age: 30, voted: true },
//   { name: "Jake", age: 32, voted: true },
//   { name: "Kate", age: 25, voted: false },
//   { name: "Sam", age: 20, voted: false },
//   { name: "Phil", age: 21, voted: true },
//   { name: "Ed", age: 55, voted: true },
//   { name: "Tami", age: 54, voted: true },
//   { name: "Mary", age: 31, voted: false },
//   { name: "Becky", age: 43, voted: false },
//   { name: "Joey", age: 41, voted: true },
//   { name: "Jeff", age: 30, voted: true },
//   { name: "Zack", age: 19, voted: false },
// ];

function voterResults(arr) {
  const youngPeopleStore = [];
  const midPeopleStore = [];
  const oldPeopleStore = [];
  for (const people in arr) {
    if (arr[people].age >= 18 && arr[people].age <= 25) {
      youngPeopleStore.push(arr[people]);
    } else if (arr[people].age >= 26 && arr[people].age <= 35) {
      midPeopleStore.push(arr[people]);
    } else {
      oldPeopleStore.push(arr[people]);
    }
  }
  const youngPeople = youngPeopleStore.length;
  const midPeople = midPeopleStore.length;
  const oldPeople = oldPeopleStore.length;

  const youngPeopleVote = youngPeopleStore.filter(
    (people) => people.voted === true
  ).length;
  const midPeopleVote = midPeopleStore.filter(
    (people) => people.voted === true
  ).length;
  const oldPeopleVote = oldPeopleStore.filter(
    (people) => people.voted === true
  ).length;

  // return {
  //   youngPeople,
  //   youngPeopleVote,
  //   midPeople,
  //   oldPeople,
  //   midPeopleVote,
  //   oldPeopleVote,
  // };
}

// console.log(voterResults(voters)); // Returned value shown below:
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4 
}
*/

var voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];

function totalVotes(arr) {
  let youngPeople = 0;
  let midPeople = 0;
  let oldPeople = 0;

  let youngPeopleVote = 0;
  let midPeopleVote = 0;
  let oldPeopleVote = 0;

  return arr.reduce((prev, current) => {
    if (current.age >= 18 && current.age <= 25) {
      youngPeople++;
      if (current.voted) {
        youngPeopleVote++;
      }
    } else if (current.age >= 26 && current.age <= 35) {
      midPeople++;
      if (current.voted) {
        midPeopleVote++;
      }
    } else {
      oldPeople++;
      if (current.voted) {
        oldPeopleVote++;
      }
    }
    return {
      youngPeople,
      youngPeopleVote,
      midPeople,
      midPeopleVote,
      oldPeopleVote,
      oldPeople,
    };
  }, {});
}

// console.log(totalVotes(voters));

// 127 => write a function to find the longest word in the string;

function longestWord(string) {
  const breakString = string.split(" ");
  const sortedArr = breakString.sort((a, b) => a.length - b.length);
  return sortedArr.at(-1);
}

// console.log(longestWord("i love coding javascript"));

// other approch
function longestWord(string) {
  const arr = string.split(" ");
  return arr.reduce(
    (word, current) => (current.length > word.length ? current : word),
    ""
  );
}

// console.log(longestWord("i love coding javascript"))

// 128 => write a function take a string in input remove all space from string and cnvert in capital letter

function removeSpaceCapitalizeString(string) {
  let updateString = "";
  const breakString = string.split(" ");
  for (let i = 0; i < breakString.length; i++) {
    const getFirstletter =
      breakString[i].charAt(0).toUpperCase() + breakString[i].slice(1);
    updateString += getFirstletter;
  }
  // return updateString;
}

// console.log(removeSpaceCapitalizeString("my name is anash"));\

// other approch

function removeSpaceCapitalizeString(string) {
  // return string.split(" ").map((words) => words.charAt(0).toUpperCase() + words.slice(1)).join("")
}

// console.log(removeSpaceCapitalizeString("my name is anash"));

// one more other approch

function removeSpaceCapitalizeString(inputString) {
  let breakString = inputString.split(" ");
  return (breakString = breakString.map((words) =>
    words.replaceAll(words[0], words[0].toUpperCase())
  )).join("");
}

// console.log(removeSpaceCapitalizeString("my name is anash"));

// 129 => Given an array of numbers, of any length, create a function which counts how many of those numbers pass the following criteria:
// The first and last digits of a number must add to 10.

function endsAddTo10(numbers) {
  let count = 0;

  for (let number of numbers) {
    let numStr = absNumber.toString();
    let absNumber = Math.abs(number);

    if (numStr.length > 1) {
      let firstDigit = parseInt(numStr[0]);
      let lastDigit = parseInt(numStr[numStr.length - 1]);

      if (firstDigit + lastDigit === 10) {
        count++;
      }
    } else {
      count++;
    }
  }
  // return count;
}

// Example usage:
// console.log(endsAddTo10([19, 46, 2098])); // Output: 3
// console.log(endsAddTo10([33, 44, -55])); // Output: 1
// console.log(endsAddTo10([])); // Output: 0

// other approch

function endsAddTo10(arr) {
  return arr.reduce((count, current) => {
    let absNumber = Math.abs(current);
    const inString = absNumber.toString();

    if (inString.length > 1) {
      const firstNumber = parseInt(inString.charAt(0));
      const secondNumber = parseInt(inString.slice(-1));

      if (firstNumber + secondNumber === 10) {
        count++;
      }
    }
    // return count;
  }, 0);
}

// console.log(endsAddTo10([19, 46, 2098])); // Output: 3
// console.log(endsAddTo10([33, 44, -55])); // Output: 1
// console.log(endsAddTo10([])); // Output: 0

// other approch

function endsAddTo10(arr) {
  return arr.filter((digits) => {
    const absNumber = Math.abs(digits).toString();

    return (
      absNumber.length === 1 ||
      +absNumber[0] + +absNumber[absNumber.length - 1] === 10
    );
  }).length;
}

// console.log(endsAddTo10([19, 46, 2098])); // Output: 3
// console.log(endsAddTo10([33, 44, -55])); // Output: 1
// console.log(endsAddTo10([])); // Output: 0

// 130 =>  Create a function that takes an array of integers and returns all pairs of integers that have a difference of two. The resulting array should be sorted in ascending order of values.

function differenceTwo(arr) {
  const storeTwoPair = [];
  const sortedArr = arr.sort((a, b) => a - b);

  for (let i = 0; i < sortedArr.length; i++) {
    for (let j = i + 1; j < sortedArr.length; j++) {
      if (sortedArr[j] - sortedArr[i] === 2) {
        storeTwoPair.push([sortedArr[i], sortedArr[j]]);
      }
    }
  }
  // return storeTwoPair;
}

// Examples
// console.log(differenceTwo([1, 2, 3, 4])); //  [[1, 3], [2, 4]]
// console.log(differenceTwo([1, 23, 3, 4, 7])); //  [[1, 3]]
// console.log(differenceTwo([4, 3, 1, 5, 6])); //  [[1, 3], [3, 5], [4, 6]

// 131 => write a function counter one specific element

function countChar(string, char) {
  // return string
  // .toLowerCase()
  // .split("")
  // .filter((letter) => letter === char).length;
}

// console.log(countChar("missIssIpi", "i"));

// solve in other way

function countChar(string, char) {
  const charsCode = string
    .toLowerCase()
    .split("")
    .map((chars) => chars.charCodeAt());
  const letterCode = char.charCodeAt();

  return charsCode.reduce((count, currentEle) => {
    if (currentEle === letterCode) {
      count++;
    }
    return count;
  }, 0);
}

// console.log(countChar("missIssIpi", "i"));

// 132 => write a function called checkTraingleType that taked three parameter represent the length of a side s traingle the function should return indication the type of traingle

function checkTraingleType(a, b, c) {
  if (a === b && b === c) return "traingle";
  if (a === b || b === c || a === c) return "isosceles";
  return "scalen";
}

// console.log(checkTraingleType(3, 3, 3));
// console.log(checkTraingleType(5, 3, 5));
// console.log(checkTraingleType(9, 8, 7));

// 132 => Create a function that takes an array of integers as an argument and returns a unique number from that array. All numbers except unique ones have the same number of occurrences in the array.

function findSingleNumber(arr) {
  if (arr.length === 1) return arr;
  // else return null;

  const obj = {};

  arr.forEach((element) => {
    if (obj[element]) obj[element]++;
    else obj[element] = 1;
  });

  for (const keys in obj) {
    if (obj[keys] === 1) {
      return +keys;
    }
  }
  return null;
}

// console.log(findSingleNumber([2, 2, 2, 3, 4, 4, 4])); //  3
// console.log(findSingleNumber([2])); //  2
// console.log(findSingleNumber([])); //  nll
// console.log(
//   findSingleNumber([
//     7, 13, 3, 6, 5, 4, 4, 13, 5, 3, 6, 7, 6, 5, 3, 13, 4, 7, 13, 5, 7, 4, 3, 6,
//     8, 4, 3, 7, 5, 6, 13,
//   ])
// ); //  8
// console.log(
//   findSingleNumber([
//     1, 2, 3, 6, 5, 4, 4, 2, 5, 3, 6, 1, 6, 5, 3, 2, 4, 1, 2, 5, 1, 4, 3, 6, 101,
//     4, 3, 1, 5, 6, 2,
//   ])
// ); //  101

// 133 => write a function sort an array of number inascending order

function sortAnArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] > arr[i]) {
      let temp = arr[i + 1];
      arr[i + 1] = arr[i];
      arr[i] = temp;
    }
  }
  // return arr;
}

// console.log(sortAnArray([3, 2, 6, 9, 10]));

// 134 => Create a left rotation and a right rotation function that returns all the left rotations and right rotations of a string.

// const leftRotations = (string) => {
//   let rotateString = "";

//   for (let i = 0; i < string.length; i++) {
//     for (let j = 0; j < string.length; j++) {
//       console.log(string.slice(0, j));
//     }
//   }
//   return rotateString;
// };

// console.log(leftRotations("abc")); //  ["abc", "bca", "cab"]
// // console.log(rightRotations("abc")); //  ["abc", "cab", "bca"]
// console.log(leftRotations("abcdef")); //  ["abcdef", "bcdefa", "cdefab", "defabc", "efabcd", "fabcde"]
// // console.log(rightRotations("abcdef")); //  ["abcdef", "fabcde", "efabcd", "defabc", "cdefab", "bcdefa"]

// 135 => Create a function that takes a string and replaces the vowels with another character.

// a = 1
// e = 2
// i = 3
// o = 4
// u = 5

function replaceVowel(string) {
  let updateString = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "a") {
      updateString += string[i] = "1";
    } else if (string[i] === "e") {
      updateString += string[i] = "2";
    } else if (string[i] === "i") {
      updateString += string[i] = "3";
    } else if (string[i] === "o") {
      updateString += string[i] = "4";
    } else if (string[i] === "u") {
      updateString += string[i] = "5";
    } else {
      updateString += string[i];
    }
  }
  // return updateString;
}

// console.log(replaceVowel("karachi")); //  "k1r1ch3"
// console.log(replaceVowel("chembur")); //  "ch2mb5r"
// console.log(replaceVowel("khandbari")); //  "kh1ndb1r3"

// other approch

function replaceVowel(string) {
  string = string.toLowerCase();
  string = string.replaceAll("a", "1");
  string = string.replaceAll("e", "2");
  string = string.replaceAll("i", "3");
  string = string.replaceAll("o", "4");
  string = string.replaceAll("u", "5");

  return string;
}

// console.log(replaceVowel("karachi")); //  "k1r1ch3"
// console.log(replaceVowel("chembur")); //  "ch2mb5r"
// console.log(replaceVowel("khandbari")); //  "kh1ndb1r3"

// one more to solve thise question

// 135 => Create a function that takes a string and replaces the vowels with another character.

// a = 1
// e = 2
// i = 3
// o = 4
// u = 5

function replaceVowel(string) {
  const vowelMap = {
    a: "1",
    e: "2",
    i: "3",
    o: "4",
    u: "5",
  };

  let updateString = "";
  for (const char of string) {
    if (vowelMap[char]) {
      updateString += vowelMap[char];
    } else {
      updateString += char;
    }
  }
  return updateString;
}

// console.log(replaceVowel("karachi")); //  "k1r1ch3"
// console.log(replaceVowel("chembur")); //  "ch2mb5r"
// console.log(replaceVowel("khandbari")); //  "kh1ndb1r3"

// 136 => Write a function that returns the position of the second occurrence of "zip" in a string, or -1 if it does not occur at least twice. Your code should be general enough to pass every possible case where "zip" can occur in a string.
function findZip(string) {
  let firstIndex = string.indexOf("zip");

  let secondIndex = string.indexOf("zip", firstIndex + 1);

  if (secondIndex !== -1) {
    return secondIndex;
  } else {
    return -1;
  }
}

// console.log(findZip("all zip files are zipped")); // 18
// console.log(findZip("all zip files are compressed")); // -

// 137 => write a function to find the biggest age in the array with reduce methos

let people = [
  { id: 1, name: "anash", age: 20 },
  { id: 2, name: "john", age: 97 },
  { id: 3, name: "andrew", age: 45 },
  { id: 4, name: "babar", age: 99 },
];

function maximumAge(arr) {
  return arr.reduce((acc, current) => {
    if (current.age > acc) {
      acc = current.age;
    }
    // return acc
  }, 0);
}
// console.log(maximumAge(people));

// one more way

function maximumAge(arr) {
  const ages = arr.map((user) => user.age);
  return Math.max(...ages);
}

// console.log(maximumAge(people))

// 138 => wrtie a function to find the name is the object

function findNames(arr) {
  return arr.reduce((acc, current) => {
    return [...acc, current.name];
  }, []);
}

// console.log(findNames(people));

// 139 => write a function to check all user age are greater then 18 or not

function allOver18(arr) {
  return arr.reduce((acc, current) => {
    if (!acc) return false;
    else current.age > 18;
  }, true);
}

// console.log(allOver18(people));

// 140 => write a function to count the given ocuurence of given object

// let orders = [
//   { id: 1, status: "pending" },
//   { id: 2, status: "pending" },
//   { id: 3, status: "cancelling" },
//   { id: 4, status: "shipped" },
//   { id: 5, status: "shipped" },
// ];

// orders = orders.reduce((prev, current) => {
//   if (prev[current.status]) prev[current.status]++;
//   else prev[current.status] = 1;
//   return prev;
// }, {});

// console.log(orders)

// 141 => The variable watchList holds an array of objects with information on several movies. Use reduce to find the average IMDB rating of the movies directed by Christopher Nolan. Recall from prior challenges how to filter data and map over it to pull what you need. You may need to create other variables, and return the average rating from getRating function. Note that the rating values are saved as strings in the object and need to be converted into numbers before they are used in any mathematical operations.

const watchList = [
  {
    Title: "Inception",
    Year: "2010",
    Rated: "PG-13",
    Released: "16 Jul 2010",
    Runtime: "148 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer: "Christopher Nolan",
    Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    Plot: "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    Language: "English, Japanese, French",
    Country: "USA, UK",
    Awards: "Won 4 Oscars. Another 143 wins & 198 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    Metascore: "74",
    imdbRating: "8.8",
    imdbVotes: "1,446,708",
    imdbID: "tt1375666",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Interstellar",
    Year: "2014",
    Rated: "PG-13",
    Released: "07 Nov 2014",
    Runtime: "169 min",
    Genre: "Adventure, Drama, Sci-Fi",
    Director: "Christopher Nolan",
    Writer: "Jonathan Nolan, Christopher Nolan",
    Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    Language: "English",
    Country: "USA, UK",
    Awards: "Won 1 Oscar. Another 39 wins & 132 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    Metascore: "74",
    imdbRating: "8.6",
    imdbVotes: "910,366",
    imdbID: "tt0816692",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "The Dark Knight",
    Year: "2008",
    Rated: "PG-13",
    Released: "18 Jul 2008",
    Runtime: "152 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer:
      "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    Plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    Language: "English, Mandarin",
    Country: "USA, UK",
    Awards: "Won 2 Oscars. Another 146 wins & 142 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    Metascore: "82",
    imdbRating: "9.0",
    imdbVotes: "1,652,832",
    imdbID: "tt0468569",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Batman Begins",
    Year: "2005",
    Rated: "PG-13",
    Released: "15 Jun 2005",
    Runtime: "140 min",
    Genre: "Action, Adventure",
    Director: "Christopher Nolan",
    Writer:
      "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    Plot: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    Language: "English, Urdu, Mandarin",
    Country: "USA, UK",
    Awards: "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    Metascore: "70",
    imdbRating: "8.3",
    imdbVotes: "972,584",
    imdbID: "tt0372784",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Avatar",
    Year: "2009",
    Rated: "PG-13",
    Released: "18 Dec 2009",
    Runtime: "162 min",
    Genre: "Action, Adventure, Fantasy",
    Director: "James Cameron",
    Writer: "James Cameron",
    Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    Language: "English, Spanish",
    Country: "USA, UK",
    Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    Metascore: "83",
    imdbRating: "7.9",
    imdbVotes: "876,575",
    imdbID: "tt0499549",
    Type: "movie",
    Response: "True",
  },
];

// function getRating(watchList) {
//   const nolanMovies = watchList.filter(
//     (user) => user.Director === "Christopher Nolan"
//   );

//   const inNumber = nolanMovies.map((movie) => parseFloat(movie.imdbRating));
//   return inNumber.reduce((acc, current) => acc + current, 0) / inNumber.length;
// }

// console.log(getRating(watchList));

// 141 => Now that you have worked through a few challenges using higher-order functions like map(), filter(), and reduce(), you now get to apply them to solve a more complex challenge.

// Complete the code for the squareList function using any combination of map(), filter(), and reduce(). The function should return a new array containing the squares of only the positive integers (decimal numbers are not integers) when an array of real numbers is passed to it. An example of an array of real numbers is [-3, 4.8, 5, 3, -3.2].

// Note: Your function should not use any kind of for or while loops or the forEach() function.

const squareList = (arr) => {
  arr = arr.filter((nums) => Number.isInteger(nums) && nums >= 0);

  arr = arr.map((nums) => nums * nums);
  return arr;
};

// const squaredIntegers = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]);
// console.log(squaredIntegers);

// 142 => Fill in the urlSlug function so it converts a string title and returns the hyphenated version for the URL. You can use any of the methods covered in this section, and don't use replace. Here are the requirements:

// The input is a string with spaces and title-cased words
// The output is a string with the spaces between words replaced by a hyphen (-)
// The output should be all lower-cased letters
// The output should not have any spaces

function urlSlug(title) {
  return title
    .toLowerCase()
    .trim()
    .split(" ")
    .filter((word) => word !== "")
    .join("-");
}
// Only change code above this line
// console.log(urlSlug(" Winter Is  Coming"));

// 143 =>Use the every method inside the checkPositive function to check if every element in arr is positive. The function should return a Boolean valu

function checkPositive(arr) {
  // Only change code below this line
  return arr.every((nums) => nums >= 0);
  // Only change code above this line
}

// console.log(checkPositive([1, 2, 3, -4, 5]));

// 144 => Use the some method inside the checkPositive function to check if any element in arr is positive. The function should return a Boolean value.

function checkPositive(arr) {
  // Only change code below this line
  return arr.some((nums) => nums >= 0);
  // Only change code above this line
}

// console.log(checkPositive([1, 2, 3, -4, 5]));

// 145 => This is useful in your program if you can't supply all the arguments to a function at one time. You can save each function call into a variable, which will hold the returned function reference that takes the next argument when it's available. Here's an example using the curried function in the example above:

// const funcForY = curried(1);
// console.log(funcForY(2)); // 3
// Similarly, partial application can be described as applying a few arguments to a function at a time and returning another function that is applied to more arguments. Here's an example:

// function impartial(x, y, z) {
//   return x + y + z;
// }

// const partialFn = impartial.bind(this, 1, 2);
// partialFn(10); // 13
// Fill in the body of the add function so it uses currying to add parameters x, y, and z.
function add(x) {
  // Add your code below this line
  return function(y) {
    return function(z) {
      return x + y + z;
    };
  };
  // Add your code above this line
}
// add(10)(20)(30);

