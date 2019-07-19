function arrayChunking(array, num){
    const newArr = [];
    const originalArr = [...array];

    for(let i = 0; i < array.length; i += num){
        newArr.push(originalArr.splice(0, num))
    }
    
    return newArr;
}

console.log(arrayChunking([1,2,3,4,5,6,7,8,9], 3))