import React from 'react'
import './ExpenseItem.css'

const ExpenseItem = ({ date, title, amount }) => {
  return (
    <div className='expense-item'>
      <div>{date.toString()}</div>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>{amount} rs</div>
      </div>
    </div>
  )
}

export default ExpenseItem