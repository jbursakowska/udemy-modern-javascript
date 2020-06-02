# notes

## HTML

DOM - Document(which models our HTML doc) Object(Javascript object) Model
https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
https://developer.mozilla.org/en-US/docs/Web/API/NodeList
https://developer.mozilla.org/en-US/docs/Web/HTML

```
λ cd ..
λ live-server notes-app (the folder name)

 const p = document.querySelector('h1') 
 p.remove() // removes the first h1


/* document.querySelector('#for-fun').addEventListener('change', function (e) {
  console.log(e.target.checked)
}) */

//document.querySelector('#notes').innerHTML = '<p>TEST</p>'
//const p = document.querySelector('h1') 
//p.remove() // removes the first h1

/* const ps = document.querySelectorAll('p') //ps stores a list of all matching nodes

ps.forEach(function (p) {
  p.textContent = '******' // replaces all paragraphs with ****
  console.log(p.textContent) //goes through all of nodes and prints them to the console
  p.remove() // removes all p elements
}) */

/* 
document.querySelector('#remove-all').addEventListener('click', function() {
  document.querySelectorAll('.note').forEach(function (note) {
      note.remove()
  })
}) */

const ps = document.querySelectorAll('p')
//ps stores a list of all matching nodes
ps.forEach(function (p) {
  p.textContent = '******' // replaces all paragraphs with ****
  //console.log(p.textContent) //goes through all of nodes and prints them to the console
  //p.remove() // removes all p elements
})
```
// --Single --
// p
// #replace
// .item

// --Multiple--(id comes first)
// p#order
// button.inventory
// h1#title.application
// h1.application#title

//Local Storage only supports string
// CRUD 
// Create/Update - localStorage.setItem('location', 'Philadelphia')
// Getting the data - localStorage.getItem('location')
// Delete - console.log(localStorage.removeItem('location')) / localStorage.clear()

/* const user = {
  name: 'Andrew',
  age: 27
}
const userJSON = JSON.stringify(user)
console.log(userJSON)
localStorage.setItem('user', userJSON) */

/* const userJSON = localStorage.getItem('user')
const user = JSON.parse(userJSON)
console.log(`${user.name} is ${user.age}`) */


// step 1: push the new item onto the note array
// step 2: save the new notes array to local storage
// step 3: rerender array


//find and remove any paragraphs that contain the word 'the'
/* const paragraphs = document.querySelectorAll('p')

paragraphs.forEach(function (paragraph) {
  if (paragraph.textContent.includes('the')) {
      paragraph.remove()
  }
}) */

/* let addParagraph = function (text) {
  let script = document.querySelector('script')
  let paragraph = document.createElement('p')
  paragraph.textContent = text
  document.body.insertBefore(paragraph, script)
}

addParagraph(`You have ${incompItems.length} todos left`)

todos.forEach(function (todo){
  addParagraph(todo.text)
}) */
