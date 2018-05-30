//Solution 1
var capitalize = function(str){
	let array = str.toLowerCase().split(' ');
	let newArray = [];
	for(let word of array) {
		newArray.push(word.charAt(0).toUpperCase() + word.slice(1));
	}
	return newArray.join(' ');
}

capitalize('a short string');

//Solution 2
let capitalize = (str) => {
    let result = str[0].toUpperCase();

    for (let i = 1; i < str.length; i++) {
        if (str[i-1] === ' ') {
            result += str[i].toUpperCase();
        }else {
            result += str[i];
        }
    }

    return result;
}

capitalize('a short string');