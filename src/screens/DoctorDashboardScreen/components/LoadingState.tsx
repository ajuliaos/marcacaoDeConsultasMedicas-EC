// src/screens/DoctorDashboardScreen/components/LoadingState.tsx
import React from 'react';
import styled from 'styled-components/native';
import theme from '../../../styles/theme';

const LoadingText = styled.Text`
  text-align: center;
  color: ${theme.colors.text};
  font-size: 16px;
  margin-top: 20px;
`;

type LoadingStateProps = {
  message?: string;
};

const LoadingState: React.FC<LoadingStateProps> = ({ message }) => {
  return <LoadingText>{message || 'Carregando...'}</LoadingText>;
};

export default LoadingState;
