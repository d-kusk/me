import React from 'react'
import { Section, Container } from '../components/style/layout'
import { About } from './About'
import { Portfolio } from './Portfolio'
import { Contact } from './Contact'
import { Layout } from '../layouts/Layout'

export const Index = () => (
  <Layout>
    <Section>
      <Container>
        <About />
      </Container>
    </Section>

    <Section>
      <Container>
        <Portfolio />
      </Container>
    </Section>

    <Section>
      <Container>
        <Contact />
      </Container>
    </Section>
  </Layout>
)
