import { useAuth } from 'hooks';
import { NaviList, NaviItem } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NaviList>
      <NaviItem to="/">
        <span>Home</span>
      </NaviItem>
      {isLoggedIn && <NaviItem to="/contacts">Contacts</NaviItem>}
    </NaviList>
  );
};
