import React from 'react'
import './Expenses.css'
import ExpenseItem from './ExpenseItem'

const Expenses = ({ expenses }) => {
  return (
    <div className='expenses'>
      {expenses.map((item) => {
        return (
          <ExpenseItem
            title={item.title}
            amount={item.amount}
            date={item.date}
            id={item.id}
          />
        )
      })}
    </div>
  )
}

export default Expenses
