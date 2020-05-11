import React, { useContext, useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'

import Landing from './pages/landing'
import Explore from './pages/explore'
import CategoryCourses from './pages/category_courses'
import CourseDetail from './pages/course_detail'
import StudyPage from './pages/study_page'
import Dashboard from './pages/dashboard'
import CTA from './pages/cta'


import { FirebaseContext } from './components/Firebase'
import { AuthContext } from './context/authcontext'
import EnrolledCoursesContextProvider from './context/enrolledcoursescontext'
import Spinner from './components/spinner'
import CompletedCourseContextProvider from './context/completedcoursescontext'


const App = () => {

    const firebase = useContext(FirebaseContext)
    const { set_isAuthenticated } = useContext(AuthContext)
    const [isLoading, setIsLoading] = useState(true)

    const authenticated = () => {
        set_isAuthenticated(true)
        setIsLoading(false)
    }

    const notAuthenticated = () => {
        set_isAuthenticated(false)
        setIsLoading(false)
    }

    useEffect(() => {
        firebase.auth.onAuthStateChanged(user => (
            user ? authenticated() : notAuthenticated()
        ))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className='App'>
            {
                isLoading
                    ? <Spinner />
                    :
                    <main>
                        {/* routes */}
                        <Switch>
                            <Route path='/' component={Landing} exact />
                            <Route path='/cta' component={CTA} />
                            <Route path='/explore' component={Explore} />
                            <Route path='/category/:category_id/courses' component={CategoryCourses} />
                            <CompletedCourseContextProvider>
                                <EnrolledCoursesContextProvider>
                                    <Route path='/topic/:topic_id/study' component={StudyPage} />
                                    <Route path='/course/:course_id/detail' component={CourseDetail} />
                                    <Route path='/dashboard' component={Dashboard} />
                                </EnrolledCoursesContextProvider>
                            </CompletedCourseContextProvider>
                        </Switch>
                    </main>

            }
        </div >
    )

}

export default App