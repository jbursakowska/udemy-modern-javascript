// Function - input (argument), code, output (return value)

let greetUser = function () {
    console.log('Welcome user!')
}

greetUser()

let square = function (num) {
  let result = num * num
  return result
}

let value = square(3)

// take in farnheit
// convert it to celsius
// output celsius
// call the function

let convertFtoC = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * 5/9
    return celsius
}

let tempOne = convertFtoC(32)
let tempTwo = convertFtoC(68)

console.log(tempOne)
console.log(tempTwo)

//console.log(convertFtoC(32))
