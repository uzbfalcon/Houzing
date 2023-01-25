import styled from 'styled-components';
import { ReactComponent as email } from '../../assets/icons/cardMasage.svg'
import { ReactComponent as cardHouse } from '../../assets/icons/cardHouse.svg'
import { ReactComponent as calculator } from '../../assets/icons/cardCalculator.svg'
import { ReactComponent as cardMaps } from '../../assets/icons/cardMap.svg'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  margin: auto;
  width: 100%;
  :hover{
    cursor: pointer;
  }
  margin-top: 96px;
  background: #f5f7fc;
  padding: 48px 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 235px;
  width: 100%;
  text-align: center;
  `;
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1440px;
  padding: 0px 130px;
  align-items: center;
  justify-content: space-around;
  margin-top: 40px;
  /* height: 434px; */
`;

const Icon = styled.div``
Icon.Email = styled(email)`
  margin-bottom: 24px;
  & path {
    fill: #0061df;
  }
`;
Icon.House = styled(cardHouse)`
  margin-bottom: 24px;
`;
Icon.Calculator = styled(calculator)`
  margin-bottom: 24px;
`;
Icon.Maps = styled(cardMaps)`
  margin-bottom: 24px;
`;





export { Container, Content, Wrapper, Icon };