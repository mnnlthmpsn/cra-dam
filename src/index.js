import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom/'
import 'react-app-polyfill/stable'
import 'antd/dist/antd.css'
import './custom-antd.css'
import './styles.min.css'

// firebase
import Firebase, { FirebaseContext } from './components/Firebase'
import AuthContextProvider from './context/authcontext'

ReactDOM.render(
    <FirebaseContext.Provider value={new Firebase()}>
        <BrowserRouter>
            <AuthContextProvider>
                <App />
            </AuthContextProvider>
        </BrowserRouter>
    </FirebaseContext.Provider>
    , document.getElementById('root'));