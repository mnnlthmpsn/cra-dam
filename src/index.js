import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom/'
import 'antd/dist/antd.css'
import './index.css'
import CourseContextProvider from './contexts/CourseContext';
import UserContextProvider from './contexts/UserContext';
import MyCourseContextProvider from './contexts/MyCourseContext'



ReactDOM.render(
    <UserContextProvider>
        <CourseContextProvider>
            <MyCourseContextProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </MyCourseContextProvider>
        </CourseContextProvider>
    </UserContextProvider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
