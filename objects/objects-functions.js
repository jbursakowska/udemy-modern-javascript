/* let myBook = {
  title: '1984',
  author: 'George Orwell',
  pageCount: 326
}

let otherBook = {
  title: 'A Peoples History',
  author: 'Howard Zinn',
  pageCount: 723
}

let getSummary = function (book) {
    return {
      summary: `${book.title} by ${book.author}`,
      pageCountSummary: `${book.title} is ${book.pageCount} pages long`

    }
}



let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.summary) */

//create function - take in fahrenheit - return object with original f, coverted celsius + coverted kelvin

/* let fahrenheit = 32;
let celsius = (fahrenheit - 32) * 5/9;
let kelvin = (fahrenheit + 459.67) * 5/9; */


let convertFahrenheit = function(fahrenheit) {
  return {
    test: function(){
      console.log('test')
    },
    fahrenheit: fahrenheit,
    celsius: (fahrenheit - 32) * (5/9),
    kelvin: (fahrenheit + 459.67) * (5/9)
  }
}

let temps = convertFahrenheit(74)
temps.test()

console.log(temps)
