import React from 'react'
import GenCarousel from '../Carousel'
import HouseCard from '../HouseCard'
import { Container } from './styled'

export const Home = () => {
  return (
    <Container>
     <GenCarousel/>
     <HouseCard/>
    </Container>
  )
}
