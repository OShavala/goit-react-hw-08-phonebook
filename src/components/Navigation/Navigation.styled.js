import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NavAuthBox = styled.div`
  display: flex;
  gap: 25px;
`;

export const Nav = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  font-size: 25px;


  &:hover,
  &:focus {
    color: rgb(57, 23, 23);
  }

  &.active {
    color: rgb(57, 23, 23);
  }
`;
