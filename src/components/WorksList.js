import React from 'react'
import styled from 'styled-components'

import { WorkItem } from './Work'

export const WorksList = ({ works }) => (
  <List>
    {works.map((work, index) => {
      return (
        <Item key={index}>
          <WorkItem model={work} />
        </Item>
      )
    })}
  </List>
)

const List = styled.ul`
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  list-style-type: none;
  padding-left: 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const Item = styled.li`
  display: flex;
  width: 28%;
  margin: 2%;
  border: 1px solid #d6d6d6;
  border-radius: 3px;

  @media (max-width: 768px) {
    width: 96%;
    margin: 4% 2%;
  }
`
