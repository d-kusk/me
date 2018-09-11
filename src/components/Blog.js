import React, { Component } from 'react'
import styled from 'styled-components'
import { BlogAction } from '../action/BlogAction'
import { Button } from './style/Button'
import { SubTitle } from './style/Title'
import { Text } from './style/Text'
import Image from './Image'
import {
  SeparateSection,
  SeparateHead,
  SeparateContent
} from '../layouts/SeparateSection'
import blogImage from '../static/image/img-blog.png'

const BlogArea = styled.div``

const BlogList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
`

const BlogItem = styled.li`
  width: 100%;

  @media (min-width: 768px) {
    width: 33%;
  }
  padding: 1% 2%;

  & + & {
    border-top: 2px solid #d5d5d5;
    @media (min-width: 768px) {
      border-top: none;
      border-left: 2px solid #d5d5d5;
    }
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
      </a>
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
        latestArticle.push(item)
      })
      this.setState({
        articles: latestArticle
      })
    }
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
            <Image src={blogImage} alt="PengNoteのスクリーンショット" />
          </SeparateContent>
        </SeparateSection>
        <div className="body">
          {this.state.articles.length > 0 ? (
            <BlogList>
              {this.state.articles.map((blog, index) => {
                return <Blog key={index} blog={blog} />
              })}
            </BlogList>
          ) : null}
        </div>
      </BlogArea>
    )
  }
}

export { BlogSection }
