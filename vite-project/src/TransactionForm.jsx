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
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow p-4 mb-4">
      <h2 className="text-xl font-semibold mb-2">Tambah Transaksi</h2>
      <input
        type="text"
        placeholder="Deskripsi"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="block w-full p-2 mb-2 border rounded"
      />
      <input
        type="number"
        placeholder="Jumlah"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="block w-full p-2 mb-2 border rounded"
      />
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="block w-full p-2 mb-2 border rounded"
      >
        <option value="">Pilih Jenis Transaksi</option>
        <option value="income">Pemasukan</option>
        <option value="expense">Pengeluaran</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        Tambah
      </button>
    </form>
  );
};

export default TransactionForm;
