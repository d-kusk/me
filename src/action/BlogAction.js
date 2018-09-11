/**
 * YQL - Yahoo Query Language
 * @url https://developer.yahoo.com/yql/
 */
const ENDPOINT =
  'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22https%3A%2F%2Fblog.daisukekonishi.com%2Findex.xml%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys'

class BlogAction {
  static fetchArticle(component) {
    fetch(ENDPOINT, {
      mode: 'cors'
    })
      .then(response => {
        return response.json()
      })
      .then(json => {
        component.updateArticle(json)
      })
      .catch(err => {
        return err
      })
  }
}

export { BlogAction }
