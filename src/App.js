import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'

// components
import HomeNav from './components/HomeNav'
import FooterContent from './components/FooterContent'
import Home from './pages/Home'
import About from './pages/About'
import Settings from './pages/Settings'
import Courses from './pages/Courses'
import CourseDetails from './pages/CourseDetails'
import Dashboard from './pages/Dashboard'
import Contact from './pages/Contact'
import TopicDetails from './pages/TopicDetails'
import PageNotFound from './pages/PageNotFound'
import ForgotPassword from './pages/ForgotPassword'
import { ProtectedRoute } from './components/ProtectedRoute'
import firebase from '../src/firebase'
import { Spin, Icon } from 'antd'


function App() {

  const [firebaseInitialized, setFirebaseInitialized] = useState(false)
  const antIcon = <Icon type='loading' />

  useEffect(() => {
    firebase.isInitialized().then(val => {
      setFirebaseInitialized(val)
    })
  })

  return firebaseInitialized !== false ? (
    <div className='App'>
      <main>
        {/* routes */}
        <Switch>
          <Route path='/' component={Home} exact />
          <ProtectedRoute path='/dashboard' component={Dashboard} />
          <ProtectedRoute path='/courses' component={Courses} />
          <ProtectedRoute path='/course/:course_id/' component={CourseDetails} />
          <ProtectedRoute path='/topic/:topic_id/' component={TopicDetails} />
          {/* <ProtectedRoute path='/settings' component={Settings} /> */}
          <Route path='/reset/password' component={ForgotPassword} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='*' component={PageNotFound} />  
        </Switch>
      </main>
    </div>
  ): <div>
    {/* set loader here */}
    <div className='App'>
      <HomeNav />
      <div className='loader'>
        <Spin 
          size='large'
          indicator={antIcon}
        />
      </div>
      <FooterContent />
    </div>
  </div>
}

export default App;
