import React, { useState, useEffect, useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import Nav from '../components/nav'
import Footer from '../components/footer'
import axios from 'axios'
import { AuthContext } from '../context/authcontext'
import { EnrolledCoursesContext } from '../context/enrolledcoursescontext'
import Spinner from '../components/spinner'
import { home } from '../components/links'


const CourseDetail = () => {

    const { course_id } = useParams()
    const { isAuthenticated } = useContext(AuthContext)
    const { addToEnrolledCourses } = useContext(EnrolledCoursesContext)

    const [course, setCourse] = useState([])
    const [topics, setTopics] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)


    const getCourseDetails = async () => {
        await axios.get(`${home}/api/v1/course/${course_id}/`)
            .then(res => {
                setCourse(res.data)
                setIsLoading(false)
            })
            .catch(err => {
                setError({ message: err.message })
                setIsLoading(false)
            })
    }

    const getCourseTopics = async () => {
        await axios.get(`${home}/api/v1/course/${course_id}/topics/`)
            .then(res => {
                setTopics(res.data)
                setIsLoading(false)
            })
            .catch(err => {
                setError({ message: err.message })
                setIsLoading(false)
            })
    }

    useEffect(() => {
        getCourseTopics()
        getCourseDetails()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <Nav />
            {
                isLoading
                    ? <Spinner />
                    : course
                        ? <div>
                            <h4 className="text-center" style={{ marginTop: "24px", marginBottom: "24px" }}>{course.title}</h4>
                            <div className="container text-center d-flex flex-column justify-content-center align-items-center align-content-center">
                                <div className="card" style={{ width: "80%" }}>
                                    {error ? <h3 className="text-center ">{error.message}</h3> : <div></div>}
                                    <div className="card-body m-sm-auto" style={{ width: "90" }}>
                                        <p className="card-title">{course.description}</p>
                                        <h6 className="text-muted card-subtitle mb-2">{course.code}</h6>
                                    </div>
                                </div>
                                <h5 className="text-center mt-5">Course Content</h5>
                                <div style={{ width: "70%", minHeight: "100px", marginTop: "30px", marginBottom: "0px" }}>
                                    {
                                        topics
                                            ? topics.map(topic => (
                                                <div key={topic.id}>
                                                    <Link to={`/topic/${topic.id}/study`}><h6>{topic.title}</h6></Link>
                                                    <p>{topic.description}</p>
                                                </div>
                                            ))
                                            : <p>No Topics</p>
                                    }
                                </div>
                                {
                                    isAuthenticated
                                        ? console.log(topics)
                                        // ? <Link to={`/topic/${topics.first.id}/study`}><button onClick={() => addToEnrolledCourses(course)} className="btn btn-success" type="button" style={{ marginTop: "43px" }}>Study Now</button></Link>
                                        : <Link to='/cta'><button className="btn btn-success" type="button" style={{ marginTop: "43px" }}>Login to Study</button></Link>
                                }
                            </div>
                        </div>
                        : <div>error loading courses</div>
            }
            <Footer />
        </div>
    )
}

export default CourseDetail