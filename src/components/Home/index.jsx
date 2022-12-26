import React from 'react'
import GenCarousel from '../Carousel'
import HouseCard from '../HouseCard'
import CategoryCard from '../CategoryCard'
import { Container,CardFlex } from './styled'

export const Home = () => {
  return (
    <Container>
     <GenCarousel/>
     <CardFlex>
     </CardFlex>
     <HouseCard/>
     <CategoryCard/>

    </Container>
  )
}
