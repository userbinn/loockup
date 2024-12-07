import React from 'react';
import { Link } from 'react-router-dom';
import { AuthLayout } from '../components/auth/AuthLayout';
import { RegisterForm } from '../components/auth/RegisterForm';

export function RegisterPage() {
  return (
    <AuthLayout
      title="Crie sua conta"
      subtitle={
        <>
          Já tem uma conta?{' '}
          <Link to="/login" className="text-amber-600 hover:text-amber-500">
            Faça login
          </Link>
        </>
      }
    >
      <RegisterForm />
    </AuthLayout>
  );
}