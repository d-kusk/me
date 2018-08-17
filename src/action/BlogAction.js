const RSS_URL = 'https://blog.daisukekonishi.com/index.xml'

class BlogAction {
  // constructor() {}

  static fetchArticle(component) {
    fetch(RSS_URL, {
      mode: 'cors'
    })
      .then((response) => {
        return response.text()
      })
      .then((text) => {
        console.log('text', text)
      })
  }
}

export { BlogAction }