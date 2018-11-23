import React from 'react'
import { NavLink } from 'react-router-dom'

export const GlobalNav = () => {
  return (
    <nav>
      <NavLink to="/">Top</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/blog">Blog</NavLink>
    </nav>
  )
}
