import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  border-radius: 3px;
  max-width: 280px;
  min-width: 230px;
  max-height: 380px;
  min-height: 250px;
  margin: 50px;
  /* gap: 10px; */
  filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06));
`;

const Img = styled.img`
  width: 100%;
  border-radius: 3px;

`;



const Content = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  color: white;
  justify-content: center;
  align-items: center;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #ffffff;
`;




const Blur = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);

  border-radius: 3px;

`;

const Icons = styled.div``


export { Container, Img, Content, Blur,Icons };