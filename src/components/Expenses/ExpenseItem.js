import React from 'react'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'
import Card from '../UI/Card'

const ExpenseItem = ({ date, heading, amount }) => {
  return (
    <Card className='expense-item'>
      <ExpenseDate date={date} />
      <div className='expense-item__description'>
        <h2>{heading}</h2>
        <div className='expense-item__price'>{amount} rs</div>
      </div>
    </Card>
  )
}

export default ExpenseItem
