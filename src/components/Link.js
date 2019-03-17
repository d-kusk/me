import React from 'react'
import styled from 'styled-components'

export const Link = ({ label, url }) => (
  <LinkListItem>
    <a href={url} target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  </LinkListItem>
)

const LinkListItem = styled.li`
  display: inline-block;

  & + & {
    margin-left: 1em;
  }

  a {
    color: #7b7b7b;
  }
`
