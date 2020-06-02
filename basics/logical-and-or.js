let temp = 65

if (temp >=60 && temp <=90) {
  console.log('')
} else if (temp <= 0 || temp >= 120) {
  console.log('it is dangerous outside')
} else {
  console.log('Eh.Do what you want')
}

// Challenge area

let isGuestOneVegan = false
let isGuestTwoVegan = false

if (isGuestOneVegan && isGuestTwoVegan) {
  console.log('Only offer vegan choices')
}
else if (isGuestOneVegan || isGuestTwoVegan) {
  console.log('Make sure to offer some vegan options')
}
else {
  console.log('Offer anything on the menu')
}