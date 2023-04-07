import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NaviList = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: '100%';

  font-weight: 700;
`;

export const NaviItem = styled(NavLink)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 36px;
  text-decoration: none;
  color: #000;
  padding: 20px;
`;
