import React, { useState, useEffect, useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import Nav from '../components/nav'
import Footer from '../components/footer'
import axios from 'axios'
import { AuthContext } from '../context/authcontext'
import { EnrolledCoursesContext } from '../context/enrolledcoursescontext'
import Spinner from '../components/spinner'

const CourseDetail = () => {

    const { course_id } = useParams()
    const { isAuthenticated } = useContext(AuthContext)
    const { addToEnrolledCourses } = useContext(EnrolledCoursesContext)

    const [course, setCourse] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [errors, setErrors] = useState([])

    const getCourseDetails = () => {
        axios.get(`http://dapi.herokuapp.com/api/v1/course/${course_id}/`)
            .then(res => {
                setCourse(res.data)
                setIsLoading(false)
            })
            .catch(err => {
                setErrors(...errors, err)
                setIsLoading(false)
            })
    }

    useEffect(() => {
        getCourseDetails()
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
                                    <div className="card-body m-sm-auto" style={{ width: "90" }}>
                                        <p className="card-title">{course.description}</p>
                                        <h6 className="text-muted card-subtitle mb-2">{course.code}</h6>
                                    </div>
                                </div>
                                <p style={{ width: "70%", minHeight: "100px", marginTop: "30px", marginBottom: "0px" }}>
                                    Course Syllabus can go here
                                    </p>
                                {
                                    isAuthenticated
                                        ? <Link to={`/course/${course_id}/study`}><button onClick={() => addToEnrolledCourses(course)} className="btn btn-success" type="button" style={{ marginTop: "43px" }}>Study Now</button></Link>
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