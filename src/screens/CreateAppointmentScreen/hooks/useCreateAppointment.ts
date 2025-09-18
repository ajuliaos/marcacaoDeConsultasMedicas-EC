// hooks/useCreateAppointment.ts



import { useState, useCallback, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { Appointment } from '../../../types/appointments';
import { User } from '../../../types/auth';
import { useAuth } from '../../../contexts/AuthContext';
import { authApiService } from '../../../services/authApi';
export type AppointmentStatus = 'pending' | 'confirmed' | 'cancelled';

export interface Appointment {
  id: string;
  patientId: string;
  patientName: string;
  doctorId: string;
  doctorName: string;
  date: string;
  time: string;
  specialty: string;
  status: AppointmentStatus;
}

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  image: string;
}

export const useCreateAppointment = (onSuccess?: () => void) => {
  const { user } = useAuth();

  const [date, setDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [doctors, setDoctors] = useState<User[]>([]);
  const [loadingDoctors, setLoadingDoctors] = useState(true);

  const loadDoctors = useCallback(async () => {
    try {
      setLoadingDoctors(true);
      setError('');
      const doctorsData = await authApiService.getAllDoctors();
      setDoctors(doctorsData);
    } catch (err) {
      setError('Erro ao carregar médicos. Usando cache local...');
      // fallback: tenta novamente ou pega de storage se existir
    } finally {
      setLoadingDoctors(false);
    }
  }, []);

  useEffect(() => {
    loadDoctors();
  }, [loadDoctors]);

  const convertUsersToDoctors = useCallback((users: User[]): Doctor[] => {
    return users.map(u => ({
      id: u.id,
      name: u.name,
      specialty:
        u.role === 'doctor' && 'specialty' in u ? (u as any).specialty : 'Não informado',
      image: u.image,
    }));
  }, []);

  const handleCreateAppointment = useCallback(async () => {
    try {
      setLoading(true);
      setError('');

      if (!date || !selectedTime || !selectedDoctor) {
        setError('Preencha todos os campos antes de continuar');
        return;
      }

      const stored = await AsyncStorage.getItem('@MedicalApp:appointments');
      const appointments: Appointment[] = stored ? JSON.parse(stored) : [];

      const newAppointment: Appointment = {
        id: Date.now().toString(),
        patientId: user?.id || '',
        patientName: user?.name || '',
        doctorId: selectedDoctor.id,
        doctorName: selectedDoctor.name,
        date,
        time: selectedTime,
        specialty: selectedDoctor.specialty,
        status: 'pending',
      };

      appointments.push(newAppointment);
      await AsyncStorage.setItem('@MedicalApp:appointments', JSON.stringify(appointments));

      onSuccess?.();
    } catch (err) {
      setError('Erro ao agendar consulta. Tente novamente.');
    } finally {
      setLoading(false);
    }
  }, [date, selectedTime, selectedDoctor, user, onSuccess]);

  return {
    date, setDate,
    selectedTime, setSelectedTime,
    selectedDoctor, setSelectedDoctor,
    loading, error,
    doctors, loadingDoctors,
    convertUsersToDoctors,
    handleCreateAppointment,
  };
};
