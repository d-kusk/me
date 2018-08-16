import React, { Component } from 'react'
import config from '../config'
import styled from 'styled-components'
import RSSParser from 'rss-parser'
import { Button } from './style/Button'
import { SubTitle } from './style/Title'
import DateUtility from '../utility/Date'

const BlogArea = styled.div`
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;

  header h2 {
    text-align: center;
  }

  .body,
  .footer {
    margin-top: 2rem;
  }
`

const BlogList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
`

const BlogItem = styled.li`
  width: 33%;
  padding: 1% 2%;

  & + & {
    border-left: 2px solid #d5d5d5;
  }
  a {
    text-decoration: none;
  }

  .title {
    line-height: 1.6em;
    margin-bottom: 0;
    font-size: 1rem;
    color: #29abe2;
  }

  .pubtime {
    font-size: 0.8rem;
    color: #7b7b7b;
  }
`

const Blog = props => {
  const blog = props.blog
  return (
    <BlogItem>
      <a href={blog.link} target="_blank">
        <p className="title">{blog.title}</p>
        <p className="pubtime">
          <time>{blog.time}</time>
        </p>
      </a>
    </BlogItem>
  )
}

class BlogSection extends Component {
  constructor(props) {
    super(props)    
    this.parser = new RSSParser()

    this.state = {
      articles: [
        // {
        //   title: 'Test Title',
        //   link: 'Link',
        //   time: 'Sun, 12 Aug 2018 00:28:57 +0900'
        // },
        // {
        //   title: 'Test Title',
        //   link: 'Link',
        //   time: 'Sun, 12 Aug 2018 00:28:57 +0900'
        // },
        // {
        //   title: 'Test Title',
        //   link: 'Link',
        //   time: 'Sun, 12 Aug 2018 00:28:57 +0900'
        // }
      ]
    }
  }

  componentDidMount() {
    this.fetchRSS()
  }

  fetchRSS() {
    // https://www.npmjs.com/package/rss-parser
    const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'
    const RSS_URL = 'https://blog.daisukekonishi.com/index.xml'
    let articles = []
    const numberOfArticles = 3
    this.parser.parseURL(`${CORS_PROXY}${RSS_URL}`, (error, feed) => {
      if (error) {
        console.warn(error)
      }

      for (const index in feed.items) {
        let feedItem = {}
        feedItem.title = feed.items[index].title
        feedItem.link = feed.items[index].link
        feedItem.time = DateUtility.formatToPubdate(feed.items[index].pubDate)
        articles.push(feedItem)

        if (articles.length >= numberOfArticles) {
          break
        }
      }

      this.setState({
        articles: articles
      })
    })
  }

  render() {
    return (
      <BlogArea>
        <header>
          <SubTitle>Blog</SubTitle>
        </header>
        <div className="body">
          {this.state.articles.length > 0 ? (
            <BlogList>
              {this.state.articles.map((blog, index) => {
                return <Blog key={index} blog={blog} />
              })}
            </BlogList>
          ) : (
            <p>データの取得に失敗しました</p>
          )}
        </div>
        <div className="footer">
          <Button href={config.BASE_URL} blank>
            View More
          </Button>
        </div>
      </BlogArea>
    )
  }
}

export { BlogSection }
