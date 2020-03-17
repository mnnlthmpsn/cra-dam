import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom';
import { message } from 'antd';
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import {AuthContext} from '../contexts/AuthContext'


const LoginForm = () => {

    let history = useHistory()

    const { setIsAuthenticated } = useContext(AuthContext)

    const uiConfig = {
        signInFlow: 'popup',
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        ],
        callbacks: {
            signInSuccessWithAuthResult: () => {
                setIsAuthenticated(true)
                message.success(`Welcome ${firebase.auth().currentUser.displayName}`)
                history.push('/dashboard')
            },
            signInFailure: (error) => {
                message.error(error.message)
            } 
        }
    }


    return (
        <div>
            <StyledFirebaseAuth 
                uiConfig={uiConfig}
                firebaseAuth={firebase.auth()}
            />
        </div>
    )
}

export default LoginForm