import React from 'react'
import styled from 'styled-components'
import config from '../config'

const CopyText = styled.p`
  margin-top: 2rem;
  text-align: center;

  small {
    color: #fff;
  }
`

const Copy = () => {
  return (
    <CopyText>
      <small>(c) 2018 {config.title}</small>
    </CopyText>
  )
}

export { Copy }
