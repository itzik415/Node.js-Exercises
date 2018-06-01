//Solution1
const steps = function(N){
    const hash = '#';
    const space = ' ';
    if(N === 0) {
        console.log('');
    }else {
        for(let i = 1; i <= N; i++){
            console.log( hash.repeat(i) + space.repeat(N-i))    
        }
    }
}

steps(4);