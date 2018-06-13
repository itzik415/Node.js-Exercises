//Solution 1
var chunk = function(array, size){
    let array2 = [];
    for (let element of array) {
        const last = array2[array2.length - 1];
        
        if(!last || last.length === size) {
            array2.push([element])
        } else {
            last.push(element)
        }
    }
    return array2;
}

chunk([1,2,3,4], 2);

//Solution 2
var chunk = function(array, size){
    let array2 = [];
    let index = 0;

    while (index < array.length) {
        array2.push(array.slice(index, index + size))
        index += size;
    }

    return array2;
}

chunk([1,2,3,4], 3);