//Solution 1
var fizzBuzz = function(n){
    for(let i = 0; i <= n; i++){
        if(i % 15 === 0){
            console.log('FizzBuzz');
        }else if(i % 5 === 0){
            console.log('Fizz');
        }else if(i % 3 === 0){
            console.log('Buzz');
        }else {
            console.log(i);
        }
    }
}

fizzBuzz(100);