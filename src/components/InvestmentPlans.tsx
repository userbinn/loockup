import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Iniciante',
    price: 50,
    returnRate: 0.8,
    period: 30,
    features: [
      'Rendimento diário de 0.8%',
      'Saque a partir de R$ 20',
      'Suporte básico',
      'Reinvestimento automático'
    ]
  },
  {
    name: 'Profissional',
    price: 500,
    returnRate: 1.0,
    period: 60,
    features: [
      'Rendimento diário de 1.0%',
      'Saque a partir de R$ 50',
      'Suporte prioritário',
      'Reinvestimento automático',
      'Bônus de indicação'
    ]
  },
  {
    name: 'Expert',
    price: 2000,
    returnRate: 1.2,
    period: 90,
    features: [
      'Rendimento diário de 1.2%',
      'Saque sem limite mínimo',
      'Suporte VIP 24/7',
      'Reinvestimento automático',
      'Bônus de indicação premium',
      'Consultoria personalizada'
    ]
  }
];

export function InvestmentPlans() {
  return (
    <section className="py-20 bg-white" id="planos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Escolha seu Plano de Investimento
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Quanto maior seu investimento, maiores são seus rendimentos diários
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="bg-white border border-amber-200 rounded-2xl p-8 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {plan.name}
              </h3>
              <div className="text-amber-600 font-bold text-4xl mb-4">
                R$ {plan.price}
                <span className="text-base font-normal text-gray-500">
                  {' '}
                  / mínimo
                </span>
              </div>
              <div className="mb-6">
                <p className="text-gray-600">Rendimento diário:</p>
                <p className="text-2xl font-bold text-amber-600">
                  {plan.returnRate}%
                </p>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-600">
                    <Check className="h-5 w-5 text-amber-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-amber-500 text-white py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors">
                Começar Agora
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}