//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

//Math.random() always returns a number lower than 1.

/* let num = 103.941

console.log(num.toFixed(2))

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

let min = 10
let max = 20
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min // changes range to 10 - 20
console.log(randomNum) */

//  create a function that takes in a guess // then generate a random number in a given range and guess if its correct
// number is between 1-5 ; if guess is -true and false otherwise

//let randomNum = Math.random() * (max - min) will give you a num between 0 - 3.999
// (max - min + 1) will give you 0 - 4.99999

let numberGuess = function(guess) {
    let min = 1
    let max = 5
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min

    console.log(randomNum)

    return guess === randomNum
}

console.log(numberGuess(3))