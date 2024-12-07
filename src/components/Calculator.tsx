import React, { useState } from 'react';

export function Calculator() {
  const [amount, setAmount] = useState(10000);
  const [term, setTerm] = useState(36);
  const rate = 0.0599; // 5.99% APR

  const monthlyPayment = calculateMonthlyPayment(amount, rate, term);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Calculadora de Empréstimo
        </h2>
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Valor do Empréstimo: R$ {amount.toLocaleString('pt-BR')}
              </label>
              <input
                type="range"
                min="1000"
                max="100000"
                step="1000"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Prazo: {term} meses
              </label>
              <input
                type="range"
                min="12"
                max="84"
                step="12"
                value={term}
                onChange={(e) => setTerm(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-center">
                <div className="text-sm text-gray-600 mb-1">
                  Pagamento Mensal Estimado
                </div>
                <div className="text-3xl font-bold text-blue-600">
                  R$ {monthlyPayment.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
              </div>
            </div>
            <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Solicitar Agora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function calculateMonthlyPayment(principal: number, rate: number, term: number) {
  const monthlyRate = rate / 12;
  return (
    (principal * monthlyRate * Math.pow(1 + monthlyRate, term)) /
    (Math.pow(1 + monthlyRate, term) - 1)
  );
}