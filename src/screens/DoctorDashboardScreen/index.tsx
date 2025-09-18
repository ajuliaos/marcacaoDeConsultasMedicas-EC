// src/screens/DoctorDashboardScreen/index.tsx
import React from 'react';
import { ScrollView, TextStyle, ViewStyle } from 'react-native';
import { Button, ListItem, Text } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import Header from '../../components/Header';
import { RootStackParamList } from '../../types/navigation';
import { useDoctorDashboard } from './hooks/useDoctorDashboard';
import {
  Container,
  Title,
  AppointmentCard,
  StatusBadge,
  StatusText,
  ButtonContainer,
  styles,
} from './styles';
import { getStatusText } from './utils/statusHelpers';

type NavProps = NativeStackNavigationProp<RootStackParamList, 'DoctorDashboard'>;

const DoctorDashboardScreen: React.FC = () => {
  const navigation = useNavigation<NavProps>();
  const { appointments, loading, handleUpdateStatus, signOut } = useDoctorDashboard();

  return (
    <Container>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Title>Minhas Consultas</Title>

        {/* Botão de navegação para Perfil */}
        <Button
          title="Meu Perfil"
          onPress={() => navigation.navigate('Profile')}
          containerStyle={styles.button as ViewStyle}
          buttonStyle={styles.buttonStyle}
        />

        {/* Lista de consultas */}
        {loading ? (
          <Text style={{ textAlign: 'center', marginTop: 20 }}>Carregando consultas...</Text>
        ) : appointments.length === 0 ? (
          <Text style={{ textAlign: 'center', marginTop: 20 }}>Nenhuma consulta agendada</Text>
        ) : (
          appointments.map(appointment => (
            <AppointmentCard key={appointment.id}>
              <ListItem.Content>
                <ListItem.Title style={styles.patientName as TextStyle}>
                  Paciente: {appointment.patientName || 'Nome não disponível'}
                </ListItem.Title>
                <ListItem.Subtitle style={styles.dateTime as TextStyle}>
                  {appointment.date} às {appointment.time}
                </ListItem.Subtitle>
                <Text style={styles.specialty as TextStyle}>{appointment.specialty}</Text>

                <StatusBadge status={appointment.status}>
                  <StatusText status={appointment.status}>
                    {getStatusText(appointment.status)}
                  </StatusText>
                </StatusBadge>

                {appointment.status === 'pending' && (
                  <ButtonContainer>
                    <Button
                      title="Confirmar"
                      onPress={() => handleUpdateStatus(appointment.id, 'confirmed')}
                      containerStyle={styles.actionButton as ViewStyle}
                      buttonStyle={styles.confirmButton}
                    />
                    <Button
                      title="Cancelar"
                      onPress={() => handleUpdateStatus(appointment.id, 'cancelled')}
                      containerStyle={styles.actionButton as ViewStyle}
                      buttonStyle={styles.cancelButton}
                    />
                  </ButtonContainer>
                )}
              </ListItem.Content>
            </AppointmentCard>
          ))
        )}

        {/* Botão de Logout */}
        <Button
          title="Sair"
          onPress={signOut}
          containerStyle={styles.button as ViewStyle}
          buttonStyle={styles.logoutButton}
        />
      </ScrollView>
    </Container>
  );
};

export default DoctorDashboardScreen;
