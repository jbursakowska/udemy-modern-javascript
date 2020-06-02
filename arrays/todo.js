const todos = [
  {
    text: 'Order cat food',
    completed: true
  },
  {
    text: 'Clean kitchen',
    completed: false
  },
  {
    text: 'Buy food',
    completed: true
  },
  {
    text: 'Do work',
    completed: false
  },
  {
    text: 'Exercise',
    completed: true
  }
]

//---------------------------------------------------------

const deleteTodo = function (todos, todoText) {
  const index = todos.findIndex(function (todo) {
    return todo.text.toLowerCase() === todoText.toLowerCase()
  })
  if (index > -1) {
    todos.splice(index, 1)
  }
}

deleteTodo(todos, 'buy food')
console.log(todos) 

//--------------------------------------------------

const getThingsToDo = function(todos) {
  return todos.filter(function (item){
    return !item.completed // the items  that say "false" equate to true and stay in the list
  //return todo.completed === false 
  })
}
console.log(getThingsToDo(todos))

//====================================================

//sort the array that [completed: false] are on top of the array
//1. a.completed === false; sort a to an index lower than b -> higher in the array 

const sortTodos = function (todos) {
  todos.sort(function (a, b) {
    if (!a.completed && b.completed) { // if (a.completed === false && b.completed === true)
        return -1 //only want this condition to be true if a should come before b; a isn't completed, b is completed
    } else if (!b.completed && a.completed) { // if (b.completed === false && a.completed === true)
        return 1
    } else {
        return 0
    }
  })
}

// this also worked for the sorting

const sortTodos = function (todos) {
  todos.sort(function (a, b) {
    if (a.completed < b.completed) {
      return -1 //sort a to an index lower than b
    }
  if (b.completed < a.completed) {
    return 1 //sort b to an index lower than a
  }
    return 0
})
}

/* take 1st and 2nd item in array
[true, false, true, false, true]

a:true & b:false

if (a=false & b=true) sort/put 'a' item to an index lower than 'b' -> higher in the array 

else (b=false & a=true) sort/put 'b' item to an index lower than a -> higher in the array  */


