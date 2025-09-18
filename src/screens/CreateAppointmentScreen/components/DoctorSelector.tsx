// src/screens/CreateAppointmentScreen/components/DoctorSelector.tsx
import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import DoctorList from '../../../components/DoctorList';
import { Doctor } from '../hooks/useCreateAppointment';
import theme from '../../../styles/theme';

type DoctorSelectorProps = {
  doctors: Doctor[];
  loading: boolean;
  selectedDoctor: Doctor | null;
  onSelect: (doctor: Doctor) => void;
};

const DoctorSelector: React.FC<DoctorSelectorProps> = ({
  doctors,
  loading,
  selectedDoctor,
  onSelect,
}) => {
  if (loading) {
    return (
      <View style={{ padding: 16, alignItems: 'center' }}>
        <ActivityIndicator size="small" color={theme.colors.primary} />
      </View>
    );
  }

  return (
    <DoctorList
      doctors={doctors}
      selectedDoctorId={selectedDoctor?.id}
      onSelectDoctor={onSelect}
    />
  );
};

export default DoctorSelector;
