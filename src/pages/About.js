import React from 'react'
import styled from 'styled-components'

import config from '../config'
import Image from '../components/Image'
import { SubTitle, SubSubTitle } from '../components/style/Title'
import { Text } from '../components/style/Text'

import profileImage from '../static/image/img-profile.jpg'

const AboutWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 768px;
  margin-left: auto;
  margin-right: auto;

  .image {
    width: 40%;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 768px) {
      width: 30%;
    }
  }

  .content {
    width: 94%;
    margin: 30px auto 0;

    @media (min-width: 768px) {
      margin-top: 0;
      margin-left: 5%;
      width: 65%;
    }
  }
`
const AboutHeader = styled.header`
  margin-bottom: 1.2rem;
`

const About = () => (
  <AboutWrapper>
    <div className="image">
      <Image
        src={`${profileImage}`}
        alt={`${config.title}のプロフィール画像`}
      />
    </div>
    <div className="content">
      <AboutHeader>
        <SubTitle primary>{config.title}</SubTitle>
        <SubSubTitle>Web Enginner</SubSubTitle>
      </AboutHeader>
      <Text>1993年生まれ、京都出身で大阪在住。</Text>
      <Text>
        中学生の頃、チャットで色んな人と喋ることにハマったのをきっかけにWebに興味をもつ。
        新卒で入社した会社で大手企業サイトのマークアップからCMSの組み込み、軽度なディレクションを経験した後、今のシステム系の会社へ。
      </Text>
      <Text>
        今は主にWebのフロントエンドの開発をしていますが、最近はサーバーサイドの実装を勉強中です。
      </Text>
      <Text>Webシステムやサービスの開発、美味しいお酒に興味があります。</Text>
      <Text>
        プライベートではKansai WordPress
        Meetupをはじめ、いくつかのコミュニティに出入りしています。
      </Text>
    </div>
  </AboutWrapper>
)

export { About }
