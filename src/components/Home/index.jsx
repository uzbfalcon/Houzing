import React from 'react'
import Carousel from '../Carousel'
import Recommmended from '../Recommended'
import Why from '../Why'
import Recent from '../Recent'
import Banner from '../Banner'
import Category from '../Category'
import { Container } from './styled'
import Error from '../error'

export const Home = () => {
  
  return (
    <Container>
      <Error/>
      <Carousel />
      <Recommmended />
      <Why />
      <Category />
      <Banner/>
      <Recent />
    </Container>
  )
}
