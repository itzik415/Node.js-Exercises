let str1 = "abcd12 efg";
let str2 = " gf2edcb1a";

function findDuplicatesStrings(s1, s2){
    return s2.split('').sort().join('') === s1.split('').sort().join('');
}

console.log(findDuplicatesStrings(str1, str2))
