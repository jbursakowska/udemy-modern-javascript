// Undefined for variable (in absence of a value , javascript assigned a value of undefined)

let name

 if (name === undefined) {
   console.log('Please provide a name')
 } else {
   console.log(name)
 }

 // Undefined for function arguments

let square = function (num) {
    console.log(num)
 }

// Undefined as function return default value
// because we try to do something with a function that doesnt return anything

let result = square()
console.log(result)

// Null as assigned value

let age = 27
age = null
console.log(age)