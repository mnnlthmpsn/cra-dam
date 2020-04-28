import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { FirebaseContext } from '../components/Firebase'
import Nav from '../components/nav'
import Footer from '../components/footer'


const CTA = () => {

    const firebase = useContext(FirebaseContext)
    const [error, setError] = useState('')

    var history = useHistory()

    const googleLogin = e => {
        e.preventDefault()
        if (navigator.onLine) {
            firebase
                .doSignInWithGoogle()
                .then(() => {
                    window.location.replace('/dashboard')
                })
                .catch(err => {
                    setError(err)
                    setTimeout(() => {
                        setError(null)
                    }, 5000)
                })
        }
        else {
            setError('check your connection')
            setTimeout(() => {
                setError(null)
            }, 5000)
        }
    }

    const facebookLogin = e => {
        e.preventDefault()
        console.log('facebook login')
    }

    const twitterLogin = e => {
        e.preventDefault()
        console.log('twitter login')
    }

    return (
        <div>
            <Nav />
            {
                error
                    ? <div className="container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '10vh' }}>
                        <p>{error}</p>
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
                    : <div className="container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '15vh' }}>
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
            }
            <Footer />
        </div>
    )
}

export default CTA