import React, { useEffect, useContext, useState } from 'react'
import axios from 'axios'
import { useHistory, Link } from 'react-router-dom'
import { message } from 'antd'
import { home } from '../components/links'
import Nav from '../components/nav'
import Footer from '../components/footer'
import { AuthContext } from '../context/authcontext'
import { EnrolledCoursesContext } from '../context/enrolledcoursescontext'
import { CompletedCourseContext } from '../context/completedcoursescontext'
import { FirebaseContext } from '../components/Firebase'
import Spinner from '../components/spinner'
import Search from '../components/search'


const Dashboard = () => {

    const { isAuthenticated } = useContext(AuthContext)
    const { completedCourses, removeCourse } = useContext(CompletedCourseContext)
    const { enrolledCourses, removeEnrolled } = useContext(EnrolledCoursesContext)
    const history = useHistory()

    const [catalog, setCatalog] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [welcomeMsg, setWelcomeMsg] = useState('')

    const firebase = useContext(FirebaseContext)

    // get all course categories here
    const getCatalog = async () => {
        await axios.get(`${home}/api/v1/category/`)
            .then(res => {
                setCatalog(res.data)
                setIsLoading(false)
            })
            .catch(err => {

                setError({ message: err.message })
                setIsLoading(false)

            })
    }


    const removeMyCourse = course => {
        removeCourse(course)
        message.warning(`${course} removed`)
    }

    const removeMyEnrolled = course => {
        removeEnrolled(course)
        message.warning(`${course.title} removed`)
    }


    const checkAuth = () => {
        // eslint-disable-next-line
        isAuthenticated
            ? setWelcomeMsg(`Welcome ${firebase.auth.currentUser.displayName}`)
            : history.push('/cta')
    }

    useEffect(() => {
        checkAuth()
        getCatalog()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuthenticated, enrolledCourses, completedCourses])

    return (
        <div>
            <Nav />
            <h4 style={{ marginTop: '20px', marginBottom: '20px' }} className="text-center">{welcomeMsg}</h4>
            <div className="container">
                <div className="row">
                    <div className="col-sm-24 col-md-24 col-lg-24 mx-auto">
                        <div className="card" style={{ width: '80vw', margin: 'auto' }}>
                            <div className="card-header">
                                <ul className="nav nav-tabs card-header-tabs pull-center" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="catalog-tab" data-toggle="tab" href="#catalog" role="tab" aria-controls="catalog" aria-selected="true">Course Catalog</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="enrolled-tab" data-toggle="tab" href="#enrolled" role="tab" aria-controls="enrolled" aria-selected="false">Enrolled Courses</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="completed-tab" data-toggle="tab" href="#completed" role="tab" aria-controls="completed" aria-selected="false">Completed Courses</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="card-body">
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="catalog" role="tabpanel" aria-labelledby="catalog-tab">
                                        {error ? <p className="text-center">{error.message}</p> : ''}
                                        <Search />
                                        {
                                            isLoading
                                                ? <Spinner />
                                                : <div className="container">
                                                    <div className="row product-list dev">
                                                        {
                                                            catalog
                                                                ?
                                                                catalog.map(course => (
                                                                    <div key={course.id} className="col-sm-6 col-md-4 product-item animation-element slide-top-left">
                                                                        <div className="product-container">
                                                                            <div className="row">
                                                                                {/* eslint-disable-next-line */}
                                                                                <div className="col-md-12"><a href="#" className="product-image"><img src="assets/img/iphone6.jpg" alt='iphone' /></a></div>
                                                                            </div>
                                                                            <div className="row">
                                                                                <div className="col-8">
                                                                                    {/* eslint-disable-next-line */}
                                                                                    <h4 style={{ color: "black !important" }}><a href="#" style={{ color: "black" }}>{course.title}</a></h4>
                                                                                </div>
                                                                            </div>
                                                                            {/* eslint-disable-next-line */}
                                                                            <div className="product-rating"><a href="#" className="small-text">15 topics</a></div>
                                                                            <div className="row">
                                                                                <div className="col-12">
                                                                                    <p className="product-description">{course.description}</p>
                                                                                    <div className="row">
                                                                                        <Link to={`/category/${course.id}/courses`}><div className="col-6"><button className="btn btn-light" type="button" style={{ backgroundColor: "rgb(40,167,69)" }}>View Courses</button></div></Link>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                ))
                                                                : <div><p className="text-center">No Courses Yet</p></div>
                                                        }
                                                    </div>
                                                </div>
                                        }
                                    </div>
                                    {/* enrolled Courses */}
                                    <div className="tab-pane fade" id="enrolled" role="tabpanel" aria-labelledby="enrolled-tab">
                                        {error ? <p className="text-center">{error.message}</p> : ''}
                                        {
                                            isLoading
                                                ? <Spinner />
                                                : <div className="container">
                                                    <div className="row product-list dev">
                                                        {
                                                            enrolledCourses
                                                                ?
                                                                enrolledCourses.map(course => (
                                                                    <div key={course.id} className="col-sm-6 col-md-4 product-item animation-element slide-top-left">
                                                                        <div className="product-container">
                                                                            <div className="row">
                                                                                {/* eslint-disable-next-line */}
                                                                                <div className="col-md-12"><a href="#" className="product-image"><img src="assets/img/iphone6.jpg" alt='iphone' /></a></div>
                                                                            </div>
                                                                            <div className="row">
                                                                                <div className="col-8">
                                                                                    {/* eslint-disable-next-line */}
                                                                                    <h4 style={{ color: "black !important" }}><a href="#" style={{ color: "black" }}>{course.title}</a></h4>
                                                                                </div>
                                                                            </div>
                                                                            {/* eslint-disable-next-line */}
                                                                            <div className="product-rating"><a href="#" className="small-text">15 topics</a></div>
                                                                            <div className="row">
                                                                                <div className="col-12">
                                                                                    <p className="product-description">{course.description}</p>
                                                                                    <div className="row">
                                                                                        <Link to={`/course/${course.id}/detail`}><div className="col-6"><button className="btn btn-light" type="button" style={{ backgroundColor: "rgb(40,167,69)" }}>View Courses</button></div></Link>
                                                                                        <button style={{ backgroundColor: 'red' }} onClick={() => removeMyEnrolled(course)}>Remove</button>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                ))
                                                                : <div><p className="text-center">Enrolled Courses will appear here</p></div>
                                                        }
                                                    </div>
                                                </div>
                                        }
                                    </div>
                                    <div className="tab-pane fade" id="completed" role="tabpanel" aria-labelledby="completed-tab">
                                        {error ? <p className="text-center">{error.message}</p> : ''}
                                        {
                                            isLoading
                                                ? <Spinner />
                                                : <div className="container">
                                                    <div className="row product-list dev">
                                                        {
                                                            completedCourses
                                                                ?
                                                                completedCourses.map(course => (
                                                                    <div key={course} className="col-sm-6 col-md-4 product-item animation-element slide-top-left">
                                                                        <div className="product-container">
                                                                            <div className="row">
                                                                                {/* eslint-disable-next-line */}
                                                                                <div className="col-md-12"><a href="#" className="product-image"><img src="assets/img/iphone6.jpg" alt='iphone' /></a></div>
                                                                            </div>
                                                                            <div className="row">
                                                                                <div className="col-8">
                                                                                    {/* eslint-disable-next-line */}
                                                                                    <h4 style={{ color: "black !important" }}><a href="#" style={{ color: "black" }}>{course}</a></h4>
                                                                                </div>
                                                                            </div>
                                                                            {/* eslint-disable-next-line */}
                                                                            <div className="row">
                                                                                <div className="col-12">
                                                                                    <p className="product-description">Course Completed</p>
                                                                                </div>
                                                                            </div>
                                                                            <button className="btn" style={{ backgroundColor: 'red' }} onClick={() => removeMyCourse(course)}>Remove</button>
                                                                        </div>
                                                                    </div>
                                                                ))
                                                                : <div><p className="text-center">No Courses Yet</p></div>
                                                        }
                                                    </div>
                                                </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Dashboard