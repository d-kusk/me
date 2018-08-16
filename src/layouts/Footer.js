import React from 'react'
import { Footer, Container } from '../components/style/layout'
import { LinkList } from '../components/LinkList'
import { Copy } from '../components/Copy'

const FooterSection = () => {
  return (
    <Footer>
      <Container>
        <LinkList />
        <Copy />
      </Container>
    </Footer>
  )
}

export { FooterSection }
