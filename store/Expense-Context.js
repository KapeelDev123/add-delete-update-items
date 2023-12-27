import { createContext, useReducer } from 'react'

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2021-12-19'),
  },
  {
    id: 'e2',
    description: 'A pair of trousers',
    amount: 89.29,
    date: new Date('2022-01-05'),
  },
  {
    id: 'e3',
    description: 'Some Banana',
    amount: 5.99,
    date: new Date('2021-12-01'),
  },
  {
    id: 'e4',
    description: 'A book',
    amount: 14.99,
    date: new Date('2022-02-19'),
  },
  {
    id: 'e5',
    description: 'Buy another book',
    amount: 18.59,
    date: new Date('2021-12-18'),
  },
  {
    id: 'e6',
    description: 'A pair of gloves',
    amount: 89.29,
    date: new Date('2022-01-05'),
  },
  {
    id: 'e7',
    description: 'Buy a Book',
    amount: 18.59,
    date: new Date('2022-12-01'),
  },
  {
    id: 'e8',
    description: 'Sell a mobile',
    amount: 18.59,
    date: new Date('2023-11-19'),
  },
  {
    id: 'e9',
    description: 'Buy a TV',
    amount: 102.2,
    date: new Date('2022-02-18'),
  },
]

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  removeExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
})

function expensesReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      const id = new Date().toString() + Math.random().toString()
      return [{ ...action.payLoad, id: id }, ...state]
    case 'UPDATE':
      const updatableExpense = [{...action.payLoad.data, id: action.payLoad.id}]
      const otherExpenses = state.filter(
        (expense) => expense.id !== action.payLoad.id,
      )
      

      const updatedExpenses = [...updatableExpense, ...otherExpenses]
      
      return updatedExpenses

    case 'DELETE':
      return state.filter((expense) => expense.id !== action.payLoad)
    default:
      return state
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES)

  function addExpense(expenseData) {
    dispatch({ type: 'ADD', payLoad: expenseData })
  }

  function deleteExpense(id) {
    dispatch({ type: 'DELETE', payLoad: id })
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: 'UPDATE', payLoad: { id: id, data: expenseData } })
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  }

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  )
}

export default ExpensesContextProvider
