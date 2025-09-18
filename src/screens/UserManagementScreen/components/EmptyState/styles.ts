import styled from 'styled-components/native';
import theme from '../../../../styles/theme';

export const Container = styled.View`
  padding: 20px;
  align-items: center;
  justify-content: center;
`;

export const Message = styled.Text`
  font-size: 16px;
  color: ${theme.colors.text};
  text-align: center;
  margin-top: 10px;
`;
