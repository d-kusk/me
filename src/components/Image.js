import React from 'react'
import styled from 'styled-components'

const ImageWrapper = styled.div`
  img {
    width: 100%;
  }
`

const Image = props => {
  return (
    <ImageWrapper>
      <img src={props.src} alt={props.alt} />
    </ImageWrapper>
  )
}

export default Image
