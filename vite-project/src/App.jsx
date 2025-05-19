import React, { useState, useEffect } from 'react';
import FinanceSummary from './components/FinanceSummary';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';

function App() {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Personal Finance Tracker</h1>
      <FinanceSummary transactions={transactions} />
      <TransactionForm onAdd={addTransaction} />
      <TransactionList transactions={transactions} onDelete={deleteTransaction} />
    </div>
  );
}

export default App;
