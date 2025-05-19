import React, { useState } from 'react';

const TransactionForm = ({ onAdd }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount || !type) {
      alert('Semua field wajib diisi!');
      return;
    }

    if (amount <= 0) {
      alert('Jumlah harus lebih dari 0!');
      return;
    }

    const newTransaction = {
      id: Date.now(),
      description,
      amount: Number(amount),
      type,
    };

    onAdd(newTransaction);
    setDescription('');
    setAmount('');
    setType('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow p-6 mb-6">
      <h2 className="text-xl font-bold mb-4">Tambah Transaksi Baru</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Deskripsi"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <input
          type="number"
          placeholder="Jumlah (contoh: 50000)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="border rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          <option value="">Jenis Transaksi</option>
          <option value="income">Pemasukan</option>
          <option value="expense">Pengeluaran</option>
        </select>
      </div>
      <button
        type="submit"
        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl transition duration-300"
      >
        Tambah Transaksi
      </button>
    </form>
  );
};

export default TransactionForm;
