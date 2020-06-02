//Global (name)
  //Local (name)
    //Local
  //Local

  // variable shadowing
  // assign a value to a variable

//let name = 'Joanna'

if (true) {
  //let name = 'Lesz'

  if (true) {
      var name = 'Jen' //leaked variable new global
      console.log(name)
  }
}

if (true) {
    console.log(name)   
}

let add = function() {
  if (true) {
    var bob = 2; // available in lines 24 - 32
    dum = 4; // available in the whole file
    let sss = 5; // available in lines 25 - 29

    

  }
  var age = 1;
  test = 2;
}

add()
console.log(test, age)

//let scoped to curly brackets (loops, if statements, functions)
//var is scoped only to a function