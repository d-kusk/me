import React, { Component } from 'react'
import styled from 'styled-components'
import { SubTitle, SubSubTitle } from './style/Title'
import { Text } from './style/Text'

import hugoGentooTheme from '../static/image/img-hugo-gentoo-theme.png'
import hugoMinimage from '../static/image/img-hugo-minimage.png'
import mealselect from '../static/image/img-mealselect.png'

const PortfolioArea = styled.div`
  max-width: 1024px;
  margin-right: auto;
  margin-left: auto;

  .header {
    text-align: center;
  }

  .body {
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2rem;
  }
`

const WorksList = styled.ul`
  list-style-type: none;
  padding-left: 0;
`

const WorksListItem = styled.li`
  & + & {
    margin-top: 10px;
  }
`

const PortfolioCard = styled.div`
  a {
    display: flex;
    flex-wrap: wrap;
    background-color: #fff;
    text-decoration: none;
    transition: 0.2s ease-out 0s;

    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0px 18px 10px #0c82b4;
    }
  }

  .image {
    width: 36%;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }

  .content {
    align-items: center;
    width: 64%;
    padding: 2.6em 2.4em;
  }
`

const Portfolio = props => {
  const model = props.model
  return (
    <PortfolioCard>
      <a href={model.link}>
        <div className="image" style={{backgroundImage: `url(${model.file})`}}>
        </div>
        <div className="content">
          <SubSubTitle>{model.title}</SubSubTitle>
          <Text>{model.description}</Text>
        </div>
      </a>
    </PortfolioCard>
  )
}

class PortfolioSection extends Component {
  constructor(props) {
    super(props)

    this.state = {
      portfolios: [
        {
          title: 'hugo-gentoo-theme',
          description:
            'Hugoのテンプレートテーマです。JSON-LDやGoogle Analyticsのコード生成ができるのが特徴です。',
          link: 'https://github.com/d-kusk/hugo-gentoo-theme',
          file: hugoGentooTheme
        },
        {
          title: 'minimage',
          description:
            'Hugoのテンプレートテーマ。サムネイルやグローバルナビなどの設定ができるのが特徴です。',
          link: 'https://github.com/d-kusk/minimage',
          file: hugoMinimage
        },
        {
          title: 'MealSelect',
          description:
            '「今日のごはんどうしよう」を考える手助けをしてくれるレコメンドアプリ。設計から実装まで行いました。',
          link: 'https://mealselect.daisukekonishi.com',
          file: mealselect
        }
      ]
    }
  }

  render() {
    return (
      <PortfolioArea>
        <header className="header">
          <SubTitle>Portfolio</SubTitle>
          <Text>これまで自主的に制作したものです</Text>
        </header>
        <div className="body">
          <WorksList>
            {this.state.portfolios.map((portfolio, index) => {
              return (
                <WorksListItem key={index}>
                  <Portfolio model={portfolio} />
                </WorksListItem>
              )
            })}
          </WorksList>
        </div>
      </PortfolioArea>
    )
  }
}

export { PortfolioSection }
