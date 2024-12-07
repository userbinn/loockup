import React from 'react';
import { TrendingUp, Shield, Zap } from 'lucide-react';

export function Hero() {
  return (
    <section className="bg-gradient-to-b from-amber-500 to-amber-400 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            Faça seu dinheiro trabalhar como uma abelha
          </h1>
          <p className="text-xl mb-8 text-amber-100">
            Rendimentos diários garantidos a partir de 0.8% ao dia.
            Comece com apenas R$ 50,00.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-amber-600 px-8 py-4 rounded-lg font-semibold hover:bg-amber-50 transition-colors">
              Comece a Investir
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors">
              Saiba Mais
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <StatCard
            icon={TrendingUp}
            title="Rendimento Diário"
            description="Receba seus rendimentos todos os dias úteis"
          />
          <StatCard
            icon={Shield}
            title="100% Seguro"
            description="Seu investimento protegido e garantido"
          />
          <StatCard
            icon={Zap}
            title="Saque Rápido"
            description="Retire seu dinheiro em até 24 horas"
          />
        </div>
      </div>
    </section>
  );
}

function StatCard({
  icon: Icon,
  title,
  description
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
      <Icon className="h-10 w-10 text-amber-200 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-amber-100">{description}</p>
    </div>
  );
}