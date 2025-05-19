import React from 'react';

const TransactionList = ({ transactions, onDelete }) => {
  const formatCurrency = (num) => {
    return num.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
  };

  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h2 className="text-xl font-semibold mb-2">Daftar Transaksi</h2>
      {transactions.length === 0 ? (
        <p>Tidak ada transaksi.</p>
      ) : (
        <ul>
          {transactions.map((t) => (
            <li
              key={t.id}
              className={`flex justify-between items-center border-b py-2 ${
                t.type === 'income' ? 'text-green-600' : 'text-red-600'
              }`}
            >
              <span>{t.description}</span>
              <span>{formatCurrency(t.amount)}</span>
              <span className="capitalize">{t.type}</span>
              <button
                onClick={() => onDelete(t.id)}
                className="ml-4 text-sm text-white bg-red-500 px-2 py-1 rounded hover:bg-red-600"
              >
                Hapus
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TransactionList;
