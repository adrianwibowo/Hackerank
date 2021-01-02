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

const bubble = (arr, counter) => {
    console.log(counter)
    const len = arr.length
    for (let i = 0; i < len; i++) {
        //  if arr[i] is > arr[i+1] swap them
        if (arr[i] > arr[i + 1]) {
            let [before, after] = arr.slice(i, i + 2)
            arr[i] = after
            arr[i + 1] = before
            console.log(`[${after} ${before}] ->`, arr.join(' '))
            return bubble(arr, counter + 1)
        }
        else if (i == len - 1) {
            return counter
        }
    }
}

console.log(bubble([4, 9, 7, 5, 8, 9, 3], 0))