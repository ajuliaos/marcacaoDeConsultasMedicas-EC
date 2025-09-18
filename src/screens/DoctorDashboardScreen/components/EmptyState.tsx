// src/screens/DoctorDashboardScreen/components/EmptyState.tsx
import React from 'react';
import styled from 'styled-components/native';
import theme from '../../../styles/theme';

const EmptyText = styled.Text`
  text-align: center;
  color: ${theme.colors.text};
  font-size: 16px;
  margin-top: 20px;
`;

type EmptyStateProps = {
  message?: string;
};

const EmptyState: React.FC<EmptyStateProps> = ({ message }) => {
  return <EmptyText>{message || 'Nenhum dado disponível'}</EmptyText>;
};

export default EmptyState;
