import React, { useState } from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
  const saveExpenseHandler = function (expenseData) {
    const expense = {
      ...expenseData,
      id: Math.random(),
    }
    props.onAddExpense(expense)
  }

  const [showForm, setShowForm] = useState(false)

  return (
    <div className='new-expense'>
      {!showForm && (
        <button
          onClick={function () {
            setShowForm(true)
          }}
        >
          Add New Expense
        </button>
      )}
      {showForm && (
        <ExpenseForm
          setShowForm={setShowForm}
          onSaveExpense={saveExpenseHandler}
        />
      )}
    </div>
  )
}

export default NewExpense
