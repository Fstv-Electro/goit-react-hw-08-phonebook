import { NavItem } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <NavItem to="/register">Register</NavItem>
      <NavItem to="/login">Log In</NavItem>
    </div>
  );
};
