// The Hamming distance between two integers is the number of positions 
// at which the corresponding bits are different.

// Given two integers x and y, calculate the Hamming distance.

// Note:
// 0 ≤ x, y < 2^31.

// Example:

// Input: x = 1, y = 4

// Output: 2

// Explanation:
// 1   (0 0 0 1)
// 4   (0 1 0 0)
//        ↑   ↑

// The above arrows point to positions where the corresponding bits are different.


var hammingDistance = function(x, y) {
    let num1 = (x).toString(2).split('');
    let num2 = (y).toString(2).split('');
    let counter = 0;
    if(num1.length > num2.length){
        for(let i = 0; i < num1; i++) {
            if(num1[i] != num2[i]) {
                counter++;
            }
        }
    }else{
        for(let i = 0; i < num2; i++) {
            if(num2[i] != num1[i]) {
                counter++;
            }
        }
    }
    return counter
};
