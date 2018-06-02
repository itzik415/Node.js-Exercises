//Solution1
const steps = function(N){
    const hash = '#';
    const space = ' ';
    if(N === 0) {
        console.log('');
    }else {
        for(let i = 1; i <= N; i++){
            console.log("'" + hash.repeat(i) + space.repeat(N-i) + "'")    
        }
    }
}

steps(4);

//Solution2
const steps = function(n) {
    for (let row = 0; row < n; row++) {
        let stair = '';

        for (let column = 0; column < n; column++) {
            if (column <= row) {
                stair += '#';
            } else {
                stair += ' ';
            }
        }

        console.log("'" + stair + "'");
    }
}   

steps(4);

//Solution3
const steps = function(n, row = 0, stair = '') {
    if (n == row) {
        return;
    }  

    if (n === stair.length){
        console.log(stair);
        return steps(n, row + 1);
    }

    const add = stair.length <= row ? '#' : ' ';
    steps(n, row, stair);
}

steps(4);