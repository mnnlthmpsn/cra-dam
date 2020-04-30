import React, { useEffect, useContext, useState } from 'react'
import Nav from '../components/nav'
import Footer from '../components/footer'
import { AuthContext } from '../context/authcontext'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { home } from '../components/links'
import Spinner from '../components/spinner'


const StudyPage = () => {

    const { isAuthenticated } = useContext(AuthContext)
    const { course_id } = useParams()

    const [course, setCourse] = useState([])
    const [topics, setTopics] = useState([])
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const firstTopic = topics[0]

    const checkAuthStatus = () => (
        isAuthenticated
            ? 'allow him study'
            : window.location.replace('/cta')
    )

    const getCourseDetails = () => {
        axios.get(`${home}/api/v1/course/${course_id}/`)
            .then(res => {
                setCourse(res.data)
                setIsLoading(false)
            })
            .catch(err => {
                setError({message: err.messasge})
            })
    }

    const getCourseTopics = () => {
        axios.get(`${home}/api/v1/course/${course_id}/topics/`)
        .then(res => {
            setTopics(res.data)
            setIsLoading(false)
        })
        .catch(err => {
            setError({message: err.message})
            setIsLoading(false)
        })
    }


    useEffect(() => {
        checkAuthStatus()
        getCourseDetails()
        getCourseTopics()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <Nav />
            <div className='container text-center'>
                {
                    isLoading
                        ? <Spinner />
                        : <div>
                            {error ? <h3 className="text-center ">{error.message}</h3>: <div></div>}
                            <h4 className="text-center" style={{ marginTop: "24px", marginBottom: "24px" }}>{course.title}</h4>
                            {/* paginate topics */}
                            {
                                firstTopic 
                                    ? <div>
                                        <h3>{firstTopic.title}</h3>
                                        <p>{firstTopic.description}</p>
                                    </div>
                                    : <div>Check back later</div>
                            }
                        </div>
                }
            </div>
            <Footer />
        </div>
    )
}

export default StudyPage