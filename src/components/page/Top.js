import React, { Component } from 'react'
import { Section, Container } from '../style/layout'
import { About } from '../About'
import { BlogSection } from '../Blog'
import { FooterSection } from '../../layouts/Footer'

const Top = () => {
  return (
    <div>
      <Section>
        <Container>
          <About />
        </Container>
      </Section>
      <Section secondary>
        <Container>
          <BlogSection />
        </Container>
      </Section>
      <FooterSection />
    </div>
  )
}

export default Top
