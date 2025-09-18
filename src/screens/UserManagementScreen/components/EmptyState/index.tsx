import React from 'react';
import { Container, Message } from './styles';

interface EmptyStateProps {
  text: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ text }) => {
  return (
    <Container>
      <Message>{text}</Message>
    </Container>
  );
};

export default EmptyState;
