// src/screens/ProfileScreen/index.tsx
import React from 'react';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import Header from '../../components/Header';
import { RootStackParamList } from '../../types/navigation';
import { useProfile } from './hooks/useProfile';
import ProfileCard from './components/ProfileCard';
import { Container, ScrollView, Title, styles } from './styles';

type NavProps = NativeStackNavigationProp<RootStackParamList, 'Profile'>;

const ProfileScreen: React.FC = () => {
  const navigation = useNavigation<NavProps>();
  const { signOut } = useProfile();

  return (
    <Container>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Title>Meu Perfil</Title>

        {/* Card com dados do usuário */}
        <ProfileCard />

        {/* Botão Voltar */}
        <Button
          title="Voltar"
          onPress={() => navigation.goBack()}
          containerStyle={styles.button}
          buttonStyle={styles.buttonStyle}
        />

        {/* Botão Sair */}
        <Button
          title="Sair"
          onPress={signOut}
          containerStyle={styles.button}
          buttonStyle={styles.logoutButton}
        />
      </ScrollView>
    </Container>
  );
};

export default ProfileScreen;
