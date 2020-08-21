let a = [6, 4, 1];

function countSwaps(a) {
    let n = a.length;
    let numSwaps = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            // Swap adjacent elements if they are in decreasing order
            if (a[i] > a[j]) {
                let temp = a[i];
                a[i] = a[j];
                a[j] = temp;
                numSwaps += 1;
            }
        }

    }

    return [
        console.log(`Array is shorted in ${numSwaps} swaps`),
        console.log(`First Element: ${a[0]}`),
        console.log(`Last Element: ${a[n-1]}`)
    ]

}
countSwaps(a)