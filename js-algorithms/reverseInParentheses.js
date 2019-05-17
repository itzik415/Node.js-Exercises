function reverseInParentheses(inputString) {
    let y = [...inputString];
    const x = y.lastIndexOf('(');
    const j = y.indexOf(')');
    if(x !== -1) {
        // let n = y.slice(x+1,j).reverse();
        let n = y.slice(x+1,j).reverse().join('');
        let r = y.slice(y.lastIndexOf('('), y.lastIndexOf('(') + n.length + 2).join('')
        y = y.join('').replace(r, n)
        reverseInParentheses(y);
    }
    else {
        console.log(y)
        return y;
    }
    // console.log(y)
}

reverseInParentheses('(asd)');