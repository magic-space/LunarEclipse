import React , { useState } from 'react';
import ProgressBar from './components/ProgressBar';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  {
    id: '1',
    title: 'Auto-Versicherung',
    amount: 167.31,
    date: new Date(2021, 2, 20)
  },
  {
    id: 2,
    title: 'Haftpflicht',
    amount: 32.95,
    date: new Date(2020, 0, 1)
  }
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);


  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <h2>Let's get started!</h2>
      <p>This is also visible...</p>
      <hr />
      <ProgressBar value='80' unit='%' />
      <hr />
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses item={expenses}/>
    </div>
  );
}

export default App;
