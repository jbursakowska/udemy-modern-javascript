// Multiple arguments
let add = function (a, b, c) {
  return a + b + c
}

let result = add(10, 1, 5) // call signature
console.log(result)

// default arguments
let getScoreText = function(name = 'Anonymous', score = 0) {
  return `Name: ${name} - Score: ${score}`  
  //return 'Name: ' + name + ' - Score: ' + score
}

let scoreText = getScoreText(undefined, 99)
console.log(scoreText)


//getTip function
//takes in totalBill and the % you want to tip tipPercent .2 * 100
//return the value

//a 25% tip on $40 would be $10

let getTip = function(total, tipPercent = .2) {
    return `A ${tipPercent * 100}% tip on $${total} would be $${total * tipPercent}`
  //return total * tipPercent
}

let tip = getTip(60)
console.log(tip)



// template string / template literals
// pop in, or interpolate, the name and age variables that we previously had set there by using $
let name = 'Jen'
let age = 12
console.log(`Hey, my name is ${name}! I am ${age} years old.`)