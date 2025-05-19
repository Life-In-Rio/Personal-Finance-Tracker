import React from 'react';

const FinanceSummary = ({ transactions }) => {
  const income = transactions
    .filter(t => t.type === 'income')
    .reduce((acc, t) => acc + t.amount, 0);

  const expense = transactions
    .filter(t => t.type === 'expense')
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = income - expense;

  const formatCurrency = (num) => {
    return num.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
  };

  return (
    <div className="bg-white rounded-xl shadow p-4 mb-4">
      <h2 className="text-xl font-semibold mb-2">Ringkasan Keuangan</h2>
      <p>Pemasukan: <strong className="text-green-600">{formatCurrency(income)}</strong></p>
      <p>Pengeluaran: <strong className="text-red-600">{formatCurrency(expense)}</strong></p>
      <p>Saldo Akhir: <strong className="text-blue-600">{formatCurrency(balance)}</strong></p>
    </div>
  );
};

export default FinanceSummary;
