import Axios from 'axios'

export default ({
  Vue
}) => {
  Vue.prototype.$devToAPI = {
    $http: Axios.create({ baseURL: 'https://dev.to/api' }),
    async getArticles(username) {
      const articleList = (await this.$http.get('/articles?' + new URLSearchParams({ username }))
        .then(({ data }) => data)
        .catch(err => {
          /* eslint-disable-next-line no-console */
          console.error('Failed to fetch articles from dev.to:', err.message)
          return []
        }))
        .filter(item => item.type_of === 'article')
        .map(({
          title,
          description,
          cover_image: imgUrl,
          published_at: updatedAt,
          tag_list: tags,
          slug,
          comments_count: comments,
          positive_reactions_count: reactions,
          published_timestamp: createdAt
        }) =>
          ({
            title,
            description,
            imgUrl,
            updatedAt,
            tags,
            slug,
            comments,
            reactions,
            createdAt
          }))
      return articleList
    }
  }
}
