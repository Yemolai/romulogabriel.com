import axios from 'axios'
export default ({
  Vue
}) => {
  Vue.prototype.$githubAPI = {
    $http: axios.create({ baseURL: 'https://api.github.com' }),
    async getProfile (username) {
      const userData = await this.$http.get('/users/' + username)
        .then(({ data }) => data)
      const {
        avatar_url: avatarUrl,
        html_url: profileUrl,
        name,
        company,
        blog: website,
        location,
        hireable,
        bio,
        public_repos: publicRepos,
        public_gists: publicGists,
        followers,
        following,
        created_at: createdAt,
        updated_at: updatedAt
      } = userData
      return {
        avatarUrl,
        profileUrl,
        name,
        company,
        website,
        location,
        hireable,
        bio,
        publicRepos,
        publicGists,
        followers,
        following,
        createdAt,
        updatedAt
      }
    }
  }
}
