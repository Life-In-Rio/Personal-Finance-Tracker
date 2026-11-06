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
    <form onSubmit={handleSubmit} className="relative overflow-hidden rounded-3xl border border-[#F2EFE6]/10 bg-[#0C1210] p-6 md:p-8 mb-6 text-[#F2EFE6] before:content-[''] before:absolute before:-top-20 before:-right-20 before:h-52 before:w-52 before:rounded-full before:bg-[#C6F432]/15 before:blur-3xl">
      <h2 className="relative text-2xl md:text-3xl font-black uppercase tracking-tighter mb-6">Tambah Transaksi Baru</h2>
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Deskripsi"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="rounded-2xl border border-[#F2EFE6]/15 bg-[#080C0B] px-4 py-3 font-mono text-sm text-[#F2EFE6] placeholder:text-[#F2EFE6]/30 transition-all duration-300 hover:border-[#F2EFE6]/40 focus:outline-none focus:border-[#C6F432] focus:shadow-[0_0_0_4px_rgba(198,244,50,0.12)]"
        />
        <input
          type="number"
          placeholder="Jumlah (contoh: 50000)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="rounded-2xl border border-[#F2EFE6]/15 bg-[#080C0B] px-4 py-3 font-mono text-sm text-[#F2EFE6] placeholder:text-[#F2EFE6]/30 transition-all duration-300 hover:border-[#F2EFE6]/40 focus:outline-none focus:border-[#C6F432] focus:shadow-[0_0_0_4px_rgba(198,244,50,0.12)]"
        />
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="rounded-2xl border border-[#F2EFE6]/15 bg-[#080C0B] px-4 py-3 font-mono text-sm text-[#F2EFE6] [color-scheme:dark] transition-all duration-300 hover:border-[#F2EFE6]/40 focus:outline-none focus:border-[#C6F432] focus:shadow-[0_0_0_4px_rgba(198,244,50,0.12)]"
        >
          <option value="">Jenis Transaksi</option>
          <option value="income">Pemasukan</option>
          <option value="expense">Pengeluaran</option>
        </select>
      </div>
      <button
        type="submit"
        className="relative mt-6 inline-flex items-center gap-3 rounded-full bg-[#C6F432] px-8 py-3 font-mono text-sm font-bold uppercase tracking-[0.2em] text-[#080C0B] shadow-[0_0_50px_-12px_rgba(198,244,50,0.6)] transition-all duration-500 hover:gap-6 hover:-translate-y-0.5 hover:bg-[#F2EFE6] after:content-['→'] after:text-lg"
      >
        Tambah Transaksi
      </button>
    </form>
  );
};

export default TransactionForm;