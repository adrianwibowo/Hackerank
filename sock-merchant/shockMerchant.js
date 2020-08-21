var randomShocks = [40, 100, 1, 5, 25, 10, 10 , 5, 1];

function shockMerchant(n, ar) {
    let sortedArr = ar.sort(function(a, b) {return a - b}//this will sort the array by ascending order
    )
    let cocok = 0;
    
    for (let i = 0; i < n - 1; i++) {
        if (sortedArr[i] === sortedArr[i + 1]) {
            cocok++;// if the shoes matched it will stored in the cocok variable
            i++; // need to add 1 index so the loop will check the next two array instead of the of the paired shock
        }
    }
    return cocok;

}

console.log(shockMerchant(6,randomShocks))