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
        <a
          href="https://blog.daisukekonishi.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg className="icon icon-external-link">
            <use xlinkHref="#icon-external-link" />
            <symbol id="icon-external-link" viewBox="0 0 28 28">
              <title>external-link</title>
              <path d="M22 14.5v5c0 2.484-2.016 4.5-4.5 4.5h-13c-2.484 0-4.5-2.016-4.5-4.5v-13c0-2.484 2.016-4.5 4.5-4.5h11c0.281 0 0.5 0.219 0.5 0.5v1c0 0.281-0.219 0.5-0.5 0.5h-11c-1.375 0-2.5 1.125-2.5 2.5v13c0 1.375 1.125 2.5 2.5 2.5h13c1.375 0 2.5-1.125 2.5-2.5v-5c0-0.281 0.219-0.5 0.5-0.5h1c0.281 0 0.5 0.219 0.5 0.5zM28 1v8c0 0.547-0.453 1-1 1-0.266 0-0.516-0.109-0.703-0.297l-2.75-2.75-10.187 10.187c-0.094 0.094-0.234 0.156-0.359 0.156s-0.266-0.063-0.359-0.156l-1.781-1.781c-0.094-0.094-0.156-0.234-0.156-0.359s0.063-0.266 0.156-0.359l10.187-10.187-2.75-2.75c-0.187-0.187-0.297-0.438-0.297-0.703 0-0.547 0.453-1 1-1h8c0.547 0 1 0.453 1 1z" />
            </symbol>
          </svg>
          Blog
        </a>
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

    .icon {
      display: inline-block;
      margin-right: 0.3em;
      width: 0.9em;
      height: 0.9em;
      stroke-width: 0;
      stroke: currentColor;
      fill: currentColor;
    }
  }
`
