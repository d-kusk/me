import React, { Component } from 'react'
import styled from 'styled-components'
import { BlogAction } from '../action/BlogAction'
import { Button } from './style/Button'
import { SubTitle } from './style/Title'
import { Text } from './style/Text'
// import DateUtility from '../utility/Date'

const BlogArea = styled.div`
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;

  header h2,
  header p {
    text-align: center;
  }

  .body,
  .footer {
    margin-top: 2rem;
  }
`

// const BlogList = styled.ul`
//   list-style-type: none;
//   padding-left: 0;
//   display: flex;
//   flex-wrap: wrap;
// `

// const BlogItem = styled.li`
//   width: 100%;

//   @media (min-width: 768px) {
//     width: 33%;
//   }
//   padding: 1% 2%;

//   & + & {
//     border-top: 2px solid #d5d5d5;
//     @media (min-width: 768px) {
//       border-top: none;
//       border-left: 2px solid #d5d5d5;
//     }
//   }
//   a {
//     text-decoration: none;
//   }

//   .title {
//     line-height: 1.6em;
//     margin-bottom: 0;
//     font-size: 1rem;
//     color: #29abe2;
//   }

//   .pubtime {
//     font-size: 0.8rem;
//     color: #7b7b7b;
//   }
// `

// const Blog = props => {
//   const blog = props.blog
//   return (
//     <BlogItem>
//       <a href={blog.link} target="_blank">
//         <p className="title">{blog.title}</p>
//         <p className="pubtime">
//           <time>{blog.time}</time>
//         </p>
//       </a>
//     </BlogItem>
//   )
// }

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
    // this.fetchRSS()
  }

  fetchRSS() {
    BlogAction.fetchArticle(this)
  }

  // updateArticle(feed) {
  //   let articles = []
  //   const numberOfArticles = 3
  //   for (const index in feed) {
  //     let feedItem = {}
  //     feedItem.title = feed[index].title
  //     feedItem.link = feed[index].link
  //     feedItem.time = DateUtility.formatToPubdate(feed[index].pubDate)
  //     articles.push(feedItem)

  //     if (articles.length >= numberOfArticles) {
  //       break
  //     }
  //   }

  //   this.setState({
  //     articles: articles
  //   })
  // }

  render() {
    return (
      <BlogArea>
        <header>
          <SubTitle>Blog</SubTitle>
          <Text>仕事やプライベートで知ったことを備忘録として残しています</Text>
        </header>
        {/* <div className="body">
          {this.state.articles.length > 0 ? (
            <BlogList>
              {this.state.articles.map((blog, index) => {
                return <Blog key={index} blog={blog} />
              })}
            </BlogList>
          ) : null}
        </div> */}
        <div className="footer">
          <Button href={'https://blog.daisukekonishi.com'} blank>
            View
          </Button>
        </div>
      </BlogArea>
    )
  }
}

export { BlogSection }
