import React, { Component } from 'react'
import styled from 'styled-components'

const LinkListWrapper = styled.ul`
  list-style-type: none;
  padding-left: 0;
  margin-bottom: 0;
  text-align: center;
`

const LinkListItem = styled.li`
  display: inline-block;

  & + & {
    margin-left: 1.6em;
  }

  a {
    color: #fff;
  }
`

const Link = props => {
  return (
    <LinkListItem>
      <a href={props.url} target="_blank">
        {props.label}
      </a>
    </LinkListItem>
  )
}

class LinkList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      Link: [
        {
          label: 'Twitter',
          url: 'https://twitter.com/skd_nw'
        },
        {
          label: 'Github',
          url: 'https://github.com/d-kusk'
        },
        {
          label: 'Blog',
          url: 'https://blog.daisukekonishi.com'
        },
        {
          label: 'SpeakerDeck',
          url: 'https://speakerdeck.com/dkonishi'
        }
      ]
    }
  }

  render() {
    return (
      <LinkListWrapper>
        {this.state.Link.map((item, index) => {
          return <Link key={index} label={item.label} url={item.url} />
        })}
      </LinkListWrapper>
    )
  }
}

export { LinkList }
