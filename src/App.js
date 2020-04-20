import React, { useEffect, useContext } from 'react'
import { Switch, Route } from 'react-router-dom'

import Landing from './pages/landing'
import Explore from './pages/explore'
import CategoryCourses from './pages/category_courses'
import CourseDetail from './pages/course_detail'
import StudyPage from './pages/study_page'
import Dashboard from './pages/dashboard'
import CTA from './pages/cta'

import ProtectedRoute from './components/PrivateRoute'
import PublicRoute from './components/PublicRoute'
import { FirebaseContext } from './components/Firebase'
import { UserAuthContext } from './contexts/userAuthContext'

const App = () => {

    const { set_isAuthenticated } = useContext(UserAuthContext)
    const firebase = useContext(FirebaseContext)

    useEffect(() => {
        firebase.auth.onAuthStateChanged(isAuthenticated => {
            isAuthenticated 
                ? set_isAuthenticated(isAuthenticated)
                : set_isAuthenticated(null)
        })
    })

    return (
        <div className='App'>
            <main>
                {/* routes */}
                <Switch>
                    <PublicRoute path='/' component={Landing} exact />
                    <PublicRoute path='/cta' component={CTA} />
                    <PublicRoute path='/explore' component={Explore} />
                    <PublicRoute path='/catalog' component={CategoryCourses} />
                    <PublicRoute path='/course/:course_id/detail' component={CourseDetail} />
                    <ProtectedRoute path='/course/:course_id/study' component={StudyPage} />
                    <ProtectedRoute path='/dashboard' component={Dashboard} />
                </Switch>
            </main>
        </div>
    )
}

export default App