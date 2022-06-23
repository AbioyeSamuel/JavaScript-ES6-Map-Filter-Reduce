// var numbers = [3, 56, 2, 48, 5];
//Map -Create a new array by doing something with each item in an array.
// function Double(x) {
//   return x * 3;
// }
// console.log(numbers.map(Double));

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
// function New(num){
//   return num < 10;
// }
// const newNumbers = numbers.filter(New);
// console.log(newNumbers);

// var newNumber = [];
// numbers.forEach(function (num){
//   if(num<10){
//     newNumber.push(num)
//   }
// });
// console.log(newNumber);

//Reduce - Accumulate a value by doing something to each item in an array.
// function Reduce(accumulator, currentNumber) {
//   return accumulator + currentNumber;
// }
// var newNumber = numbers.reduce(Reduce);
// console.log(newNumber);

// var newNumber = 0;
// numbers.forEach(function (currentNumber) {
//   newNumber += currentNumber;
// });
// console.log(newNumber);

//Find - find the first item that matches from an array.
// function Find(number){
//   return number > 10;
// }
// var FoundNumbers = numbers.find(Find);
// console.log(FoundNumbers);

//FindIndex - find the index of the first item that matches.
// function FindIndex(index) {
//   return index > 10;
// }
// var IndexFound = numbers.findIndex(FindIndex);
// console.log(IndexFound);

//An array of meanings and is truncated too 100 characters.
import emojipedia from "./emojipedia";
function Emoj(emoji) {
  return emoji.meaning.substring(0, 100);
}
var emojiMeaning = emojipedia.map(Emoj);

console.log(emojiMeaning);
