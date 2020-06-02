 const notes = [{
  title: 'My next trip',
  body: 'I would like to go to Mongolia'
}, {
  title: 'Habbits to work on',
  body: 'Exercise.'
}, {
  title: 'Office mod',
  body: 'Get a new seat'
}]

//forEach; does something for each item in the array, only works with arrays and counts in order

notes.forEach(function (item, index) {
  console.log(`${index + 1}. ${item}`)
})

for (let count = 0; count < notes.length; count++) { 
      const num = count +1
      const note = notes[count]
      console.log(`${num}. ${note}`)
}
//reverse count
for (let count = notes.length -1; count >=0; count--) { 
}
//-----------------------------------------------------------------

//returns a number - the items position in the array (multiple - 1st comes back) -1 if not found
//uses === ; {} === {} is false, has to be exact same obj in memory; works with strings/nums/booleans

console.log(notes.indexOf('Note 2'));
let someObject = {}
let otherObject = someObject
someObject === otherObject // true
's' === 's'
//---------------------------------------------------------------------

const index = notes.findIndex(function (note, index) {
  return note.title === 'Habbits to work on' // stops when it finds it; efficient 
}) // returned 1 (2nd item in the array); -1 if not found;

console.log(index)

//----------------------------------------------------------------------------

//findIndex(): when we find a match we store the index in the index variable; no match we store -1

const findNote = function(notes, noteTitle) {
  const index = notes.findIndex(function (note) {
    return note.title.toLowerCase() === noteTitle.toLowerCase() // returns true or false
  })
  return notes[index] //returns the actual note object; if not found undefined
}

const note = findNote(notes, 'Office mod')
console.log(note)

//-----------------------------------------------------

const findNote = function(notes, noteTitle) {
  return notes.find(function (note, index) {
    return note.title.toLowerCase() === noteTitle.toLowerCase()
  })
}

const note = findNote(notes, 'Office modification')

//-----------------------------------------------------------------
//filter() method creates a new array with all elements that pass the test in the function; returns new array

const filteredNotes = notes.filter(function (note, index) {
  return true // returns an array with all the elements; no match empty array
})

// an object comes back from note; a string comes back from note.title so we can do toLowerCase()->string method
// the string method returns another string so we can call another string method includes(searchText)
// put the search text inside of includes()

const findNotes = function (notes, query) {
  return notes.filter(function (note, index) {
    const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
  //const isTitleMatch = note.title.includes('ne')
    const isBodyMatch = note.body.toLocaleLowerCase().includes(query.toLowerCase())
  //const isBodyMatch = note.body.includes(query)
    return isTitleMatch || isBodyMatch // if one of them is true -> return true
  })
}
console.log(findNotes(notes, 'Exercise'))

//-----------------------------------------------------------------------------

// sort() sorts the array its called on = dont need return
console.log('a' < 'b') // true
console.log('a' < 'A') // false; capital letters always come first


// if a should come first -1
// if b comes first 1
// both dont have order changed 0

const sortNotes = function (notes) {
  notes.sort(function (a, b) {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1 //sort a to an index lower than b
    } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
        return 1 //sort b to an index lower than a
    } else {
      return 0 // the order is the same, no adjustment needed
    }
  })
}

sortNotes(notes)
console.log(notes)

//------------------------------------------


/* push() / pop()— add/remove elements from the end of the array
unshift() / shift()— add/remove elements from the beginning of the array
concat()— returns a new array comprised of this array joined with other array(s) and/or value(s)
splice() changes the array by removing or replacing existing elements and/or adding new elements */

