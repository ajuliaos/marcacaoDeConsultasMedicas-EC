// src/screens/LoginScreen/components/RegisterButton.tsx
import React from 'react';
import { Button } from 'react-native-elements';
import { ViewStyle } from 'react-native';
import { styles } from '../styles';

type RegisterButtonProps = {
  onPress: () => void;
};

const RegisterButton: React.FC<RegisterButtonProps> = ({ onPress }) => (
  <Button
    title="Cadastrar Novo Usuário"
    onPress={onPress}
    containerStyle={styles.registerButton as ViewStyle}
    buttonStyle={styles.registerButtonStyle}
  />
);

export default RegisterButton;
