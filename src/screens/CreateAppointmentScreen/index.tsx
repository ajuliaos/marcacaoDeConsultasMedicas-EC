// src/screens/CreateAppointmentScreen/index.tsx
import React from 'react';
import { ScrollView } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import Header from '../../components/Header';
import TimeSelector from './components/TimeSelector';
import DoctorSelector from './components/DoctorSelector';
import ErrorMessage from './components/ErrorMessage';

import { useCreateAppointment } from './hooks/useCreateAppointment';
import { RootStackParamList } from '../../types/navigation';
import { Container, Title, SectionTitle, styles } from './styles';

type NavProps = NativeStackNavigationProp<RootStackParamList, 'CreateAppointment'>;

const CreateAppointmentScreen: React.FC = () => {
  const navigation = useNavigation<NavProps>();

  const {
    date, setDate,
    selectedTime, setSelectedTime,
    selectedDoctor, setSelectedDoctor,
    doctors, loadingDoctors,
    error, loading,
    convertUsersToDoctors,
    handleCreateAppointment,
  } = useCreateAppointment(() => {
    alert('Consulta agendada com sucesso!');
    navigation.goBack();
  });

  return (
    <Container>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Title>Agendar Consulta</Title>

        {/* Input de Data */}
        <Input
          placeholder="Data (DD/MM/AAAA)"
          value={date}
          onChangeText={setDate}
          containerStyle={styles.input}
          keyboardType="numeric"
        />

        {/* Seletor de Horários */}
        <SectionTitle>Selecione um Horário</SectionTitle>
        <TimeSelector selectedTime={selectedTime} onSelect={setSelectedTime} />

        {/* Seletor de Médicos */}
        <SectionTitle>Selecione um Médico</SectionTitle>
        <DoctorSelector
          doctors={convertUsersToDoctors(doctors)}
          loading={loadingDoctors}
          selectedDoctor={selectedDoctor}
          onSelect={setSelectedDoctor}
        />

        {/* Mensagem de erro */}
        <ErrorMessage message={error} />

        {/* Botão Agendar */}
        <Button
          title="Agendar"
          onPress={handleCreateAppointment}
          loading={loading}
          containerStyle={styles.button}
          buttonStyle={styles.buttonStyle}
        />

        {/* Botão Cancelar */}
        <Button
          title="Cancelar"
          onPress={() => navigation.goBack()}
          containerStyle={styles.button}
          buttonStyle={styles.cancelButton}
        />
      </ScrollView>
    </Container>
  );
};

export default CreateAppointmentScreen;
