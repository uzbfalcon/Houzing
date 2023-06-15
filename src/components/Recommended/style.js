import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: auto;
  padding: 96px 50px;
  max-width: 1440px;
  width: 100%;

  @media screen and (max-width: 768px) {
    padding: 48px 20px;
  }

  :hover {
    cursor: pointer;
  }
`;

const Content = styled.div`
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export { Container, Content };
