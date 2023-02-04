import styled from "styled-components";


const getType = ({ type }) => {
    switch (type) {
        case 'dark':
            return {
                background: 'transparent',
                border: '1px solid #FFFFFF',
                color: '#FFFFFF'
            };
        case 'light':
            return {
                background: '#FFFFFF',
                border: '1px solid #E6E9EC',
                color: '#0D362B'
            };
        case 'primary':
            return {
                background: '#0061DF',
                border: 'none',
                color: '#FFFFFF'
            };

        default:
            return {
                background: '#0061DF',
                border: 'none',
                color: '#FFFFFF'
            }
    }
}
const getWidth = ({width}) => {
    if (!width) return '130px';
    else if (`${width}`.includes('%')) {
        return '100%';
    }
    else return `${width}px`
}


const Container = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 120px;

    font-size: 14px;
    font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : '14px')};
    height: ${({ height }) => (height ? `${height}px` : '44px')};
    width: ${getWidth};
    border-radius:2px ;
    cursor: pointer;
    :active{
        opacity:0.7;
    }
    ${getType}
`

export { Container }