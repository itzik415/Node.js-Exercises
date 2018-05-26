//Sulotion 1
let palindrome = (str) => {
    return str === str.split('').reverse().join('');
}

//Sulotion 2
let palindrome = (str) => {
    for(let i = 0; i < str.length/2; i++){
        if(str[i] === str[str.length-i-1]){
            continue;
        }else{
            return false;
        }
    }
    return true;
}

//Sulotion 3
let palindrome = (str) => {
    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1];
    });
}

palindrome('abba');
//true