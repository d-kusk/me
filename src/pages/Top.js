import React from 'react'
import { Section, Container } from '../components/style/layout'
import { About } from '../components/About'
import { BlogSection as Blog } from '../components/Blog'
import { PortfolioSection as Portfolio } from '../components/Portfolio'
import { FooterSection } from '../layouts/Footer'

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
