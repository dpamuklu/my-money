import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAq1woCP3Tw5l79kngqBTBzxfZ54eckke8",
  authDomain: "mymoney-200a6.firebaseapp.com",
  projectId: "mymoney-200a6",
  storageBucket: "mymoney-200a6.appspot.com",
  messagingSenderId: "1075228786685",
  appId: "1:1075228786685:web:b12b408b146940d7cf2394"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

export { projectFirestore, projectAuth }