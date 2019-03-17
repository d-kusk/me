import React from 'react'
import styled from 'styled-components'

import { Text } from './style/Text'
import { SubSubTitle } from './style/Title'

export const WorkItem = ({ model }) => (
  <Card>
    <a href={model.link} target={'_blank'} rel="noopener noreferrer">
      <div
        className="image"
        style={{ backgroundImage: `url(${model.file})` }}
      />
      <div className="content">
        <div className="content-header">
          <SubSubTitle>{model.title}</SubSubTitle>
          <Tags>
            {model.tags.map((tag, index) => {
              return (
                <div className="tag" key={index}>
                  {tag}
                </div>
              )
            })}
          </Tags>
        </div>
        <div className="content-body">
          <Text>{model.description}</Text>
        </div>
      </div>
    </a>
  </Card>
)

const Card = styled.div`
  position: relative;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.2);

  a {
    display: block;

    &:hover {
      text-decoration: none;
    }
  }

  .image {
    width: 100%;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;

    &::after {
      content: '';
      display: block;
      padding-top: 60%;
    }
  }

  .content {
    width: 100%;
    align-items: center;
    padding: 1em;

    p {
      margin-bottom: 0;
    }
  }

  .content-header {
    h3 {
      margin-bottom: 0;
    }
    & + * {
      margin-top: 0.6em;
    }
  }
`

const Tags = styled.div`
  .tag,
  &::before {
    display: inline-block;
    vertical-align: middle;
  }

  .tag {
    font-size: 0.9em;
    color: #7b7b7b;

    &::before {
      content: '#';
    }

    & + .tag {
      margin-left: 0.5em;
    }
  }
`
