import app from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
};


class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig)
        this.auth = app.auth()

        // google
        this.googleProvider = new app.auth.GoogleAuthProvider()
        this.facebookProvider = new app.auth.FacebookAuthProvider()
        this.twitterProvider = new app.auth.TwitterAuthProvider()
    }

    // auth
    doSignInWithGoogle = () => 
        this.auth.signInWithPopup(this.googleProvider)

    doSignInWithFacebook = () =>
        this.auth.signInWithPopup(this.facebookProvider)

    doSignInWithTwitter = () =>
        this.auth.signInWithPopup(this.twitterProvider)

    doSignOut = () => this.auth.signOut()

}

export default Firebase