// src/screens/DoctorDashboardScreen/hooks/useDoctorDashboard.ts
import { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from '../../../contexts/AuthContext';

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

export const useDoctorDashboard = () => {
  const { user, signOut } = useAuth();
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);

  /**
   * Carrega consultas do AsyncStorage e filtra apenas as do médico logado
   */
  const loadAppointments = useCallback(async () => {
    try {
      const stored = await AsyncStorage.getItem('@MedicalApp:appointments');
      if (stored) {
        const allAppointments: Appointment[] = JSON.parse(stored);
        const doctorAppointments = allAppointments.filter(
          appointment => appointment.doctorId === user?.id
        );
        setAppointments(doctorAppointments);
      } else {
        setAppointments([]);
      }
    } catch (err) {
      console.error('Erro ao carregar consultas:', err);
    } finally {
      setLoading(false);
    }
  }, [user?.id]);

  /**
   * Atualiza o status de uma consulta
   */
  const handleUpdateStatus = useCallback(
    async (appointmentId: string, newStatus: AppointmentStatus) => {
      try {
        const stored = await AsyncStorage.getItem('@MedicalApp:appointments');
        if (stored) {
          const allAppointments: Appointment[] = JSON.parse(stored);
          const updated = allAppointments.map(appointment =>
            appointment.id === appointmentId
              ? { ...appointment, status: newStatus }
              : appointment
          );
          await AsyncStorage.setItem(
            '@MedicalApp:appointments',
            JSON.stringify(updated)
          );
          loadAppointments(); // Recarrega a lista atualizada
        }
      } catch (err) {
        console.error('Erro ao atualizar status:', err);
      }
    },
    [loadAppointments]
  );

  /**
   * Recarrega consultas sempre que a tela entrar em foco
   */
  useFocusEffect(
    useCallback(() => {
      loadAppointments();
    }, [loadAppointments])
  );

  return {
    appointments,
    loading,
    handleUpdateStatus,
    signOut,
  };
};
