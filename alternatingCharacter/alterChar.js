let s = ['a','a','a','a','b','b','b','b']


function alternatingCharacters(s) {
    let last = s[0];// to store the first index value
    let deleted = 0;//to count the same character on the array
    for (let i = 1; i < s.length; i++) {
        if (last === s[i]) {
            deleted++;
        } else {
            last = s[i];
        }
    }
    return deleted;

}

console.log(alternatingCharacters(s));