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


//mySome function, returns true if a single element in the array returns true for a callback function
Array.prototype.mySome = function(callback)
{
	for (let i = 0; i < this.length; i++)			//traverse through the array from beginning
	{
		if (callbacK(this[i], i, this) == true)		//if callback returns true boolean value
		{
			return true;							//return true
		}
	}
	return false;									//return false since callback did not return true for some element
}

//myIndexOf function, returns the first found index of a targeted element in an array
Array.prototype.myIndexOf = function(target, start)
{
    for (let i = start; i < this.length; i++)	//Go through the array starting from the first element
    {
        if (this[i] === target)					//if element matches target, return the index of that element
        {										//otherwise go to the next element
            return i;
        }
    }
    return -1;									//return -1 if the target element is not found in the array
}

//myLastIndexOf function, returns the last found index of a targeted element in an array
Array.prototype.myLastIndexOf = function(target)
{
	for (let i = this.length; i > 0; i--) //Go through the array starting from the last element, and working backwards
	{
		if (this[i] === target)			//if element matches target, return the index of that element,
		{								//otherwise go to the previous element
			return i;
		}
	}

	return -1;							//return -1 if target not found in array
}

