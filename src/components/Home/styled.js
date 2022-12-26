import styled from "styled-components";

const Container = styled.div`
    /* display: flex; */
    /* flex-direction: row;  */
`

const CardFlex = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
    margin: 30px 20px 30px 80px;
`


export{Container,CardFlex}