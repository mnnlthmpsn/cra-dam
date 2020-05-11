import React, { useContext, useState, useEffect } from 'react'
import { FirebaseContext } from '../components/Firebase'
import Nav from '../components/nav'
import Footer from '../components/footer'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../context/authcontext'


const CTA = () => {

    const firebase = useContext(FirebaseContext)
    const [error, setError] = useState(null)
    const history = useHistory()
    const { isAuthenticated } = useContext(AuthContext)

    const checkAuthStatus = () => {
        // eslint-disable-next-line
        isAuthenticated
            ? history.push('/dashboard')
            : ''
    }

    const googleLogin = () => {
        if (navigator.onLine) {
            firebase
                .doSignInWithGoogle()
        }
        else {
            setError({ message: 'check your connection' })
            setTimeout(() => {
                setError(null)
            }, 5000)
        }
    }

    const facebookLogin = e => {
        console.log('facebook login')
    }

    const twitterLogin = e => {
        console.log('twitter login')
    }

    useEffect(() => {
        checkAuthStatus()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuthenticated])

    return (
        <div>
            <Nav />
            <div className="container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '10vh' }}>
                {error ? <p>{error.message}</p> : ''}
                <div className="col-md-12 col-sm-24 col-lg-4" style={{ border: '1px solid white', borderRadius: '10px', background: 'whitesmoke', padding: '20px', textAlign: 'center' }}>
                    <div >
                        <button onClick={() => googleLogin()}
                            style={{ height: '50px', width: '200px', backgroundColor: "red", border: '1px solid red', color: "white", borderRadius: '10px' }}
                        ><span><i className="fa fa-google"> </i></span> Sign In with Google</button>
                    </div>
                    <hr style={{ width: '100px' }} />
                    <div>
                        <button onClick={() => facebookLogin()}
                            style={{ height: '50px', width: '200px', backgroundColor: "blue", border: '1px solid blue', color: "white", borderRadius: '10px' }}
                        ><span><i className="fa fa-facebook"> </i></span> Sign In with Facebook</button>
                    </div>
                    <hr style={{ width: '100px' }} />
                    <div>
                        <button onClick={() => twitterLogin()}
                            style={{ height: '50px', width: '200px', backgroundColor: "lightblue", border: '1px solid lightblue', color: "white", borderRadius: '10px' }}
                        ><span><i className="fa fa-twitter"> </i></span> Sign In with Twitter</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CTA