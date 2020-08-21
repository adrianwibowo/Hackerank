let prices = [3,5,5,6,6,2,3,1]

function calculateAmount(prices) {
    let a = prices;
    let sum =[];
    let totalAmount = 0;
    let d = [];

    for(let j = 0 ; j < a.length; j++){
        let x = a[j] -a[j - 1]
        let z = Math.min(...d)
        if(j === 0) {
            sum.push(a[j])
        } else {
            let b = a[j] - z
            if(b < 0) sum.push(0)
            else sum.push(b)
        }
        totalAmount += sum[j]
        d.push(a[j])
    }
    return totalAmount;
}

console.log(calculateAmount(prices))