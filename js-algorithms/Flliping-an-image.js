
const flipAndInvertImage = function(A) {
    return A.map(image => image.reverse().map( b => b === 0 ? 1 : 0));
};


console.log(flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]]))