import React from 'react';
import { BadgeContainer, RoleText } from '../styles';

type Props = { role: string; text: string };

const RoleBadge: React.FC<Props> = ({ role, text }) => (
  <BadgeContainer role={role}>
    <RoleText>{text}</RoleText>
  </BadgeContainer>
);

export default RoleBadge;
