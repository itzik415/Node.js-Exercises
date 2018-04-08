//1. The sum of a range

var range = function(num1,numEnd,numChange){
    var array = [];
    if(numChange === undefined || numChange === 0){
        for(var i = num1; i <= numEnd; i++){
            array.push(i);
        }
    }else{
        if(numChange > 0 && num1 < numEnd){
            for(var i = num1; i <= numEnd; i = i + numChange){
                array.push(i);
            }

        }else if(numChange < 0 && num1 > numEnd){
            for(var i = num1; i >= numEnd; i = i + numChange){
                array.push(i);
            }
        }else{
            for(var i = num1; i <= numEnd; i = i + numChange){
                array.push(i);
            }
        }
    }
    return array;
}

var sum = function(array){
    var total = 0;
    for(var i = array[0]; i <= array[-1]; i++){
        array.push(i);
    }
    for(var y = 0; y < array.length; y++){
        total += array[y];
    }

    return total;
}

//2. Reversing an array

var reverseArray = (list) => {
    var newArray= []
    for(var i = 1; i <= list.length; i++){
        var num = list[list.length-i];
        newArray.push(num);
    }
    return newArray;
}

reverseArray([1,2,3,4,'g',3,'y',2]);

var arrayValue = [1,2,3,4,'g',3,'y',2]
function reverseArrayInPlace(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
      let old = array[i];
      array[i] = array[array.length - 1 - i];
      array[array.length - 1 - i] = old;
    }
    return array;
}

reverseArrayInPlace(arrayValue);