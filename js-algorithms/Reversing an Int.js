//Solution 1

var reversed = function(number) {
    return parseInt(number.toString().split('').reverse().join('')) * Math.sign(number);
}

//Solution 2

var reversed = function(number) {
    if(Math.sign(number) === 1){
        return parseInt(number.toString().split('').reverse().join(''));
    } else {
        return parseInt(number.toString().split('').reverse().join('')) * (-1);
    }
}

