import React from 'react'
import { Input } from '../Generic/input'
import { Container } from './styled'

export const Home = () => {
  return (
    <Container>
      <h1>Home</h1>
      <Input width={100} placeholder={'test'}/>
    </Container>
  )
}
