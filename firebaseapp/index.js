// Initialize Firebase
import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyAk3Zc6tgu6TZIJdPj__DTRzWOSwPUgHAo',
  authDomain: 'wtedata-eb0c5.firebaseapp.com',
  databaseURL: 'https://wtedata-eb0c5.firebaseio.com',
  projectId: 'wtedata-eb0c5',
  storageBucket: 'wtedata-eb0c5.appspot.com',
  messagingSenderId: '347943433455'
}

let firebaseApp

if (firebase.apps.length === 0) {
  firebaseApp = firebase.initializeApp(config)
} else {
  firebaseApp = firebase.apps[0]
}

export default firebaseApp
