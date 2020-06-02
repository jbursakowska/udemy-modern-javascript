// Read/check/parse from localStorage
const getSavedTodos = function () {
  const todosJSON = localStorage.getItem('todos') 
if (todosJSON !== null) {
  return JSON.parse(todosJSON)
} else {
  return []
  }
}

// Save todos to localStorage
const saveTodos = function (todos) {
  localStorage.setItem('todos', JSON.stringify(todos))
}

// Render application todos
const renderTodos = function (todos, filters) {
  let filteredTodos = todos.filter(function (todo) {
    return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
  })

  const incompleteTodos = filteredTodos.filter(function (todo){
    return !todo.completed
  })

  if (filters.hideCompleted) { 
    filteredTodos = incompleteTodos
  }

  document.querySelector('#todos').innerHTML = ''
  document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos))

  filteredTodos.forEach(function (todo) {
    document.querySelector('#todos').appendChild(generateTodoDOM(todo))
  })
}

// Generate the DOM structure for a todo
const generateTodoDOM = function (todo) {
  const p = document.createElement('p')
  p.textContent = todo.text
  return p
}

// Get the DOM elements for list summary
const generateSummaryDOM = function (incompleteTodos) {
  const summary = document.createElement('h2')
  summary.textContent = `You have ${incompleteTodos.length} todos left`
  return summary
}