export default ({
  Vue
}) => {
  Vue.prototype.$posts = {
    db: Vue.prototype.$db,
    async getEntries() {
      const collection = this.db.collection('posts')
      const snapshot = await collection.get()
        .catch(err => {
          /* eslint-disable-next-line no-console */
          console.error('[app/loadPosts] err:', err)
          return {
            docs: []
          }
        })
      const docs = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      return docs.reduce((a, c) => ({
        ...a,
        [c.id]: c
      }), {})
    },
    async getEntry(id) {
      if (!id) {
        throw new Error('missing id')
      }
      const docRef = this.db.collection('posts').doc(id)
      const doc = await docRef.get()
      if (!doc.exists) {
        return null
      }
      return {
        id: docRef.id,
        ...doc.data()
      }
    }
  }
}
