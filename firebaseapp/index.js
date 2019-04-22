// Initialize Firebase
import firebase from 'firebase'

var config = {
  apiKey: 'xxx',
  authDomain: 'xx-xx.firebaseapp.com',
  databaseURL: 'xxxx',
  projectId: 'xxxx',
  storageBucket: 'xx-xx.appspot.com',
  messagingSenderId: 'xxx'
}

let firebaseApp

if (firebase.apps.length === 0) {
  firebaseApp = firebase.initializeApp(config)
} else {
  firebaseApp = firebase.apps[0]
}

export default firebaseApp
