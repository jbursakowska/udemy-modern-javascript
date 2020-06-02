function varTest() {
  var x = 1;
  {
    var x = 2;  // same variable!
    console.log(x);  // 2
  }
  console.log(x);  // 2
}

function letTest() {
  let x = 1;
  {
    let x = 2;  // different variable
    console.log(x);  // 2
  }
  console.log(x);  // 1
}
____________________________________

var x = 'global';
let y = 'global';
console.log(this.x); // "global"
console.log(this.y); // undefined

// var can be decalred more than once
// var has function based scope "function scoped variable" / let and const are block scoped (code blocks - if statments )
// var only the declaration gets hoisted to the top 
// let, unlike var, does not create a property on the global object.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#Temporal_dead_zone