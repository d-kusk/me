import React from 'react'
import styled from 'styled-components'

import { SubTitle } from '../components/style/Title'
import { LinkList } from '../components/LinkList'

const linkList = [
  {
    label: 'Twitter',
    url: 'https://twitter.com/skd_nw'
  },
  {
    label: 'Github',
    url: 'https://github.com/d-kusk'
  },
  {
    label: 'SpeakerDeck',
    url: 'https://speakerdeck.com/dkonishi'
  }
]

export const Contact = () => (
  <WorksArea>
    <div className="header">
      <SubTitle>Contact</SubTitle>
    </div>
    <div className="body">
      <LinkList Links={linkList} align={'center'} />
    </div>
  </WorksArea>
)

const WorksArea = styled.div`
  .header {
    text-align: center;

    h2 {
      font-size: 3em;
    }
  }

  .body {
    width: 100%;
    margin-top: 2rem;

    @media (min-width: 768px) {
      width: 80%;
      margin-left: auto;
      margin-right: auto;
    }
  }
`
