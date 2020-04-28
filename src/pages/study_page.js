import React, { useEffect, useContext, useState } from 'react'
import Nav from '../components/nav'
import Footer from '../components/footer'
import { AuthContext } from '../context/authcontext'
import { EnrolledCoursesContext } from '../context/enrolledcoursescontext'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const StudyPage = () => {

    const { isAuthenticated } = useContext(AuthContext)
    const { addToEnrolledCourses } = useContext(EnrolledCoursesContext)
    const { course_id } = useParams()

    const [course, setCourse] = useState([])
    const [topics, setTopics] = useState([])
    const [errors, setErrors] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const checkAuthStatus = () => (
        isAuthenticated
            ? 'allow him study'
            : window.location.replace('/cta')
    )

    const getCourseDetails = () => {
        axios.get(`http://dapi.herokuapp.com/api/v1/course/${course_id}/`)
            .then(res => {
                setCourse(res.data)
                setIsLoading(false)
            })
            .catch(err => {
                setErrors(...errors, err)
            })
    }

    const getTopics = () => {
        axios.get(`http://dapi.herokuapp.com/api/v1/course/${course_id}/topics/`)
            .then(res => {
                setTopics(res.data)
                setIsLoading(false)
            })
            .catch(err => {
                setErrors(...errors, err)
                setIsLoading(false)
            })
    }

    useEffect(() => {
        checkAuthStatus()
        getCourseDetails()
        getTopics()
    }, [])

    return (
        <div>
            <Nav />
            <div className='container text-center'>
                {
                    isLoading
                        ? <div>...is loading</div>
                        : <div>
                            <h4 className="text-center" style={{ marginTop: "24px", marginBottom: "24px" }}>{course.title}</h4>
                            <p>Study Page</p>
                            {/* paginate topics */}
                            {
                                topics
                                    ? topics.map(topic => (
                                        <div>{topic.content}</div>
                                    ))
                                    : 'empty topic list'
                            }
                        </div>
                }
            </div>
            <Footer />
        </div>
    )
}

export default StudyPage