import React from 'react';
import { Shield, Smartphone, Clock, Users, Wallet, Gift } from 'lucide-react';

export function Features() {
  return (
    <section className="py-20 bg-white" id="sobre">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Por que escolher a HiveMoney?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Investir com segurança e rentabilidade nunca foi tão fácil
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={Shield}
            title="Segurança Garantida"
            description="Seus investimentos protegidos por nossa garantia exclusiva"
          />
          <FeatureCard
            icon={Smartphone}
            title="App Mobile"
            description="Acompanhe seus rendimentos de qualquer lugar"
          />
          <FeatureCard
            icon={Clock}
            title="Suporte 24/7"
            description="Atendimento especializado todos os dias"
          />
          <FeatureCard
            icon={Users}
            title="Comunidade"
            description="Faça parte de uma comunidade de investidores"
          />
          <FeatureCard
            icon={Wallet}
            title="Saques Rápidos"
            description="Receba seu dinheiro em até 24 horas"
          />
          <FeatureCard
            icon={Gift}
            title="Programa de Indicação"
            description="Ganhe bônus por cada amigo indicado"
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-amber-50 p-8 rounded-xl hover:shadow-lg transition-all">
      <div className="bg-amber-500/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
        <Icon className="h-8 w-8 text-amber-600" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}