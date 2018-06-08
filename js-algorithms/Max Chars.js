var maxChar = function(str) {
    let obj = {};
    let max = 0;
    let maxChar = '';
    str.split('').forEach( char => {
        obj[char] ? obj[char]++ : obj[char] = 1;
    });

    for (let char in obj) {
        if(obj[char] > max) {
            max = obj[char];
            maxChar = char;
        }
    }

    return `${maxChar}:${max}`;
}
maxChar("Itzik Shaoulian");