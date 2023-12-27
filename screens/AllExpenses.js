import { useContext } from 'react'
import ExpensesOutPut from '../components/ExpensesOutput/ExpensesOutPut'
import { ExpensesContext } from '../store/Expense-Context'

function AllExpenses() {
  const expensesCtx = useContext(ExpensesContext)

  return (
    <ExpensesOutPut
      expenses={expensesCtx.expenses}
      expensesPeriod="Total"
      fallbackText="No expenses registered found!"
    />
  )
}

export default AllExpenses
