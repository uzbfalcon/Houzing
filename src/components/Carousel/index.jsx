import React, { useRef } from 'react';
import { Arrow, Blur, Container, Content, Img } from './style';
import { Carousel } from 'antd';

import img1 from '../../assets/img/home.png';
import img2 from '../../assets/img/home.png';

export const GetCarousel = () => {
  const slider = useRef();

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  const onMove = ({
    target: {
      dataset: { name },
    },
  }) => {
    if (name === 'left') slider.current.next();
    if (name === 'right') slider.current.prev();
  };

  return (
    <Container>
      <Carousel ref={slider} afterChange={onChange}>
        <Img src={img1} />
        <Img src={img2} />
        <Img src={img1} />
        <Img src={img2} />
      </Carousel>
      <Blur />
      <Content>
        <Content.Title>Skyper Pool Partment</Content.Title>
        <Content.Desc className='subChild'>
          112 Glenwood Ave Hyde Park, Boston, MA
        </Content.Desc>
        <Content.Price>5,250 / month</Content.Price>
      </Content>
      <Arrow data-name='left' onClick={onMove} left />
      <Arrow data-name='right' onClick={onMove} name='right' />
    </Container>
  );
};

export default GetCarousel;