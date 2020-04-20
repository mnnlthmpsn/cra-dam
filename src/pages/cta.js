import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { FirebaseContext } from '../components/Firebase'
import { UserAuthContext } from '../contexts/userAuthContext'
import Nav from '../components/nav'
import Footer from '../components/footer'


const CTA = () => {

    const firebase = useContext(FirebaseContext)
    const [error, setError] = useState(null)

    var history = useHistory()

    const googleLogin = e => {
        e.preventDefault()
        if (navigator.onLine) {
            firebase
                .doSignInWithGoogle()
                .then(() => {
                    setError(null)
                    history.push('/dashboard')
                })
                .catch(error => {
                    setError(error)
                })
        }
        else {
            var myErrorView = document.getElementById("error-view")
            myErrorView.style.display = "block"
            setTimeout(() => {
                (myErrorView.style.display = "none")
            }, 4000)
        }
    }


    const facebookLogin = e => {
        e.preventDefault()
        if (navigator.onLine) {
            firebase
                .doSignInWithFacebook()
                .then(user => {
                    setError(null)
                    history.push('/dashboard')
                })
                .catch(error => {
                    setError(error)
                })
        }
        else {
            var myErrorView = document.getElementById("error-view")
            myErrorView.style.display = "block"
            setTimeout(() => {
                myErrorView.style.display = "none"
            }, 4000)
        }
    }

    const twitterLogin = e => {
        e.preventDefault()
        if (navigator.onLine) {
            firebase
                .doSignInWithTwitter()
                .then(user => {
                    setError(null)
                    history.push('/dashboard')
                })
                .catch(error => {
                    setError(error)
                })
        }
        else {
            var myErrorView = document.getElementById("error-view")
            myErrorView.style.display = "block"
            setTimeout(() => {
                myErrorView.style.display = "none"
            }, 4000)
        }
    }

    return (
        <div>
            <Nav />

            <div className="container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '15vh' }}>
                <div id="error-view" style={{ display: "none", width: "30%", marginBottom: '10px', textAlign: 'center' }} className="hidden alert alert-danger alert-dismissible fade show" role="alert">
                    Please Check your Internet Connection
                </div>
                <div className="col-md-12 col-sm-24 col-lg-4" style={{ border: '1px solid white', borderRadius: '10px', background: 'whitesmoke', padding: '20px', textAlign: 'center' }}>
                    <div >
                        <form onSubmit={googleLogin}>
                            <button
                                style={{ height: '50px', width: '200px', backgroundColor: "red", border: '1px solid red', color: "white", borderRadius: '10px' }}
                            ><span><i className="fa fa-google"> </i></span> Sign In with Google</button>
                        </form>
                    </div>
                    <hr style={{ width: '100px' }} />
                    <div>
                        <form onSubmit={facebookLogin}>
                            <button
                                style={{ height: '50px', width: '200px', backgroundColor: "blue", border: '1px solid blue', color: "white", borderRadius: '10px' }}
                            ><span><i className="fa fa-facebook"> </i></span> Sign In with Facebook</button>
                        </form>
                    </div>
                    <hr style={{ width: '100px' }} />
                    <div>
                        <form onSubmit={twitterLogin}>
                            <button
                                style={{ height: '50px', width: '200px', backgroundColor: "lightblue", border: '1px solid lightblue', color: "white", borderRadius: '10px' }}
                            ><span><i className="fa fa-twitter"> </i></span> Sign In with Twitter</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CTA