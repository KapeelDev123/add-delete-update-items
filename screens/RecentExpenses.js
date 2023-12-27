import { useContext } from 'react'
import ExpensesOutPut from '../components/ExpensesOutput/ExpensesOutPut'
import { ExpensesContext } from '../store/Expense-Context'
import { getDateMinusDays } from '../util/date'

function RecentExpenses() {
  const expensesCtx = useContext(ExpensesContext)

  
  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date()
    const date7DaysAgo = getDateMinusDays(today, 7)

    return expense.date >= date7DaysAgo && expense.date <= date7DaysAgo
  })

  return (
    <ExpensesOutPut
      expenses={recentExpenses}
      expensesPeriod="Last 7 days"
      fallBackText="No expenses registered for the last 7 days."
    />
  )
}

export default RecentExpenses
