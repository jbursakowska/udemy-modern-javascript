let todos = getSavedTodos()

const filters = {
  searchText: '',
  hideCompleted: false
}

renderTodos(todos, filters)

document.querySelector('#search-text').addEventListener('input', function (e) {
  filters.searchText = e.target.value
  renderTodos(todos, filters)
})

document.querySelector('#new-todo').addEventListener('submit', function (e) {
  e.preventDefault()
  todos.push({
    text: e.target.elements.text.value,
    completed: false
  })
  saveTodos(todos)
  renderTodos(todos, filters)
  e.target.elements.text.value = ''
})

// IF filters.hideCompleted is TRUE, then don't show completed
// IF filters.hideCompleted is FALSE, then show everything
document.querySelector('#hide-completed').addEventListener('change', function (e) {
  filters.hideCompleted = e.target.checked // sets hideCompleted = true; when checkmark is checked
  renderTodos(todos, filters)
})
