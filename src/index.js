var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
// function Double(x) {
//   return x * 3;
// }
// const newNumbers = numbers.map(function(x){
//   return x*2;
// });
// console.log(newNumbers);

// 
function Double(number){
  return number * 3;
}
console.log(numbers.map(Double));







//Filter - Create a new array by keeping the items that return true.

//Reduce - Accumulate a value by doing something to each item in an array.

//Find - find the first item that matches from an array.

//FindIndex - find the index of the first item that matches.
