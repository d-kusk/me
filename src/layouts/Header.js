import React from 'react'
import styled from 'styled-components'
import { Container } from '../components/style/layout'

export const Header = () => (
  <HeaderContainer>
    <Container />
  </HeaderContainer>
)

const HeaderContainer = styled.div`
  padding: 1rem 0;
  border-top: 3px solid #29abe2;
`
