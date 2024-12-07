import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { format, subDays } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const generateData = () => {
  const data = [];
  for (let i = 14; i >= 0; i--) {
    data.push({
      date: format(subDays(new Date(), i), 'dd/MM', { locale: ptBR }),
      return: 0.8 + Math.random() * 0.4
    });
  }
  return data;
};

const data = generateData();

export function DailyReturns() {
  return (
    <section className="py-20 bg-amber-50" id="rendimentos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Rendimentos Diários
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Acompanhe o histórico de rendimentos dos últimos 15 dias
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis domain={[0, 2]} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="return"
                  stroke="#f59e0b"
                  strokeWidth={2}
                  dot={{ fill: '#f59e0b' }}
                  name="Rendimento (%)"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatBox
            title="Média Diária"
            value="0.95%"
            description="Rendimento médio dos últimos 15 dias"
          />
          <StatBox
            title="Maior Rendimento"
            value="1.2%"
            description="Melhor performance no período"
          />
          <StatBox
            title="Menor Rendimento"
            value="0.8%"
            description="Rendimento mínimo garantido"
          />
        </div>
      </div>
    </section>
  );
}

function StatBox({
  title,
  value,
  description
}: {
  title: string;
  value: string;
  description: string;
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-3xl font-bold text-amber-500 mb-2">{value}</p>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}