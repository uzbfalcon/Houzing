import React, { useEffect, useState } from 'react';
import { Container,Content } from './style';
import CategoryCard from '../CategoryCard';
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
  dots: true,
  // responsive: [
  //         {
  //           breakpoint: 600,
  //           settings: {
  //             slidesToShow: 1,
  //             slidesToScroll: 1,
  //             initialSlide: 1,
  //           },
  //         },
  //         {
  //           breakpoint: 480,
  //           settings: {
  //             slidesToShow: 1,
  //             slidesToScroll: 1,
  //           },
  //         },
  //       ],

  appendDots: (dots) => <h1> {dots} </h1>,
};

export const GenCarousel = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${url}/categories/list`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || []);
      });
  }, []);

  // console.log(data);
  return (
    <Container>
       <Content>
        <h1 className='title'>Category</h1>
        <div className="info">Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</div>
      </Content>
      <Slider {...settings}>
        {data.map((value) => {
          return (
            <CategoryCard
              key={value.id}
              onClick={() => navigate(`/properties?category_id=${value.id}`)}
              data={value}
            />
          );
        })}
      </Slider>
    </Container>
  );
};

export default GenCarousel;