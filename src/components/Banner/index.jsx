import React from 'react';
import { Blur, Container, Content, Img } from './style';
import { Button } from '../Generic'

import img1 from '../../assets/img/photo1.jpg';

export const GetCarousel = () => {



  return (
    <Container>
      <Img src={img1} />

      <Blur />
      <Content>
        <Content.Title>Vermont Farmhouse With Antique Jail Is the Week's Most Popular Home</Content.Title>

        <Button>Read More</Button>
      </Content>
    </Container>
  );
};

export default GetCarousel;