import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const GlobalNav = () => {
  return (
    <nav>
      <GlobalNavContainer>
        <NavLink exact to="/">
          Top
        </NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/blog">Blog</NavLink>
      </GlobalNavContainer>
    </nav>
  )
}

const GlobalNavContainer = styled.div`
  a {
    margin: 0 1%;
    padding: 4px 0;
    transition: color 0.2s ease-out 0s;
    font-weight: 500;
    font-size: 18px;
    color: #255255;

    @media (max-width: 768px) {
      margin: 0 3%;
    }

    &:hover {
      text-decoration: none;
      color: #8c8c8c;
    }

    &.active {
      border-bottom: 2px solid #29abe2;
    }
  }
`
