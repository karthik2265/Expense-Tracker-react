import React from 'react'

import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'

const ExpensesList = ({ items }) => {
  if (items.length === 0) {
    return <h2 className='expenses-list__fallback'>No expenses</h2>
  }

  return (
    <ul className='expenses-list'>
      {items.map((expense) => {
        return (
          <ExpenseItem
            heading={expense.title}
            date={expense.date}
            amount={expense.amount}
            key={expense.id}
          />
        )
      })}
    </ul>
  )
}

export default ExpensesList
