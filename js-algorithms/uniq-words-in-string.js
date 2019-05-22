function uniqeWordsInString(str) {
    let strAsArray = str.split(' ');
    let obj = {};
    for(i in strAsArray) {
        if(!obj[strAsArray[i]]) {
            obj[strAsArray[i]] = 1
        } else {
            obj[strAsArray[i]] += 1
        }
    }
    return obj;
}

uniqeWordsInString("hello my my my name is itzik");