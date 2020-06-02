let myBook = {
  title: '1984',
  author: 'George Orwell',
  pageCount: 326
}

console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal Farm'

console.log(`${myBook.title} by ${myBook.author}`)

// model a person
// name, age, location then generate a string
// bob is 50 years old and lives in alaska
// increase age by 1 and print message again

let person = {
  name: 'Bob',
  age: 50,
  location:'Chicago'
}

console.log(`${person.name} is ${person.age} years old and lives in ${person.location}`)

person.age = person.age + 1
console.log(`${person.name} is ${person.age} years old and lives in ${person.location}`)