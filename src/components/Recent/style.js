import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: auto;
  padding: 0px 130px;
  max-width: 1440px;
  width: 100%;
  :hover {
    cursor: pointer;
  }

  @media (max-width: 1200px) {
    padding: 0px 60px;
  }

  @media (max-width: 768px) {
    padding: 0px 16px;
  }
`;

const Content = styled.div`
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`;

export { Container, Content };
