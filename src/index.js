var numbers = [3, 56, 2, 48, 5];
//Map -Create a new array by doing something with each item in an array.

var newNumbers1 = numbers.map((x) => x * 1);
console.log(newNumbers1);

// const newNumbers = numbers.map(function(x){
//   return x * 2;
// });
// console.log(newNumbers);

// var newNumber = [];
// numbers.forEach(function(x){
//   newNumber.push(x * 3);
// });

// console.log(newNumber);

//Filter - Create a new array by keeping the items that return true.

var newNumbers2 = numbers.filter((num) => num < 10);
console.log(newNumbers2);

// var newNumber = [];
// numbers.forEach(function (num){
//   if(num<10){
//     newNumber.push(num)
//   }
// });
// console.log(newNumber);

//Reduce - Accumulate a value by doing something to each item in an array.

var newNumbers3 = numbers.reduce(
  (accumulator, currentNumber) => accumulator + currentNumber
);
console.log(newNumbers3);

// var newNumber = 0;
// numbers.forEach(function (currentNumber) {
//   newNumber += currentNumber;
// });
// console.log(newNumber);

//Find - find the first item that matches from an array.

var FoundNumbers = numbers.find((number) => number > 10);
console.log(FoundNumbers);

//FindIndex - find the index of the first item that matches.

var IndexFound = numbers.findIndex((index) => index > 10);
console.log(IndexFound);

//CHALLENGE
//An array of meanings and is truncated too 100 characters.
// import emojipedia from "./emojipedia";
// function Emoj(emoji) {
//   return emoji.meaning.substring(0, 100) + "...";
// }
// const emojiMeaning = emojipedia.map(Emoj);

// console.log(emojiMeaning);
