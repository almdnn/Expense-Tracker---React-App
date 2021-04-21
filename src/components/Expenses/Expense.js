import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem';

import './Expense.css';
import Card from '../UI/Card';  
import ExpenseFilter from './ExpenseFilter';

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangedHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  }
    return (
        <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onFilterChanged={filterChangedHandler} />
        <ExpenseItem 
        title={props.item[0].title}
        amount={props.item[0].amount}
        date={props.item[0].date}>
        </ExpenseItem>
        <ExpenseItem
      title={props.item[1].title}
      amount={props.item[1].amount}
      date={props.item[1].date}>
      </ExpenseItem>
      <ExpenseItem
     title={props.item[2].title}
     amount={props.item[2].amount}
     date={props.item[2].date}>
      </ExpenseItem>
      <ExpenseItem
     title={props.item[3].title}
     amount={props.item[3].amount}
     date={props.item[3].date}>
      </ExpenseItem>
        </Card>
    );

};

export default Expense;