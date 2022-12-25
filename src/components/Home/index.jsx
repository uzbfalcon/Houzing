import React from 'react'
import GenCarousel from '../Carousel'
import HouseCard from '../HouseCard'
import { Container,CardFlex } from './styled'

export const Home = () => {
  return (
    <Container>
     <GenCarousel/>
     <CardFlex>
     <HouseCard/>

     </CardFlex>
    </Container>
  )
}
