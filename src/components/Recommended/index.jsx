import React, { useEffect, useState } from 'react';
import { Container, Content } from './style';
import HouseCard from '../HouseCard';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';

// const { REACT_APP_BASE_URL: url } = process.env;

const settings = {
  className: 'center',
  centerMode: true,
  infinite: true,
  centerPadding: '15px',
  slidesToShow: 3,
  speed: 700,
  arrows: true,
  adaptiveHeight: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        arrows: false,
        dots: true,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        dots: true,
      },
    },
  ],
};

export const Recommended = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  // useEffect(() => {
  //   fetch(`${url}/houses/list`)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setData(res?.data || []);
  //     });
  // }, []);

  return (
    <Container>
      <Content>
        <h1 className='title'>Recommended</h1>
        <span className="info">Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</span>
      </Content>
      <Slider {...settings}>
        <HouseCard gap={20} />
        <HouseCard gap={20} />
        <HouseCard gap={20} />
        <HouseCard gap={20} />
        <HouseCard gap={20} />
        <HouseCard gap={20} />
      </Slider>
    </Container>
  );
};

export default Recommended;


{/* {data.map((value) => {
  return (
    <HouseCard
      gap={20}
      key={value.id}
      onClick={() => navigate(`/properties/${value.id}`)}
      data={value}
    />
  );
})} */}