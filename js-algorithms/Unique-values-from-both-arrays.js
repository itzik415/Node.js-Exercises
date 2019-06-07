//Finding the uniq values of both arrays
function diffArray(arr1, arr2) {
  var newArr = [...arr1,...arr2];
  return newArr.filter((x,i,a) => a.lastIndexOf(x) === a.indexOf(x))
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);