import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { ContainerMenu, User, Username } from './UserMenu.styled';
import Button from 'components/Button';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <ContainerMenu>
      <User>
        <Username>{user.name}</Username>
      </User>
      <Button type="button" onClick={() => dispatch(logout())}>
        Logout
      </Button>
    </ContainerMenu>
  );
};
