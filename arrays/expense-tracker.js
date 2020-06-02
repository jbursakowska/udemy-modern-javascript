// expenense -> description (string) & amount (how much u spend)
// 2 methods / functions as object properties on account
// getaccountsummary -> total up all expenses 

const account = {
  name: 'Joanna B',
  income: [],
  addIncome: function (description, amount) {
    this.income.push({
      description: description,
      amount: amount
    })
  },
  expenses: [],
  addExpense: function (description, amount) {
      this.expenses.push({
        description: description,
        amount: amount
      })
  },
  getAccountSummary: function () {
    let totalExpenses = 0
    let totalIncome = 0
  

    this.expenses.forEach(function (expense) {
      totalExpenses += expense.amount
    })

    this.income.forEach(function (income) {
      totalIncome += income.amount
    })

    let total = totalIncome - totalExpenses
    
    return `${this.name} has $${totalExpenses} in expenses, $${totalIncome} in income and $${total} in total.`
  }
}

account.addExpense('Rent', 950)
account.addExpense('Books', 950)

account.addIncome('Work', 2000)
account.addIncome('Side Job', 2000)

console.log(account.getAccountSummary())

