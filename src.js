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
console.log("myReduce function called on [5,8,10]:", myReduce(test_array, myReduceDriver, 0));


function myEvery(array, callback) {
  let flag = Boolean(false);
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      flag = true;
    } 
    else {
      flag = false;
    }
  }
  return flag;
}
function isLessThan20(arg) {
  return arg < 20;
}
console.log("myEvery called on [5,8,10] less than 20:", myEvery(test_array, isLessThan20));


function myFilter(array, callback) {
  let new_array = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      new_array.push(array[i]);
    }
  }
  return new_array;
}
function isGreaterThan7(element) {
  return element > 7;
}
console.log("myFilter called on [5,8,10] greater than 7:", myFilter(test_array, isGreaterThan7));
