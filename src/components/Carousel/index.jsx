import React, { useRef } from 'react'
import { Carousel } from 'antd'
import { Arrow, Container } from './style'

const contentStyle = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

export const GenCarousel = () => {
    const slider = useRef()



    const onMove = ({ target: {
        dataset: { name },
    },
    }) => {
        if (name === 'right') slider.current.next();
        if (name === 'left') slider.current.prev();
    };



    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    return (
        <Container>
            <Arrow data-name='left' onClick={onMove} left />
            <Carousel ref={slider} afterChange={onChange}>
                <div>
                    <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>4</h3>
                </div>
            </Carousel>
            <Arrow data-name='right' onClick={onMove} name='right' />
        </Container>
    )
}


export default GenCarousel