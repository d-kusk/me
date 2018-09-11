import React, { Component } from 'react'
import styled from 'styled-components'
import { BlogAction } from '../action/BlogAction'
import { Button } from './style/Button'
import { SubTitle } from './style/Title'
import { Text } from './style/Text'
import {
  SeparateSection,
  SeparateHead,
  SeparateContent
} from '../layouts/SeparateSection'

const BlogArea = styled.div``

const BlogList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
`

const BlogItem = styled.li`
  width: 100%;
  min-height: 140px;
  border: 1px solid #f1f1f1;
  transition: 0.2s ease-out 0s;

  &:hover {
    transform: translate3d(0, -3px, 0);
    box-shadow: 0px 8px 10px #d5d5d5;
  }

  @media (min-width: 768px) {
    width: 32%;
    margin-left: 0;
    margin-right: 0;
  }

  & + & {
    margin-left: 1%;

    @media (max-width: 768px) {
      margin-left: 0;
    }
  }
  > div {
    display: table;
    width: 100%;
    height: 100%;
  }
  a {
    display: table-cell;
    vertical-align: middle;
    text-decoration: none;
    padding: 0 5%;
  }

  .title {
    display: block;
    line-height: 1.6em;
    margin-bottom: 0;
    font-size: 1rem;
    color: #7b7b7b;
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
      <div>
        <a href={blog.link} target="_blank">
          <span className="title">{blog.title}</span>
          <time className="pubtime">{blog.pubDate}</time>
        </a>
      </div>
    </BlogItem>
  )
}

class BlogSection extends Component {
  constructor(props) {
    super(props)

    this.state = {
      articles: [
        // {
        //   title: 'Test Title',
        //   link: 'Link',
        //   pubDate: 'Sun, 12 Aug 2018 00:28:57 +0900'
        // },
        // {
        //   title: 'Test Title',
        //   link: 'Link',
        //   pubDate: 'Sun, 12 Aug 2018 00:28:57 +0900'
        // },
        // {
        //   title: 'Test Title',
        //   link: 'Link',
        //   pubDate: 'Sun, 12 Aug 2018 00:28:57 +0900'
        // }
      ]
    }
  }

  componentDidMount() {
    BlogAction.fetchArticle(this)
  }

  updateArticle(res) {
    if (res.query && res.query.results.item.length > 0) {
      const latestArticle = []
      const numberOfArticles = 3
      const articles = res.query.results.item.splice(0, numberOfArticles)

      articles.forEach(article => {
        const item = {}
        item.title = article.title
        item.link = article.link
        item.pubDate = this.formatDate(article.pubDate)
        latestArticle.push(item)
      })
      this.setState({
        articles: latestArticle
      })
    }
  }

  formatDate(date) {
    const Day = new Date(date)
    const year = Day.getFullYear()
    const month = Day.getMonth()
    const day = Day.getDate()
    return `${year}.${month}.${day}`
  }

  render() {
    return (
      <BlogArea>
        <SeparateSection>
          <SeparateHead>
            <header>
              <SubTitle>Blog</SubTitle>
            </header>
            <Text>
              仕事やプライベートで知ったことを備忘録として残しています。
            </Text>
            <Button href={'https://blog.daisukekonishi.com'} blank>
              Blogへ移動する
            </Button>
          </SeparateHead>
          <SeparateContent>
            <div className="body">
              {this.state.articles.length > 0 ? (
                <BlogList>
                  {this.state.articles.map((blog, index) => {
                    return <Blog key={index} blog={blog} />
                  })}
                </BlogList>
              ) : null}
            </div>
          </SeparateContent>
        </SeparateSection>
      </BlogArea>
    )
  }
}

export { BlogSection }
