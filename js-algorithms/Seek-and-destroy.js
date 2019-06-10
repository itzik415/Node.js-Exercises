//returning all the unique values from the array that
//aren't in ...args
function destroyer(arr, ...args) {
  
  return arr.map(x => [...args].indexOf(x) === -1 ? x : null).filter(y => y !== null)
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);