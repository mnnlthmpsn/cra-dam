import React from 'react'
import { Route, Switch } from 'react-router-dom'

// components
import Home from './pages/Home.js'
import About from './pages/About.js'
import Settings from './pages/Settings.js'
import Courses from './pages/Courses.js'
import CourseDetails from './pages/CourseDetails.js'
import Dashboard from './pages/Dashboard.js'
import Contact from './pages/Contact.js'


function App() {

  return (
    <div className='App'>
      <main>
        {/* routes */}
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/courses' component={Courses} />
          <Route path='/course/:course_id/topic/:topic_id' component={CourseDetails} />
          <Route path='/settings' component={Settings} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />          
        </Switch>
      </main>
    </div>
  );
}

export default App;
