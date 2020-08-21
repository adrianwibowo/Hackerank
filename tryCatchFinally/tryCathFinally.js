
let s = "1234" // for true result
let ss = 1234 //for false result

function reverseString(s) {
    try {
        s = s.split("").reverse().join("");// re-asign s variable
       } catch (e) {
            console.log("s.split is not a function"); // if itu false so eror will catched by catch and print the "s.split is not a function" & the value of parameter
            
       }
       console.log(s); // calling s variable to be printed
  }

reverseString(s);

/*
function reserveString(s) {
    if (typeof s === 'string') {
        s = s.split('').reverse().join('')
        console.log(s)
    }
    else {
        console.log('s.split is not a function')
        console.log(s)
    }
}


function reserveString(s) {
    try{
        console.log(s.split('').reverse().join(''))
    }
    catch(err) {
        console.log(err.message)
        console.log(s)
    }
}
*/