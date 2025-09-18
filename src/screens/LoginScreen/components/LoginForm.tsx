// src/screens/LoginScreen/components/LoginForm.tsx
import React from 'react';
import { Input, Button } from 'react-native-elements';
import { ViewStyle } from 'react-native';
import ErrorMessage from './ErrorMessage';
import { styles } from '../styles';

type LoginFormProps = {
  email: string;
  setEmail: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  error?: string;
  loading: boolean;
  onSubmit: () => void;
};

const LoginForm: React.FC<LoginFormProps> = ({
  email,
  setEmail,
  password,
  setPassword,
  error,
  loading,
  onSubmit,
}) => {
  return (
    <>
      {/* Input Email */}
      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        containerStyle={styles.input}
      />

      {/* Input Senha */}
      <Input
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        containerStyle={styles.input}
      />

      {/* Mensagem de erro */}
      <ErrorMessage message={error} />

      {/* Botão Entrar */}
      <Button
        title="Entrar"
        onPress={onSubmit}
        loading={loading}
        containerStyle={styles.button as ViewStyle}
        buttonStyle={styles.buttonStyle}
      />
    </>
  );
};

export default LoginForm;
