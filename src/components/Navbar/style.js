import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as logoImg } from '../../assets/icons/Vector.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Main = styled.div`
  display: flex;
  justify-content: center;
  background: var(--colorPrimary);
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #ffff;
  padding: var(--padding);
  height: 64px;
  font-size: 16px;
  width: 100%;
  max-width: 1440px;
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  cursor: ${({ logo }) => logo && 'pointer'};
  .active {
    color: #b8ff06;
    text-shadow:  1px 1px 3px  #b8ff06;

  }
  
`;

const Logo = styled(logoImg)`
  width: 30px;
  margin-right: 12px;
  & path {
    fill: #ffff;
  }
`;

const Link = styled(NavLink)`
  text-decoration: none;
  padding: 0 32px;
  color: #ffff;
  :hover{
    color: #0061DF;
    text-shadow:  1px 1px 6px blue;
    transition: 0.6s;
  }
`;

export { Container, Wrapper, Section, Logo, Link, Main };