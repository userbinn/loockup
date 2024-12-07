import React from 'react';
import { Hero } from '../components/Hero';
import { InvestmentPlans } from '../components/InvestmentPlans';
import { DailyReturns } from '../components/DailyReturns';
import { Features } from '../components/Features';

export function HomePage() {
  return (
    <>
      <Hero />
      <InvestmentPlans />
      <DailyReturns />
      <Features />
    </>
  );
}