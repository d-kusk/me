import React from 'react'
import styled from 'styled-components'
import { Link } from './Link'

const LinkListWrapper = styled.ul`
  list-style-type: none;
  padding-left: 0;
  margin-bottom: 0;
  ${props => align(props)}
`

const align = props => {
  switch (props.align) {
    case 'center':
      return `text-align: center`
    case 'right':
      return `text-align: right`
    case 'left':
    default:
      return `text-align: left`
  }
}

export const LinkList = ({ Links, align }) => (
  <LinkListWrapper align={align}>
    {Links.map((item, index) => {
      return <Link key={index} label={item.label} url={item.url} />
    })}
  </LinkListWrapper>
)
