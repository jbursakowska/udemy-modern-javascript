// Lexical Scope (Static Scope)
// global Scope - defined outside of all code blocks
// Local Scope - defined inside a code block

// in a scope you can access variables defined in that scope, or in any parent/ancestor

// Global Scope (varOne)
  // Local Scope (varTwo)
    // Local Scope (varFour)
  // Local Scope (varThree)

let varOne = 'varOne'

if (true) {
  console.log(varOne)
  let varTwo = 'varTwo'

  if (true) {
    let varFour = 'varFour'
  }
}

if (true) {
  let varThree = 'varThree'
}
console.log(varThree)