let name = '  Joanna B  '

// Length property
console.log(name.length)

// Uppercase Method
console.log(name.toUpperCase())

// Lowercase method
console.log(name.toLowerCase())

// Includes method
let password = 'abc123098'

console.log(password.includes('password'))

let sentence = 'I am going to the park today'
let word = 'park'

console.log(`The word "${word}" ${sentence.includes(word)? 'is' : 'is not'} in the sentence`)

// Trim
console.log(name.trim()) */

// isValidPassword takes in a single string argument return true or false
// true if length is more than 8 chars& doesnt contain the word password

let isValidPassword = function(pass) {
return pass.length > 8 && !pass.includes('password')
}

console.log(isValidPassword('asdfp'))
console.log(isValidPassword('aabc123!@#$%^&'))
console.log(isValidPassword('asdfpasdfpoitpassword'))

// index of method

/* let n = 'leszek';

n.indexOf('password')
 // result is -1
n.indexOf('password') === -1
// result is true
n.indexOf('sz') === -1
// result is false */