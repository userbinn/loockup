import React from 'react';
import { Bug, Phone, Mail, MapPin, Twitter, Facebook, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-amber-900 text-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Bug className="h-8 w-8 text-amber-400" />
              <span className="text-xl font-bold text-white">HiveMoney</span>
            </div>
            <p className="text-sm text-amber-200">
              Sua plataforma confiável para investimentos com rendimentos diários.
            </p>
            <div className="flex space-x-4 mt-4">
              <SocialLink icon={Twitter} href="#" />
              <SocialLink icon={Facebook} href="#" />
              <SocialLink icon={Instagram} href="#" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#inicio" className="hover:text-amber-400">Início</a></li>
              <li><a href="#planos" className="hover:text-amber-400">Planos</a></li>
              <li><a href="#rendimentos" className="hover:text-amber-400">Rendimentos</a></li>
              <li><a href="#sobre" className="hover:text-amber-400">Sobre</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(11) 4567-8900</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>contato@hivemoney.com.br</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>São Paulo, SP</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#termos" className="hover:text-amber-400">Termos de Uso</a></li>
              <li><a href="#privacidade" className="hover:text-amber-400">Privacidade</a></li>
              <li><a href="#riscos" className="hover:text-amber-400">Riscos</a></li>
              <li><a href="#regulamento" className="hover:text-amber-400">Regulamento</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-amber-800 mt-8 pt-8 text-sm text-center text-amber-300">
          © {new Date().getFullYear()} HiveMoney. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ icon: Icon, href }: { icon: React.ElementType; href: string }) {
  return (
    <a
      href={href}
      className="w-8 h-8 rounded-full bg-amber-800 flex items-center justify-center hover:bg-amber-700 transition-colors"
    >
      <Icon className="h-4 w-4" />
    </a>
  );
}