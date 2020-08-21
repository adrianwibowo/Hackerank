
let example =[
[1, 1, 1 ,0 ,0 ,0],
[0, 1, 0, 0, 0, 0],
[1, 1, 1, 0, 0, 0],
[0, 0, 2, 4, 4, 0],
[0, 0, 0, 2, 0, 0],
[0, 0, 1, 2, 4, 0]
];

let hehe = [
    [-1, -1, 0, -9, -2, -2],
    [-2, -1, -6, -8, -2, -5],
    [-1, -1, -1, -2, -3, -4],
    [-1, -9, -2, -4, -4, -5],
    [-7, -3, -3, -2, -9, -9],
    [-1, -3, -1, -2, -4, -5]
]

function hourglassSum(arr) {
    
    let hourGlasses = [];// declare a variable for gathering the sum of hourglass
    for (let i = 0; i <= 3; i++) {//first loop is to check 3 first row
        for (let j = 0; j <= 3 ; j++) { // second loop is to check 3 first column
            // this is for counting the hour glass vlaue
            const currentHourGlass =
                arr[i][j] + arr[i][j + 1] + arr[i][j + 2] +
                arr[i + 1][j + 1] +
                arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];
            if (currentHourGlass > hourGlasses) {
            hourGlasses = currentHourGlass;// this is for finding the highest sum value of the Hourglass
            }
        }
    }
    
    return console.log(hourGlasses);



}

hourglassSum(example);
