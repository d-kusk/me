import React from 'react'
import { Section, Container } from '../components/style/layout'
import { Header } from './Header'
import { Footer } from './Footer'

export const Layout = props => {
  return (
    <div>
      <Header />
      <Section>
        <Container>{props.content}</Container>
      </Section>
      <Footer />
    </div>
  )
}
