import React from 'react';
import { Button, ListItem } from 'react-native-elements';
import { User } from '../../hooks/useUserManagement';
import { getRoleText } from '../../utils/roleHelpers';
import { Container, RoleBadge, RoleText, ButtonContainer, styles } from './styles';

interface UserCardProps {
  user: User;
  onDelete: (id: string) => void;
  onEdit?: (id: string) => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, onDelete, onEdit }) => {
  return (
    <Container>
      <ListItem.Content>
        <ListItem.Title style={styles.userName}>{user.name}</ListItem.Title>
        <ListItem.Subtitle style={styles.userEmail}>{user.email}</ListItem.Subtitle>

        <RoleBadge role={user.role}>
          <RoleText role={user.role}>{getRoleText(user.role)}</RoleText>
        </RoleBadge>

        <ButtonContainer>
          <Button
            title="Editar"
            onPress={() => onEdit && onEdit(user.id)}
            buttonStyle={styles.editButton}
            containerStyle={styles.actionButton}
          />
          <Button
            title="Excluir"
            onPress={() => onDelete(user.id)}
            buttonStyle={styles.deleteButton}
            containerStyle={styles.actionButton}
          />
        </ButtonContainer>
      </ListItem.Content>
    </Container>
  );
};

export default UserCard;
