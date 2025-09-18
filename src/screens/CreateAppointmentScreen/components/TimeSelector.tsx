// src/screens/CreateAppointmentScreen/components/TimeSelector.tsx
import React from 'react';
import TimeSlotList from '../../../components/TimeSlotList';

type TimeSelectorProps = {
  selectedTime: string;
  onSelect: (time: string) => void;
};

const TimeSelector: React.FC<TimeSelectorProps> = ({ selectedTime, onSelect }) => {
  return (
    <TimeSlotList
      selectedTime={selectedTime}
      onSelectTime={onSelect}
    />
  );
};

export default TimeSelector;
