import React from 'react';
import { InvestmentStats } from '../components/dashboard/InvestmentStats';
import { TransactionHistory } from '../components/dashboard/TransactionHistory';

export function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Meus Investimentos</h1>
      <InvestmentStats />
      <TransactionHistory />
    </div>
  );
}