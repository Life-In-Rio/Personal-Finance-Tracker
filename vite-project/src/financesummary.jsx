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
    <div className="grid grid-cols-1 md:grid-cols-3 mb-6 lg:-mx-20 overflow-hidden rounded-3xl border border-[#F2EFE6]/15 bg-[#0C1210] divide-y divide-[#F2EFE6]/15 md:divide-y-0 md:divide-x">
      <div className="group relative px-6 py-7 lg:px-8 text-[#C6F432] transition-colors duration-500 hover:bg-[#F2EFE6]/5 before:content-['01'] before:absolute before:top-5 before:right-6 before:font-mono before:text-xs before:tracking-[0.2em] before:text-[#F2EFE6]/30 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-0 after:bg-[#C6F432] after:transition-all after:duration-700 hover:after:w-full">
        <h3 className="flex items-center font-mono text-xs font-medium uppercase tracking-[0.2em] text-[#F2EFE6]/60 before:content-[''] before:mr-3 before:h-2 before:w-2 before:rounded-full before:bg-[#C6F432]">Total Pemasukan</h3>
        <p className="mt-5 whitespace-nowrap text-2xl lg:text-3xl xl:text-4xl font-black tracking-tighter tabular-nums">{formatCurrency(income)}</p>
      </div>
      <div className="group relative px-6 py-7 lg:px-8 text-[#FF6B4A] transition-colors duration-500 hover:bg-[#F2EFE6]/5 before:content-['02'] before:absolute before:top-5 before:right-6 before:font-mono before:text-xs before:tracking-[0.2em] before:text-[#F2EFE6]/30 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-0 after:bg-[#FF6B4A] after:transition-all after:duration-700 hover:after:w-full">
        <h3 className="flex items-center font-mono text-xs font-medium uppercase tracking-[0.2em] text-[#F2EFE6]/60 before:content-[''] before:mr-3 before:h-2 before:w-2 before:rounded-full before:bg-[#FF6B4A]">Total Pengeluaran</h3>
        <p className="mt-5 whitespace-nowrap text-2xl lg:text-3xl xl:text-4xl font-black tracking-tighter tabular-nums">{formatCurrency(expense)}</p>
      </div>
      <div className="group relative px-6 py-7 lg:px-8 bg-[#C6F432] text-[#080C0B] transition-colors duration-500 hover:bg-[#F2EFE6] before:content-['03'] before:absolute before:top-5 before:right-6 before:font-mono before:text-xs before:tracking-[0.2em] before:text-[#080C0B]/40 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-0 after:bg-[#080C0B] after:transition-all after:duration-700 hover:after:w-full">
        <h3 className="flex items-center font-mono text-xs font-medium uppercase tracking-[0.2em] text-[#080C0B]/60 before:content-[''] before:mr-3 before:h-2 before:w-2 before:rounded-full before:bg-[#080C0B]">Saldo Akhir</h3>
        <p className="mt-5 whitespace-nowrap text-2xl lg:text-3xl xl:text-4xl font-black tracking-tighter tabular-nums">{formatCurrency(balance)}</p>
      </div>
    </div>
  );
};

export default FinanceSummary;