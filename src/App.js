import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Landing from './pages/landing'
import Explore from './pages/explore'
import CategoryCourses from './pages/category_courses'
import CourseDetail from './pages/course_detail'
import StudyPage from './pages/study_page'
import Dashboard from './pages/dashboard'

const App = () => {
    return (
        <div className='App'>
            <main>
                {/* routes */}
                <Switch>
                    <Route path='/' component={Landing} exact />
                    <Route path='/explore' component={Explore} />
                    <Route path='/catalog' component={CategoryCourses} />
                    <Route path='/course/:course_id/detail' component={CourseDetail} />
                    <Route path='/course/:course_id/study' component={StudyPage} />
                    <Route path='/dashboard' component={Dashboard} />
                </Switch>
            </main>
        </div>
    )
}

export default App