import { useAuth } from '../../../contexts/AuthContext';

export const useProfile = () => {
  const { user, signOut } = useAuth();

  const getRoleText = (role: string) => {
    switch (role) {
      case 'admin': return 'Administrador';
      case 'doctor': return 'Médico';
      case 'patient': return 'Paciente';
      default: return role;
    }
  };

  return { user, signOut, getRoleText };
};

