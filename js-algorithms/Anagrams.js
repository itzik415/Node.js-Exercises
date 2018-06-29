//Solution 1
var anagrams = function(stringA, stringB){
    const aCharMap = buildCharMap(stringA);
    const bCharMap = buildCharMap(stringB);

    if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length){
        return false;
    }

    for (let char in aCharMap) {
        if(aCharMap[char] !== bCharMap[char]) {
            return false;
        }
    }

    return true;
}

var buildCharMap = function(str){
    const charMap = {};
    
    for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1;
    }

    return charMap;
}

anagrams('rail safety', 'fairy tales');


//Solution 2
var anagrams = function(stringA, stringB){
    return cleanString(stringA) === cleanString(stringB);
}

var cleanString = function(str) {
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join();
}

anagrams('rail safety', 'fairy tales');