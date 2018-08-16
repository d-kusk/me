import React, { Component } from 'react'
import styled from 'styled-components'
import config from '../config'
import Image from './Image'
import History from './History'
import { SubTitle, SubSubTitle } from './style/Title'
import { Text } from './style/Text'
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

const HistoryList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  margin-top: 2rem;
`

const HistoryListItem = styled.li`
  & + & {
    margin-top: 1rem;
  }
`

class About extends Component {
  constructor(props) {
    super(props)

    this.state = {
      histories: [
        {
          startYear: '2017.10',
          endYear: '',
          company: 'coroutine inc.',
          position: 'Web Enginner'
        },
        {
          startYear: '2016.04',
          endYear: '2017.10',
          company: 'FICC inc. Kyoto',
          position: 'Markup Engineer'
        },
        {
          startYear: '2014.10',
          endYear: '2014.11',
          company: 'CLUB ENER inc.',
          position: 'Designer & Markup (Internship)'
        }
      ]
    }
  }

  render() {
    return (
      <AboutWrapper>
        <div className="image">
          <Image
            src={`${profileImage}`}
            alt={`${config.title}のプロフィール画像`}
          />
        </div>
        <div className="content">
          <AboutHeader>
            <SubTitle>{config.title}</SubTitle>
            <SubSubTitle>Web Enginner</SubSubTitle>
          </AboutHeader>
          <Text>'93年生まれ、京都出身、大阪在住。</Text>
          <Text>
            マークアップからWebのシステム開発までやっています。
            <br />
            コンポーネントを意識した実装を心がけています。
          </Text>
          <Text>
            プライベートではKansai WordPress
            Meetupをはじめ、色々活動しています。
          </Text>

          <HistoryList>
            {this.state.histories.map((history, index) => {
              console.log(index, history)

              return (
                <HistoryListItem key={index}>
                  <History
                    startYear={history.startYear}
                    endYear={history.endYear}
                    company={history.company}
                    position={history.position}
                  />
                </HistoryListItem>
              )
            })}
          </HistoryList>
        </div>
      </AboutWrapper>
    )
  }
}

export { About }
