import React, { useEffect, useState } from 'react';
import { Container, Content } from './style';
import HouseCard from '../HouseCard';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';

const { REACT_APP_BASE_URL: url } = process.env;

const settings = {
  className: 'center',
  centerMode: true,
  infinite: true,
  centerPadding: '15px',
  slidesToShow: 3,
  speed: 700,
  arrows: true,
  adaptiveHeight: false,
  dots: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        arrows: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        arrows: false,
      },
    },
  ],
  // appendDots: (dots) => <h1> {dots} </h1>,
};

export const Recommended = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  return (
    <Container>
      <Content>
        <h1 className='title'>Recent Properties for Rent</h1>
        <span className="info">Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</span>
      </Content>
      <Slider {...settings}>
        <HouseCard gap={20} />
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


  // useEffect(() => {
  //   fetch(`${url}/houses/list`)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setData(res?.data || []);
  //     });
  // }, []);

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