import React from 'react'
import styled from 'styled-components'
import { Container } from '../components/style/layout'
import { GlobalNav } from '../components/GlobalNav'

export const Header = () => {
  return (
    <HeaderContainer>
      <Container>
        <HeaderNav>
          <GlobalNav />
        </HeaderNav>
      </Container>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  padding: 1rem 0;
  border-top: 3px solid #29abe2;
`

const HeaderNav = styled.div`
  text-align: right;
`
