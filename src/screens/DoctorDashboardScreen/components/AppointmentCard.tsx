// src/screens/DoctorDashboardScreen/components/AppointmentCard.tsx
import React from 'react';
import { ViewStyle } from 'react-native';
import { Button, ListItem, Text } from 'react-native-elements';
import {
  Appointment,
  AppointmentStatus,
} from '../hooks/useDoctorDashboard';
import {
  AppointmentCard as Card,
  StatusBadge,
  StatusText,
  ButtonContainer,
  styles,
} from '../styles';
import { getStatusText } from '../utils/statusHelpers';

type AppointmentCardProps = {
  appointment: Appointment;
  onUpdateStatus: (id: string, status: AppointmentStatus) => void;
};

const AppointmentCard: React.FC<AppointmentCardProps> = ({
  appointment,
  onUpdateStatus,
}) => {
  return (
    <Card>
      <ListItem.Content>
        <ListItem.Title style={styles.patientName as ViewStyle}>
          Paciente: {appointment.patientName || 'Nome não disponível'}
        </ListItem.Title>

        <ListItem.Subtitle style={styles.dateTime as ViewStyle}>
          {appointment.date} às {appointment.time}
        </ListItem.Subtitle>

        <Text style={styles.specialty}>{appointment.specialty}</Text>

        <StatusBadge status={appointment.status}>
          <StatusText status={appointment.status}>
            {getStatusText(appointment.status)}
          </StatusText>
        </StatusBadge>

        {appointment.status === 'pending' && (
          <ButtonContainer>
            <Button
              title="Confirmar"
              onPress={() => onUpdateStatus(appointment.id, 'confirmed')}
              containerStyle={styles.actionButton as ViewStyle}
              buttonStyle={styles.confirmButton}
            />
            <Button
              title="Cancelar"
              onPress={() => onUpdateStatus(appointment.id, 'cancelled')}
              containerStyle={styles.actionButton as ViewStyle}
              buttonStyle={styles.cancelButton}
            />
          </ButtonContainer>
        )}
      </ListItem.Content>
    </Card>
  );
};

export default AppointmentCard;
