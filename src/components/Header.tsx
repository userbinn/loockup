import React from 'react';
import { Bug, Menu } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-amber-500 text-white sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Bug className="h-8 w-8 text-white" />
          <span className="text-2xl font-bold">HiveMoney</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <NavLink href="#inicio">Início</NavLink>
          <NavLink href="#planos">Planos</NavLink>
          <NavLink href="#rendimentos">Rendimentos</NavLink>
          <NavLink href="#sobre">Sobre</NavLink>
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-amber-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-amber-700 transition-colors">
            Começar Agora
          </button>
          <button className="md:hidden">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-white hover:text-amber-200 transition-colors font-medium"
    >
      {children}
    </a>
  );
}