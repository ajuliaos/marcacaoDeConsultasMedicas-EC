// src/screens/LoginScreen/index.tsx
import React from 'react';
import { Text } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../types/navigation';
import { useLogin } from './hooks/useLogin';
import { Container, Title, styles } from './styles';
import LoginForm from './components/LoginForm';
import RegisterButton from './components/RegisterButton';

type NavProps = NativeStackNavigationProp<RootStackParamList, 'Login'>;

const LoginScreen: React.FC = () => {
  const navigation = useNavigation<NavProps>();

  const {
    email,
    setEmail,
    password,
    setPassword,
    loading,
    error,
    handleLogin,
  } = useLogin();

  return (
    <Container>
      <Title>App Marcação de Consultas</Title>

      {/* Formulário de Login */}
      <LoginForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        error={error}
        loading={loading}
        onSubmit={handleLogin}
      />

      {/* Botão Registrar isolado */}
      <RegisterButton onPress={() => navigation.navigate('Register')} />

      {/* Texto de ajuda */}
      <Text style={styles.hint}>
        Primeiro acesso? Cadastre-se como Admin ou Paciente.
      </Text>
    </Container>
  );
};

export default LoginScreen;
