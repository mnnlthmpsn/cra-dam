import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom/'
import 'antd/dist/antd.css'
import './custom-antd.css'
import './index.css'
import AuthContextProvider from './contexts/AuthContext';
import CourseContextProvider from './contexts/CourseContext';
import MyCourseContextProvider from './contexts/MyCourseContext'
import TopicContextProvider from './contexts/TopicContext';
import SubTopicContextProvider from './contexts/SubTopicContext';
import DepartmentContextProvider from './contexts/DepartmentContext';



ReactDOM.render(
    <DepartmentContextProvider>
        <CourseContextProvider>
        <MyCourseContextProvider>
            <TopicContextProvider>
                <SubTopicContextProvider>
                    <AuthContextProvider>
                        <BrowserRouter>
                            <App />
                        </BrowserRouter>
                    </AuthContextProvider>
                </SubTopicContextProvider>
            </TopicContextProvider>
        </MyCourseContextProvider>
    </CourseContextProvider>
    </DepartmentContextProvider>
    ,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
