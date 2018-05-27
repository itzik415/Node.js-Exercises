//Solution 1
let reverse = (str) =>{
    return str.split('').reverse().join('');
}

//Solution 2
let reverse = (str) =>{
    let newStr = '';
    for(let i=str.length; i<0; i--){
        let newStr = newStr + str[i];
    }
    return newStr;
}

//Solution 3
let reverse = (str) =>{
    return str.split('').reduce((reversed,character) => character + reversed, '');
}

reverse('Itzik');
//kiztI