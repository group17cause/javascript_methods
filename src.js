// Practical Web Development 
// Group Assignment 2 Due 2-25-21
// Contributors: Winson, Alvin, Parash, Richard


function myReduce(array, callback, accumulator) {
  for (let i = 0; i < array.length; i++) {
    accumulator = callback(accumulator, array[i])
  }
  return accumulator;
}
function myReduceDriver(accumulator, arg) {
  return accumulator + arg;
}
let test_array = [5,8,10];
console.log("myReduce function called on [5,8,10]:", myReduce(test_array, myReduceDriver, 0) )


// function every() {

// }

// function filter() {

// }