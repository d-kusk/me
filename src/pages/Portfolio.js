import React from 'react'
import styled from 'styled-components'

import { SubTitle } from '../components/style/Title'
import { Button } from '../components/style/Button'
import { WorksList } from '../components/WorksList'

import hugoGentooTheme from '../static/image/img-hugo-gentoo-theme.png'
import hugoMinimage from '../static/image/img-hugo-minimage.png'
import mealselect from '../static/image/img-mealselect.png'

const portfolios = [
  {
    title: 'MealSelect',
    description:
      '「今日のごはんどうしよう」を考える時に助けてくれるWebアプリ。',
    link: 'https://mealselect.daisukekonishi.com',
    file: mealselect,
    tags: ['React', 'Django']
  },
  {
    title: 'minimage',
    description:
      'Hugoのテンプレートテーマ。サムネイルやグローバルナビなどの設定ができるのが特徴です。',
    link: 'https://github.com/d-kusk/minimage',
    file: hugoMinimage,
    tags: ['Hugo']
  },
  {
    title: 'hugo-gentoo-theme',
    description:
      'Hugoのテンプレートテーマです。初めて公式テーマリポジトリに申請したテーマで、JSON-LDやGoogle Analyticsのコード生成ができるのが特徴です。',
    link: 'https://github.com/d-kusk/hugo-gentoo-theme',
    file: hugoGentooTheme,
    tags: ['Hugo']
  }
]

export const Portfolio = () => (
  <PortfolioArea>
    <div className="header">
      <SubTitle>Works</SubTitle>
    </div>

    <div className="body">
      <WorksList works={portfolios} />
    </div>
    <div className="footer">
      <Button href={'https://github.com/d-kusk'} blank>
        Githubへ
      </Button>
    </div>
  </PortfolioArea>
)

const PortfolioArea = styled.div`
  .header {
    text-align: center;

    h2 {
      font-size: 3em;
    }
  }

  .body {
    width: 100%;
    margin-top: 2rem;

    @media (min-width: 768px) {
      width: 80%;
      margin-left: auto;
      margin-right: auto;
    }
  }
`
