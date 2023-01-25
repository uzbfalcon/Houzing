import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: auto;
  padding: 96px 130px;
  max-width: 1440px;
  width: 100%;
  :hover{
    cursor: pointer;
  }
  margin-top: 96px;
`;

const Content = styled.div`
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`


export { Container, Content };