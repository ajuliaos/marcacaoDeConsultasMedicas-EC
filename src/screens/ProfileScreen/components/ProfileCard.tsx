import React from 'react';
import { Avatar, Name, Email, SpecialtyText } from '../styles';
import RoleBadge from './RoleBadge';
import { useProfile } from '../hooks/useProfile';

const ProfileCard: React.FC = () => {
  const { user, getRoleText } = useProfile();

  return (
    <>
      <Avatar source={{ uri: user?.image || 'https://via.placeholder.com/150' }} />
      <Name>{user?.name}</Name>
      <Email>{user?.email}</Email>
      <RoleBadge role={user?.role || ''} text={getRoleText(user?.role || '')} />
      {user?.role === 'doctor' && (
        <SpecialtyText>Especialidade: {user?.specialty}</SpecialtyText>
      )}
    </>
  );
};

export default ProfileCard;
