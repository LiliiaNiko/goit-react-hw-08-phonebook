import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { logOut } from 'redux/auth/operations';
import { UserMenuContainer, Button, UserName } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserMenuContainer>
      <UserName>Welcome, {user.name}</UserName>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </UserMenuContainer>
  );
};
