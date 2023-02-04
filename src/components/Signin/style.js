import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  width: 100%;
  background: #e6e9ec;

`;

const Content = styled.div`
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  width: 100%;
  max-width: 580px;
  background: white;
  border: 1px solid #E6E9EC;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
  padding: 30px;
  margin: 64px;
  gap: 30px;


`


export { Container, Content };