import React, {useState} from 'react';
import ExpenseItem from './components/Expenses/ExpenseItem';

import Expense from './components/Expenses/Expense';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Mobile',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'Some other stuff',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const[expense, setExpense] = useState(DUMMY_EXPENSES);
  
  const addExpenseHandler = (expense) => {
    setExpense(prevState => {
      return [expense, ...prevState]
    });
    

  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense items={expense} />
      
     
      </div>
    
    
  );
}

export default App;
