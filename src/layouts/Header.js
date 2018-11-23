import React from 'react'
import { GlobalNav } from '../components/GlobalNav'

export const Header = () => {
  return (
    <div className="global-header">
      <div style={{ textAlign: 'right' }}>
        <GlobalNav />
      </div>
    </div>
  )
}
