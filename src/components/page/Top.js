import React, { Component } from 'react'
import { Section, Container } from '../style/layout'
import { About } from '../About'
import { BlogSection as Blog } from '../Blog'
import { PortfolioSection as Portfolio } from '../Portfolio'
import { FooterSection } from '../../layouts/Footer'

const Top = () => {
  return (
    <div>
      <Section>
        <Container>
          <About />
        </Container>
      </Section>
      <Section primary>
        <Container>
          <Portfolio />
        </Container>
      </Section>
      <Section>
        <Container>
          <Blog />
        </Container>
      </Section>
      <FooterSection />
    </div>
  )
}

export default Top
