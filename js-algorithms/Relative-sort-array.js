
let arr1 = [2,3,1,3,2,4,6,7,9,2,19]; 
let arr2 = [2,1,4,3,9,6];

const relativeSortArray = function (arr1, arr2) {
    let res = [];
    let m = new Map();
    for (i of arr1)
        if (!m.has(i)) m.set(i, 1);
        else m.set(i, m.get(i) + 1);
    for (i of arr2) {
        res = res.concat(Array(m.get(i)).fill(i));
        m.delete(i);
    }
    
    m = Array.from(m).sort((a, b) => {
        return a[0] - b[0]
    });

    for (i of m) res = res.concat(Array(i[1]).fill(i[0]));
    return res;

};

relativeSortArray(arr1,arr2)

