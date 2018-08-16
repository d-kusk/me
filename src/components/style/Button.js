import React from 'react'
import styled from 'styled-components'

const ButtonStyle = styled.div`
  text-align: center;
  a {
    display: inline-block;
    padding: 6px 40px;
    background-color: #29abe2;
    transition: 0.2s ease-out 0s;
    color: #fff;

    &:hover {
      text-decoration: none;
      opacity: 0.6;
    }
  }
`

const Button = props => {
  return (
    <ButtonStyle>
      <a href={props.href} target={props.blank ? '_blank' : 'self'}>
        {props.children}
      </a>
    </ButtonStyle>
  )
}

export { Button }
