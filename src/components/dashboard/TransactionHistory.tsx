import React from 'react';
import { ArrowUpRight, ArrowDownLeft } from 'lucide-react';

const transactions = [
  {
    id: 1,
    type: 'deposit',
    amount: 1000,
    date: '2024-03-20',
    status: 'completed'
  },
  {
    id: 2,
    type: 'withdrawal',
    amount: 500,
    date: '2024-03-18',
    status: 'pending'
  },
  // Add more transaction examples
];

export function TransactionHistory() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-6">Histórico de Transações</h2>
      <div className="space-y-4">
        {transactions.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </div>
    </div>
  );
}

interface Transaction {
  id: number;
  type: 'deposit' | 'withdrawal';
  amount: number;
  date: string;
  status: 'completed' | 'pending';
}

function TransactionItem({ transaction }: { transaction: Transaction }) {
  const isDeposit = transaction.type === 'deposit';
  
  return (
    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
      <div className="flex items-center space-x-4">
        <div className={`p-2 rounded-full ${isDeposit ? 'bg-emerald-100' : 'bg-amber-100'}`}>
          {isDeposit ? (
            <ArrowDownLeft className="h-5 w-5 text-emerald-600" />
          ) : (
            <ArrowUpRight className="h-5 w-5 text-amber-600" />
          )}
        </div>
        <div>
          <p className="font-medium text-gray-900">
            {isDeposit ? 'Depósito' : 'Saque'}
          </p>
          <p className="text-sm text-gray-500">
            {new Date(transaction.date).toLocaleDateString('pt-BR')}
          </p>
        </div>
      </div>
      <div className="text-right">
        <p className={`font-semibold ${isDeposit ? 'text-emerald-600' : 'text-amber-600'}`}>
          {isDeposit ? '+' : '-'}R$ {transaction.amount.toFixed(2)}
        </p>
        <p className={`text-sm ${
          transaction.status === 'completed' ? 'text-emerald-600' : 'text-amber-500'
        }`}>
          {transaction.status === 'completed' ? 'Concluído' : 'Pendente'}
        </p>
      </div>
    </div>
  );
}