import React, { useState } from 'react'
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import ExpenseChart from './ExpenseChart'

const Expenses = ({ expenses }) => {
  const [selectedYear, setSelectedYear] = useState('2022')

  const yearChangeHandler = function (year) {
    setSelectedYear(year)
  }

  const filteredExpenses = expenses.filter(
    (item) => String(item.date.getFullYear()) === selectedYear
  )

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selection={selectedYear}
          onYearChange={yearChangeHandler}
        />
        <ExpenseChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  )
}

export default Expenses
