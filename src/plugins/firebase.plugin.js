import firebase from 'firebase/app'
import 'firebase/firestore'
import dotenv from 'dotenv'
import '../../.env'

dotenv.config()

export default ({
  Vue
}) => {
  const {
    VUE_APP_FIREBASE_CONFIG: configStr = null
  } = process.env

  const config = JSON.parse(configStr)

  if (!config) {
    throw new Error('firebase config not found at env')
  }

  firebase.initializeApp(config)

  Vue.prototype.$db = firebase.firestore()
}
