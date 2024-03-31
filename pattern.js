// 1 => write a function to generate  a pattern like this

// ******
// ******
// ******
// ******
// ******

function generatePattern(n) {
  let newString = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      newString += "*";
    }
    newString += "\n";
  }
  return newString;
}

// console.log(generatePattern(5));

// Second Approch

function generatePattern(n) {
  let newString = "";

  for (let i = 1; i <= n; i++) {
    newString += "*".repeat(n);
    newString += "\n";
  }
  return newString;
}

// console.log(generatePattern(5));

// 2 => Write A function to generate pattern like this

// *
// **
// ***
// ****
// *****

function leftTraingle(n) {
  let traingle = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      traingle += "*";
    }
    traingle += "\n";
  }
  return traingle;
}

// console.log(leftTraingle(5));

// Second Approch

function leftTraingle(n) {
  let traingle = "";
  for (let i = 1; i <= n; i++) {
    traingle += "*".repeat(i);
    traingle += "\n";
  }
  return traingle;
}

// console.log(leftTraingle(10));

// 3 => write a function to generate a pattern like this

// 1
// 12
// 123
// 1234
// 12345

function countingPattern(letters) {
  let String = "";

  for (let i = 1; i <= letters.length; i++) {
    for (let j = 0; j < i; j++) {
      String += `${letters[j]} `;
    }
    String += "\n";
  }
  return String;
}

// console.log(countingPattern("12345"));

// Second Way

function countingPattern(letters) {
  let String = "";

  for (let i = 1; i <= letters.length; i++) {
    for (let j = 0; j < i; j++) {
      String += `${letters.slice(0, i)}`;
      break;
    }
    String += "\n";
  }
  return String;
}

// console.log(countingPattern("12345"));

// function countingPattern(letters) {
//   let String = "";

//   for (let i = 1; i <= letters.length; i++) {
//     String += letters.slice(0, i);
//     String += "\n";
//   }
//   return String;
// }

// console.log(countingPattern("12345"));

// 4 => write a function to find generate the pattern like this

// 1
// 22
// 333
// 4444
// 55555

function generatePattern(letter) {
  let String = "";

  let increament = 0;
  for (let i = 1; i <= letter.length; i++) {
    for (let j = 0; j < i; j++) {
      String += letter.slice(increament, i);
    }
    increament++;
    String += "\n";
  }
  return String;
}

// console.log(generatePattern("12345"));

// Second Way

function generatePattern(letter) {
  let String = "";

  let increament = 0;
  for (let i = 1; i <= letter.length; i++) {
    String += `${letter.slice(increament, i).repeat(i)}`;
    increament++;
    String += "\n";
  }
  return String;
}

// console.log(generatePattern("12345"));

// 5 => write a function to generate Inverted Right Pyramid

// ******
// *****
// ***
// **
// *

function invertedRightPyramid(n) {
  let newString = "";

  for (let i = n; i >= 1; i--) {
    for (let j = i; j >= 1; j--) {
      newString += "*";
    }
    newString += "\n";
  }
  return newString;
}
// console.log(invertedRightPyramid(5));

// Second Way

function invertedRightPyramid(n) {
  let newString = "";

  for (let i = n; i >= 1; i--) {
    newString += "*".repeat(i);
    newString += "\n";
  }
  return newString;
}
// console.log(invertedRightPyramid(10));

// 6 => write a function to generate Inverted Numbered Right Pyramid;

function InvertedNumberedRightPyramid(letter, n) {
  let pattern = "";

  for (let i = n; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      pattern += letter[j];
    }
    pattern += "\n";
  }
  return pattern;
}

// console.log(InvertedNumberedRightPyramid("12345", 5));

// Second Way

function InvertedNumberedRightPyramid(letter, n) {
  let pattern = "";

  for (let i = n; i > 0; i--) {
    pattern += letter.slice(0, i);
    pattern += "\n";
  }
  return pattern;
}

// console.log(InvertedNumberedRightPyramid("12345", 5));

// 7 => write a function to generate a traingle like this
//      *
//     **
//    ***
//   *****
//  *******
// *********

function generateTraingle() {
  let newString = "";

  for (let i = 1; i <= 5; i++) {
    for (let j = 0; j < 5 - i; j++) {
      newString += " ";
    }
    for (let l = 0; l < 2 * i - 1; l++) {
      newString += "*";
    }
    newString += "\n";
  }
  return newString;
}

// console.log(generateTraingle());

// Second Way

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

// 8 => write a function to print Diamond star pattern

function daimondStarPattern(n) {
  let newString = "";

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < 5 - i; j++) {
      newString += " ";
    }
    for (let k = 0; k < 2 * i - 1; k++) {
      newString += "*";
    }
    newString += "\n";
  }
  for (let l = 5; l >= 1; l--) {
    for (let n = 1; n <= 5 - l; n++) {
      newString += " ";
    }
    for (let m = 0; m < 2 * l - 1; m++) {
      newString += "*";
    }
    newString += "\n";
  }
  return newString;
}

// console.log(daimondStarPattern(5));

// Second Way

// function daimondStarPattern(n) {
//   let newString = "";

//   for (let i = 1; i <= n; i++) {
//     newString += " ".repeat(5 - i);
//     newString += "*".repeat(2 * i - 1);
//     newString += "\n";
//   }
//   for (let l = 5; l >= 1; l--) {
//     newString += " ".repeat(5 - l);
//     newString += "*".repeat(2 * l - 1);
//     newString += "\n";
//   }
//   return newString;
// }

// console.log(daimondStarPattern(5));

// 9 => write a function to generate a Half Diamond Star Pattern

// *
// **
// ***
// ****
// *****
// ******
// ******
// *****
// ****
// **
// *

function HalfDiamondStarPattern() {
  let newString = "";

  for (let i = 0; i <= 5; i++) {
    for (let j = 0; j <= i; j++) {
      newString += "*";
    }
    newString += "\n";
  }
  for (let l = 5; l >= 0; l--) {
    for (let m = l; m >= 0; m--) {
      newString += "*";
    }
    newString += "\n";
  }
  return newString;
}

// console.log(HalfDiamondStarPattern());

// Second Way

function HalfDiamondStarPattern() {
  let newString = "";

  for (let i = 1; i <= 5; i++) {
    newString += "*".repeat(i);
    newString += "\n";
  }
  for (let i = 5; i >= 1; i--) {
    newString += "*".repeat(i);
    newString += "\n";
  }
  return newString;
}

// console.log(HalfDiamondStarPattern())

// 10 => write a function to implement BinaryTrianglePattern

function BinaryTrianglePattern(string) {
  let pattern = "";

  for (let i = 1; i <= string.length; i++) {
    pattern += `${string.slice(-i)}`;
    pattern += "\n";
  }
  return pattern;
}

// console.log(BinaryTrianglePattern("10101"));

// Second Way

function binaryTrianglePattern(string) {
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    for (let j = i; j >= 0; j--) {
      newString += string[j] + " ";
    }
    newString += "\n";
  }
  return newString;
}

// console.log(binaryTrianglePattern("10101"));

// 11 => write a function to generate Number Crown Pattern

// Example =>

// 1       1
// 12     21
// 123   321
// 1234 4321

function numberCrownPattern(string) {
  let newString = "";

  let decreament = 3;
  let increament = 0;
  for (let i = 1; i <= string.length; i++) {
    for (let j = 0; j < i; j++) {
      newString += string[j];
    }
    newString += " ".repeat(decreament);
    for (let k = 0; k < 5 - i; k++) {
      newString += " ";
    }
    for (let l = increament; l >= 0; l--) {
      newString += string[l];
    }
    newString += "\n";
    decreament--;
    increament++;
  }
  return newString;
}

// console.log(numberCrownPattern("1234"));

// 12 => write a function to generate Increasing Number Triangle Pattern

// 1
// 2  3
// 4  5  6
// 7  8  9  10
// 11  12  13  14  15
// 16  17  18  19  20  21
function increasingNumberTrianglePattern(string, n) {
  let newString = "";
  let increment = 0;

  for (let i = 1; i <= n; i++) {
    let row = string.slice(increment, increment + i * 2 - 1); // Adjusting slice length
    newString += row + "\n";
    increment += i;
  }

  return newString;
}

// console.log(
//   increasingNumberTrianglePattern("123456789101112131415161718192021", 6)
// );

// 13 => write a function to generate Increasing Letter Triangle Pattern
// A
// A B
// A B C
// A B C D
// A B C D E
// A B C D E F

function IncreasingLetterTrianglePattern(letters) {
  let newString = "";

  for (let i = 1; i <= letters.length; i++) {
    for (let j = 0; j < i; j++) {
      newString += `${letters[j]} `;
    }
    newString += "\n";
  }
  return newString;
}

// console.log(IncreasingLetterTrianglePattern("ABCDEE"));

// Second Way

function IncreasingLetterTrianglePattern(letters) {
  let newString = "";

  for (let i = 1; i <= letters.length; i++) {
    newString += `${letters.slice(0, i)} `;
    newString += "\n";
  }
  return newString;
}

// console.log(IncreasingLetterTrianglePattern("ABCDEE"));

// there more one way

function IncreasingLetterTrianglePattern(letters) {
  let newString = "";
  let counter = 0;
  for (let i = 0; i <= letters.length; i++) {
    newString += `${letters.slice(0, counter)}`;
    newString += "\n";
    counter++;
  }
  return newString;
}

// console.log(IncreasingLetterTrianglePattern("ABCDEE"));

// 14 => write a function to generate Reverse Letter Triangle Pattern
// A B C D E F
// A B C D E
// A B C D
// A B C
// A B
// A

function ReverseLetterTrianglePattern(string) {
  let newString = "";

  for (let i = string.length - 1; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      newString += string[j];
    }
    newString += "\n";
  }
  return newString;
}

// console.log(ReverseLetterTrianglePattern("ABCDEF"));

// Second Way

function ReverseLetterTrianglePattern(string) {
  let newString = "";

  for (let i = string.length; i > 0; i--) {
    newString += string.slice(0, i);
    newString += "\n";
  }
  return newString;
}

// console.log(ReverseLetterTrianglePattern("ABCDEF"));

// third way

function ReverseLetterTrianglePattern(string) {
  let newString = "";
  let counter = string.length;

  for (let i = string.length; i > 0; i--) {
    newString += string.slice(0, counter);
    newString += "\n";
    counter--;
  }
  return newString;
}

// console.log(ReverseLetterTrianglePattern("ABCDEF"));

// 15 => write a function to genrate Alpha-Ramp Pattern

// A
// B B
// C C C
// D D D D
// E E E E E
// F F F F F F

function AlphaRampPattern(letter) {
  let newString = "";

  for (let i = 0; i < letter.length; i++) {
    newString += `${letter[i].repeat(i + 1)}`;
    newString += "\n";
  }
  return newString;
}

// console.log(AlphaRampPattern("ABCDEF"));

// Second Way

function AlphaRampPattern(letter) {
  let newString = "";
  let counter = 1;

  for (let i = 0; i < letter.length; i++) {
    const rows = letter[i].repeat(counter);
    const addSpace = rows.split("").join(" ");
    newString += `${addSpace}\n`;
    counter++;
  }
  return newString;
}

// console.log(AlphaRampPattern("ABCDEF"));

// 16 => write a function to generate alpha traingle Pattern

// F
// E F
// D E F
// C D E F
// B C D E F
// A B C D E F

function AlphaTrianglePattern(string, n) {
  let newString = "";

  for (let i = 1; i <= string.length; i++) {
    newString += string.slice(-i);
    newString += "\n";
  }
  return newString;
}

// console.log(AlphaTrianglePattern("ABCDEF", 6));

// Second Way

function AlphaTrianglePattern(string, n) {
  let newString = "";

  for (let i = n - 1; i >= 0; i--) {
    const row = string.slice(i);
    const spacedRow = row.split("").join(" ");
    newString += `${spacedRow}\n`;
  }
  return newString;
}

// console.log(AlphaTrianglePattern("ABCDEF", 6));

// 17 => write a function to generate Symmetric-Void Pattern

// ************
// *****  *****
// ****    ****
// ***      ***
// **        **
// *          *
// **        **
// ***      ***
// ****    ****
// *****  *****
// ************

function SymmetricVoidPattern() {
  let newString = "";
  newString += "*";
  let increament = 0;
  for (let i = 5; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      newString += "*";
    }
    newString += " ".repeat(increament);
    newString += " ".repeat(5 - i);

    for (let k = i; k >= 0; k--) {
      newString += "*";
    }
    increament++;
    newString += "\n";
  }

  let counter = 5;
  for (let i = 0; i <= 5; i++) {
    for (let j = 0; j <= i; j++) {
      newString += "*";
    }
    newString += " ".repeat(counter);
    newString += " ".repeat(5 - i);
    for (let k = 0; k <= i; k++) {
      newString += "*";
    }
    newString += "\n";
    counter--;
  }
  return newString;
}

// console.log(SymmetricVoidPattern());

// 18 => write a function to generate Symmetric-Butterfly Pattern

// example

// *        *
// **      **
// ***    ***
// ****  ****
// **********
// ****  ****
// ***    ***
// **      **
// *        *

function SymmetricButterflyPattern() {
  let newString = "";
  let counter = 5;

  for (let i = 0; i <= 5; i++) {
    for (let j = 0; j <= i; j++) {
      newString += "*";
    }
    newString += " ".repeat(5 - i);
    newString += " ".repeat(counter);

    for (let k = 0; k <= i; k++) {
      newString += "*";
    }
    newString += "\n";
    counter--;
  }
  let counter2 = 0;
  for (let i = 4; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      newString += "*";
    }
    newString += " ".repeat(counter2);
    newString += " ".repeat(6 - i);

    for (let l = 0; l <= i; l++) {
      newString += "*";
    }
    newString += "\n";
    counter2++;
  }
  return newString;
}

// console.log(SymmetricButterflyPattern());

// 19 => write a function to generate hollow rectangle Pattern

// "********"
// "*      *"
// "*      *"
// "*      *"
// "********"

function hollowRectanglePattern() {
  let newString = "";

  newString += "*".repeat(10) + "\n";
  for (let i = 1; i <= 3; i++) {
    newString += "*" + " ".repeat(8) + "*" + "\n";
  }
  newString += "*".repeat(10);
  return newString;
}

// console.log(hollowRectanglePattern());