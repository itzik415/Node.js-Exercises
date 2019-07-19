function arrayChunking(array, num){
    const newArr = [];

    for(let i = 0; i < array.length; i += num){
        newArr.push(array.slice(i, i+num))
    }
    
    return newArr;
}

console.log(arrayChunking([1,2,3,4,5,6,7,8,9], 6))