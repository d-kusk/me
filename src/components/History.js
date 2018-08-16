import React from 'react'
import styled from 'styled-components'

const HistoryWrapper = styled.div`
  p {
    margin-bottom: 0;
  }

  .period {
    font-size: 0.8rem;
    color: #7b7b7b;
  }

  .company {
    font-weight: 600;
    font-size: 1.1rem;
    color: #2b2b2b;
  }

  .position {
    font-size: 0.8rem;
    color: #7b7b7b;
  }
`

const History = props => {
  console.log(props)

  return (
    <HistoryWrapper>
      <p className="period">{`${props.startYear} - ${props.endYear}`}</p>
      <p className="company">{props.company}</p>
      <p className="position">{props.position}</p>
    </HistoryWrapper>
  )
}

export default History
