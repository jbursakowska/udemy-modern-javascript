let myAccount = {
  name: 'Jo',
  expenses: 0,
  income: 0
}

let addExpense = function (account, amount) {
  account.expenses = account.expenses + amount
}

let addIncome = function (account, income) {
  account.income = account.income + income
}

let resetAccount = function (account) {
  account.income = 0
  account.expenses = 0
}

let getAccountSummary = function (account) {
  let balance = account.income - account.expenses
  return `Account for ${account.name} has $${balance}. $${account.income} in income. 
  $${account.expenses} in expenses.`
}

addIncome(myAccount, 100)
addExpense(myAccount, 10)
addExpense(myAccount, 10)
getAccountSummary(myAccount)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))
  