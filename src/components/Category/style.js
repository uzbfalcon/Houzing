import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: auto;
  padding: 96px 130px;
  max-width: 1440px;
  width: 100%;
  :hover {
    cursor: pointer;
    background-color: white;
  }

  @media (max-width: 768px) {
    padding: 48px 16px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-align: center;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`;

export { Container, Content };
