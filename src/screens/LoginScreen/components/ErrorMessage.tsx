// src/screens/LoginScreen/components/ErrorMessage.tsx
import React from 'react';
import styled from 'styled-components/native';
import theme from '../../../styles/theme';

const ErrorText = styled.Text`
  color: ${theme.colors.error};
  text-align: center;
  margin-bottom: 10px;
`;

type ErrorMessageProps = {
  message?: string;
};

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  if (!message) return null;
  return <ErrorText>{message}</ErrorText>;
};

export default ErrorMessage;
