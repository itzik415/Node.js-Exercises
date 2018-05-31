//Solution 1
var capitalize = function(str){
	let array = str.toLowerCase().split(' ');
	let newArray = [];
	for(let i = 0; i < array.length; i++) {
		newArray.push(array[i].charAt(0).toUpperCase() + array[i].slice(1));
	}
	return newArray.join(' ');
}

capitalize('a short string');


