import * as React from 'react';
import ProgressBar from './components/ProgressBar';
import Expenses from './components/expenses/Expenses';

const App = () => {
  const expenses = [
    {
      id: '1',
      title: 'Auto-Versicherung',
      amount: 167.30,
      date: new Date(2023, 2, 20)
    },
    {
      id: 2,
      title: 'Haftpflicht',
      amount: 32.95,
      date: new Date(2023, 0, 1)
    }
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <p>This is also visible...</p>
      <hr />
      <ProgressBar value='80' unit='%' />
      <hr />
      <Expenses item={expenses}/>
    </div>
  );
}

export default App;
