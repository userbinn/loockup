import React from 'react';
import { Bitcoin, CircleDollarSign, DollarSign, TrendingUp } from 'lucide-react';

export function Markets() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-4">
          Mercados em Alta
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Explore as principais criptomoedas e comece a investir hoje mesmo
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <CryptoCard
            icon={Bitcoin}
            name="Bitcoin"
            symbol="BTC"
            price="180.450,00"
            change="+5.2"
          />
          <CryptoCard
            icon={CircleDollarSign}
            name="Ethereum"
            symbol="ETH"
            price="9.850,00"
            change="+3.8"
          />
          <CryptoCard
            icon={DollarSign}
            name="USDT"
            symbol="USDT"
            price="4,98"
            change="+0.1"
          />
          <CryptoCard
            icon={TrendingUp}
            name="Cardano"
            symbol="ADA"
            price="2,45"
            change="+7.4"
          />
        </div>
      </div>
    </section>
  );
}

function CryptoCard({ 
  icon: Icon, 
  name, 
  symbol, 
  price, 
  change 
}: { 
  icon: React.ElementType;
  name: string;
  symbol: string;
  price: string;
  change: string;
}) {
  return (
    <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-750 transition-colors">
      <div className="flex items-center space-x-3 mb-4">
        <Icon className="h-8 w-8 text-yellow-400" />
        <div>
          <h3 className="text-lg font-semibold text-white">{name}</h3>
          <span className="text-sm text-gray-400">{symbol}</span>
        </div>
      </div>
      <div className="flex justify-between items-end">
        <div className="text-2xl font-bold text-white">
          R$ {price}
        </div>
        <div className="text-emerald-400 flex items-center">
          <TrendingUp className="h-4 w-4 mr-1" />
          {change}%
        </div>
      </div>
    </div>
  );
}