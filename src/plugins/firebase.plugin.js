import firebase from 'firebase/app';
import 'firebase/firestore';

export default ({
  Vue
}) => {
  const {
    VUE_APP_FIREBASE_CONFIG: configStr = null
  } = process.env;

  const config = JSON.parse(configStr);

  if (!config) {
    throw new Error('firebase config not found at env');
  }

  firebase.initializeApp(config);

  const settings = {/* your settings... */ timestampsInSnapshots: true};

  Vue.prototype.$db = firebase.firestore();

  Vue.prototype.$db.settings(settings);
}
