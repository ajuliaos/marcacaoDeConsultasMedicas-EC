// src/screens/LoginScreen/hooks/useLogin.ts
import { useState, useCallback } from 'react';
import { useAuth } from '../../../contexts/AuthContext';

export const useLogin = () => {
  const { signIn } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  /**
   * Realiza o login chamando o AuthContext
   */
  const handleLogin = useCallback(async () => {
    try {
      setLoading(true);
      setError('');
      await signIn({ email, password });
    } catch (err) {
      setError('Email ou senha inválidos');
    } finally {
      setLoading(false);
    }
  }, [email, password, signIn]);

  return {
    email,
    setEmail,
    password,
    setPassword,
    loading,
    error,
    handleLogin,
  };
};
