import React from 'react';
import { ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';
import { useUserManagement } from './hooks/useUserManagement';
import UserCard from './components/UserCard';
import EmptyState from './components/EmptyState';
import { Container, Title, styles } from './styles';
import Header from '../../components/Header';

const UserManagementScreen: React.FC = () => {
  const navigation = useNavigation();
  const { users, loading, loadUsers, deleteUser } = useUserManagement();

  useFocusEffect(React.useCallback(() => { loadUsers(); }, [loadUsers]));

  return (
    <Container>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Title>Gerenciar Usuários</Title>

        <Button
          title="Adicionar Novo Usuário"
          onPress={() => {}}
          containerStyle={styles.button}
          buttonStyle={styles.buttonStyle}
        />

        {loading ? (
          <EmptyState text="Carregando usuários..." />
        ) : users.length === 0 ? (
          <EmptyState text="Nenhum usuário cadastrado" />
        ) : (
          users.map(user => (
            <UserCard key={user.id} user={user} onDelete={deleteUser} />
          ))
        )}

        <Button
          title="Voltar"
          onPress={() => navigation.goBack()}
          containerStyle={styles.button}
          buttonStyle={styles.backButton}
        />
      </ScrollView>
    </Container>
  );
};

export default UserManagementScreen;
