import React from 'react';
import { Link } from 'react-router-dom';
import { AuthLayout } from '../components/auth/AuthLayout';
import { LoginForm } from '../components/auth/LoginForm';

export function LoginPage() {
  return (
    <AuthLayout
      title="Entre na sua conta"
      subtitle={
        <>
          Ou{' '}
          <Link to="/register" className="text-amber-600 hover:text-amber-500">
            crie uma conta gratuita
          </Link>
        </>
      }
    >
      <LoginForm />
    </AuthLayout>
  );
}