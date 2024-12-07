import React from 'react';
import { Home, Car, Briefcase, GraduationCap } from 'lucide-react';

export function LoanTypes() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Encontre o Empréstimo Ideal para Você
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <LoanCard
            icon={Home}
            title="Financiamento Imobiliário"
            rate="5,99%"
            description="Realize o sonho da casa própria com nossas taxas competitivas"
          />
          <LoanCard
            icon={Car}
            title="Financiamento de Veículos"
            rate="4,99%"
            description="Conquiste seu veículo com opções flexíveis de financiamento"
          />
          <LoanCard
            icon={Briefcase}
            title="Empréstimo Empresarial"
            rate="6,99%"
            description="Expanda seu negócio com nossas soluções personalizadas"
          />
          <LoanCard
            icon={GraduationCap}
            title="Financiamento Estudantil"
            rate="3,99%"
            description="Invista no seu futuro com financiamento educacional acessível"
          />
        </div>
      </div>
    </section>
  );
}

function LoanCard({ 
  icon: Icon, 
  title, 
  rate, 
  description 
}: { 
  icon: React.ElementType; 
  title: string; 
  rate: string; 
  description: string;
}) {
  return (
    <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
      <Icon className="h-10 w-10 text-blue-600 mb-4" />
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <div className="text-blue-600 font-bold text-2xl mb-3">
        A partir de {rate} a.a.
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
        Saiba Mais →
      </button>
    </div>
  );
}