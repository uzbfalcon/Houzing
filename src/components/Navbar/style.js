import React from 'react';
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
  position: sticky;
  top: 0;
  z-index: 44;
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

  @media (max-width: 768px) {
    flex-wrap: wrap;
    padding: 10px;
    height: auto;

    .center {
      margin: auto;
    }
  }
  
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  cursor: ${({ logo }) => logo && 'pointer'};
  margin-right: 20px;

  .active {
    color: #b8ff06;
    text-shadow: 1px 1px 3px #b8ff06;
  }

  @media (max-width: 768px) {
    margin: 10px 0;
    ${({ hideOnMobile }) => hideOnMobile && 'display: none;'}
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
  padding: 0 10px;
  color: #ffff;
  :hover {
    color: #0061df;
    text-shadow: 1px 1px 6px blue;
    transition: 0.6s;
  }
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  padding: 16px;
  gap: 16px;
  border-radius: 5px;
  box-shadow: 0px 20px 38px rgba(0, 0, 0, 0.06),
    0px 7px 46px rgba(0, 0, 0, 0.06), 0px 8px 15px rgba(0, 0, 0, 0.06);
`;

Menu.Item = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
  color: #000000;
`;


export { Container, Wrapper, Section, Logo, Link, Main, Menu };
