export type Role = 'admin' | 'doctor' | 'patient';

export const getRoleText = (role: Role): string => {
  switch (role) {
    case 'admin': return 'Administrador';
    case 'doctor': return 'Médico';
    case 'patient': return 'Paciente';
    default: return role;
  }
};
