import React from 'react'
import Carousel from '../Carousel'
import Recommmended from '../Recommended'
import Why from '../Why'
import Recent from '../Recent'
import Banner from '../Banner'
import Category from '../Category'
import { Container } from './styled'

export const Home = () => {
  
  return (
    <Container>
      <Carousel />
      <Recommmended />
      <Why />
      <Category />
      <Banner/>
      <Recent />
    </Container>
  )
}
