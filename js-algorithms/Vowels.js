//Solution 1
var Vowels = function (str) {
    let x = 0;
    let lower = str.toLowerCase();
    for(let i = 0; i < lower.length; i++) {
        if(lower[i] === 'a' || lower[i] === 'e' || lower[i] === 'i' || lower[i] === 'o' || lower[i] === 'u'){
            x++;
        }
    }
    return x;   
}

Vowels('ThEreIa');

//Solution 2
var Vowels = function (str) {
    let x = 0;
    const array = ['a', 'e', 'i', 'o', 'u'];
    let lower = str.toLowerCase();
    for (let i = 0; i < lower.length; i++) {
        for (let y = 0; y < array.length; y++) {
            if (lower[i] === array[y]) {
                x++;
            }
        }
    }
    return x;   
}

Vowels('ThEreIa');

