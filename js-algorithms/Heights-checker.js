// Students are asked to stand in non-decreasing order of heights for an annual photo.
// Return the minimum number of students not standing in the right positions.  
// (This is the number of students that must move in order for all students to be standing in non-decreasing order of height.)

var d = function(heights) {
    let sortHeights = [...heights].sort((a,b) => a - b);
    let total = 0;
    heights.forEach((num,i) => num !== sortHeights[i] ? total++ : null);
    return total;
};

console.log(d([1,1,4,2,1,3]));