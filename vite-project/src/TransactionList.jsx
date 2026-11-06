const TransactionList = ({ transactions, onDelete }) => {
  const formatCurrency = (num) => {
    return num.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
  };

  return (
    <div className="relative overflow-hidden rounded-3xl border border-[#F2EFE6]/10 bg-[#0C1210] p-6 md:p-8 mb-6 text-[#F2EFE6]">
      <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-6">Riwayat Transaksi</h2>
      {transactions.length === 0 ? (
        <p className="border-l-2 border-[#C6F432] pl-4 font-mono text-sm uppercase leading-relaxed tracking-[0.15em] text-[#F2EFE6]/50">Belum ada transaksi yang ditambahkan.</p>
      ) : (
        <ul className="divide-y divide-[#F2EFE6]/10">
          {transactions.map((t) => (
            <li
              key={t.id}
              className="group flex flex-col md:flex-row md:items-center justify-between py-4 px-3 rounded-2xl transition-all duration-300 hover:bg-[#F2EFE6]/5 hover:pl-5"
            >
              <div className="flex-1">
                <p className="font-semibold text-[#F2EFE6]">{t.description}</p>
                <p className="mt-1 font-mono text-xs tracking-[0.15em] text-[#F2EFE6]/50 capitalize">{t.type}</p>
              </div>
              <div className="flex items-center gap-4 mt-3 md:mt-0">
                <span
                  className={`text-xl font-black tracking-tighter tabular-nums ${
                    t.type === 'income' ? 'text-[#C6F432]' : 'text-[#FF6B4A]'
                  }`}
                >
                  {formatCurrency(t.amount)}
                </span>
                <button
                  onClick={() => onDelete(t.id)}
                  className="rounded-full border border-[#FF6B4A]/40 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-[#FF6B4A] transition-all duration-300 hover:border-[#FF6B4A] hover:bg-[#FF6B4A] hover:text-[#080C0B]"
                >
                  Hapus
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TransactionList;