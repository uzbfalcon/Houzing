import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  grid-gap: 20px;
  padding: var(--padding);
  max-width: 1440px;
  width: 100%;
  margin: auto;
  margin-top: 50px;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(255px, 1fr));
    padding: 0;
    margin-top: 30px;
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(255px, 1fr));
    grid-gap: 10px;
    margin-top: 20px;
    margin-left:3px
  }
`;

export { Container };
