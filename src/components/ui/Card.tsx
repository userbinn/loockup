import React from 'react';
import { CryptoCardProps, FeatureCardProps } from '../../types/crypto';
import { TrendingUp } from 'lucide-react';

export function CryptoCard({ icon: Icon, name, symbol, price, change }: CryptoCardProps) {
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

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-gray-700 p-8 rounded-xl text-center hover:bg-gray-650 transition-colors">
      <div className="bg-violet-900/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
        <Icon className="h-8 w-8 text-yellow-400" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}