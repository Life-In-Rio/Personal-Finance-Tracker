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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="bg-green-100 p-4 rounded-2xl shadow text-green-800">
        <h3 className="text-lg font-semibold">Total Pemasukan</h3>
        <p className="text-xl font-bold">{formatCurrency(income)}</p>
      </div>
      <div className="bg-red-100 p-4 rounded-2xl shadow text-red-800">
        <h3 className="text-lg font-semibold">Total Pengeluaran</h3>
        <p className="text-xl font-bold">{formatCurrency(expense)}</p>
      </div>
      <div className="bg-blue-100 p-4 rounded-2xl shadow text-blue-800">
        <h3 className="text-lg font-semibold">Saldo Akhir</h3>
        <p className="text-xl font-bold">{formatCurrency(balance)}</p>
      </div>
    </div>
  );
};

export default FinanceSummary;
