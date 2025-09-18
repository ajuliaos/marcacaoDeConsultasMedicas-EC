 // src/screens/DoctorDashboardScreen/utils/statusHelpers.ts
import theme from '../../../styles/theme';
import { AppointmentStatus } from '../hooks/useDoctorDashboard';

/**
 * Retorna a cor correspondente ao status da consulta.
 */
export const getStatusColor = (status: AppointmentStatus): string => {
  switch (status) {
    case 'confirmed':
      return theme.colors.success;
    case 'cancelled':
      return theme.colors.error;
    default:
      return theme.colors.warning;
  }
};

/**
 * Retorna o texto legível para o status da consulta.
 */
export const getStatusText = (status: AppointmentStatus): string => {
  switch (status) {
    case 'confirmed':
      return 'Confirmada';
    case 'cancelled':
      return 'Cancelada';
    default:
      return 'Pendente';
  }
};
