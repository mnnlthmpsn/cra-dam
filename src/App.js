import React, { useContext, useEffect, useState } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'

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


const App = () => {

    const history = useHistory()

    const firebase = useContext(FirebaseContext)
    const { set_isAuthenticated } = useContext(AuthContext)
    const [isLoading, setIsLoading] = useState(true)

    const authenticated = async () => {
        await set_isAuthenticated(true)
        setIsLoading(false)
    }

    const notAuthenticated = async () => {
        await set_isAuthenticated(false)
        setIsLoading(false)
    }

    useEffect(() => {
        firebase.auth.onAuthStateChanged(user => (
            user ? authenticated() : notAuthenticated()
        ))
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
                            <Route path='/category/:category_id/courses/' component={CategoryCourses} />
                            <EnrolledCoursesContextProvider>
                                <Route path='/course/:course_id/study' component={StudyPage} />
                                <Route path='/course/:course_id/detail' component={CourseDetail} />
                                <Route path='/dashboard' component={Dashboard} />
                            </EnrolledCoursesContextProvider>
                        </Switch>
                    </main>

            }
        </div >
    )

}

export default App