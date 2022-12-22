import styled from "styled-components";
import { ReactComponent as arrow } from '../../assets/icons/arrowright.svg'



const Container = styled.div`
    height: 471px;
    border: 1px solid red;
    position: relative;
`

const Arrow = styled(arrow)`
    width: 50px;
    height: 50px;
    padding: 18px;
    background: rgba(0,0,0,0.4);
    border-radius: 50%;
    position: absolute;
    top: 50%;
    transform: ${({ left }) =>  left ? 'rotate(360deg)' : 'rotate(180deg)' };
    right: ${({ left }) =>  !left && '20px' };
    left: ${({ left }) =>  left && '20px' };
    cursor: pointer;
    :hover{
        opacity: 0.7;
    }

`


export { Container, Arrow }