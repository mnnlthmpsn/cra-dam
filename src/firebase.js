import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCfd0TWsIgsFRht2gePGIiNhSjIY2WPc9g",
  authDomain: "dam-auth.firebaseapp.com",
  databaseURL: "https://dam-auth.firebaseio.com",
  projectId: "dam-auth",
  storageBucket: "dam-auth.appspot.com",
  messagingSenderId: "590770977871",
  appId: "1:590770977871:web:9245d86ae87486c81dbe3a",
  measurementId: "G-QB645B8HS2"
};
// Initialize Firebase
class Firebase {
  constructor() {
    firebase.initializeApp(firebaseConfig);
    this.auth = firebase.auth()
    this.db = firebase.firestore()
  }

  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password)
  }

  logout() {
    return this.auth.signOut()
  }

  async register(username, email, password) {
    await this.auth.createUserWithEmailAndPassword(email, password)
    return this.auth.currentUser.updateProfile({
      displayName: username
    })
  }

  isInitialized() {
    return new Promise(resolve => {
      this.auth.onAuthStateChanged(resolve)
    })
  }

  getCurrentUsername() {
    return this.auth.getCurrentUsername.displayName
  }
}

export default new Firebase()