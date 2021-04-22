import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem';

import './Expense.css';
import ExpensesChart from './ExpensesChart';
import Card from '../UI/Card';  
import ExpenseFilter from './ExpenseFilter';

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangedHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })
  return (
    <Card className="expenses">
      <ExpenseFilter 
      selected={filteredYear}
      onChangeFilter={filterChangedHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      {filteredExpenses.map((expense) => (
        <ExpenseItem 
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        key={expense.id}/>
  
      ))}
    </Card>
  )
    
}

export default Expense;