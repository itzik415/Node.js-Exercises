//Solution 1
var pyramid = function (num) {
    if (num === 0) {
        console.log("''");
    } else {
        var x = 1;
        for (let i = 1; i <= num; i++){
            let space = ' ';
            let hush = '#';
            console.log(`'${space.repeat(num-i)}${hush.repeat(x)}${space.repeat(num-i)}'`)
            x = x + 2;
        }
    }
}

//Solution 2
var pyramid = function (num) {
    const midpoint = Math.floor((2 * num - 1) / 2);

    for (let row = 0; row < num; row++) {
        let level = '';

        for(let column = 0; column < 2 * num - 1; column++){
            if (midpoint  - row <= column && midpoint + row >= column) {
                level += '#';
            } else {
                level += ' ';
            }
        }
        console.log(`'${level}'`);
    }   
}

//Solution 3
var pyramid = function (num, row = 0, level = '') {
    if (row === num) {
        return;
    }

    if (level.length === 2 * num - 1) {
        console.log(`'${level}'`);
        return pyramid(num, row + 1)
    }

    const midpoint = Math.floor((2 * num - 1) / 2);
    let add;
    if (midpoint - row <= level.length && midpoint + row >= level.length) {
        add = '#'
    } else {
        add = ' ';
    }
    pyramid(num, row, level + add);
}