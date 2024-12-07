import React from 'react';
import { TrendingUp, DollarSign, Clock } from 'lucide-react';

export function InvestmentStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <StatCard
        icon={DollarSign}
        title="Saldo Total"
        value="R$ 15.450,00"
        trend="+2.5%"
      />
      <StatCard
        icon={TrendingUp}
        title="Rendimento Hoje"
        value="R$ 123,60"
        trend="+0.8%"
      />
      <StatCard
        icon={Clock}
        title="Próximo Saque"
        value="5 dias"
        subtitle="Disponível em 15/04"
      />
    </div>
  );
}

interface StatCardProps {
  icon: React.ElementType;
  title: string;
  value: string;
  trend?: string;
  subtitle?: string;
}

function StatCard({ icon: Icon, title, value, trend, subtitle }: StatCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="bg-amber-100 p-3 rounded-lg">
          <Icon className="h-6 w-6 text-amber-600" />
        </div>
        {trend && (
          <span className="text-emerald-600 text-sm font-medium">
            {trend}
          </span>
        )}
      </div>
      <h3 className="text-gray-600 text-sm mb-1">{title}</h3>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
      {subtitle && (
        <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
      )}
    </div>
  );
}