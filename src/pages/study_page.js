import React, { useEffect, useContext, useState } from 'react'
import Nav from '../components/nav'
import Footer from '../components/footer'
import { AuthContext } from '../context/authcontext'
import { CompletedCourseContext } from '../context/completedcoursescontext'
import { Link, useParams, useHistory } from 'react-router-dom'
import axios from 'axios'
import parse from 'html-react-parser'
import { home } from '../components/links'
import Spinner from '../components/spinner'
import { message } from 'antd'


const StudyPage = () => {

    const { isAuthenticated } = useContext(AuthContext)
    const { set_completedCourses } = useContext(CompletedCourseContext)
    const { topic_id } = useParams()
    const history = useHistory()

    const [topic, setTopic] = useState([])
    const [next, setNext] = useState(null)
    const [previous, setPrevious] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const checkAuthStatus = () => (
        isAuthenticated
            ? 'allow him study'
            : history.push('/cta')
    )

    const courseCompleted = () => {
        set_completedCourses(topic.course)
        message.success(`${topic.course} completed`)
    }

    const getCourseTopics = () => {
        axios.get(`${home}/api/v1/topic/${topic_id}/contents/`)
            .then(res => {
                setTopic(res.data)
                setIsLoading(false)
            })
            .catch(err => {
                setError({ message: err.message })
                setIsLoading(false)
            })
    }

    const getNextTopic = () => {
        axios.get(`${home}/api/v1/topic/${topic_id}/get_next/`)
            .then(res => {
                setNext(res.data)
            })
            .catch(err => {
                setError({ message: err.message })
            })
    }

    const getPreviousTopic = () => {
        axios.get(`${home}/api/v1/topic/${topic_id}/get_previous/`)
            .then(res => {
                setPrevious(res.data)
            })
            .catch(err => {
                setError({ message: err.message })
            })
    }

    useEffect(() => {
        checkAuthStatus()
        getCourseTopics()
        getNextTopic()
        getPreviousTopic()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [topic])


    return (
        <div>
            <Nav />
            <div className='container'>
                {
                    isLoading
                        ? <Spinner />
                        : <div className="col-lg-12 col-md-18 col-sm-24">
                            {error ? <h3 className="text-center ">{error.message}</h3> : <div></div>}

                            {
                                topic
                                    ? <div>
                                        {
                                            topic
                                                ? <div>
                                                    <h3 style={{ marginTop: '2%', marginBottom: '2%' }} className="text-center">{topic.topic}</h3>
                                                    <div className="col-lg-12 col-md-20 col-sm-24">{parse(topic.content)}</div>
                                                    <hr style={{ width: '50vw', marginTop: '5%', marginBottom: '2%' }} />
                                                    {/* pagination */}
                                                    {/* previous topic */}
                                                    <div className="d-flex flex-row flex-grow-1 justify-content-between">
                                                        <div>
                                                            {
                                                                previous
                                                                    ? <Link to={`/topic/${previous.id}/study`}>
                                                                        <div onClick={() => window.scrollTo(0,0)}>
                                                                            {/* eslint-disable-next-line */}
                                                                            <strong><i className="fa fa-arrow-left"></i> {previous.title}</strong>
                                                                        </div>
                                                                    </Link>
                                                                    : <div></div>
                                                            }
                                                        </div>

                                                        {/* next topic */}
                                                        <div>
                                                            {
                                                                next
                                                                    // eslint-disable-next-line
                                                                    ? <Link to={`/topic/${next.id}/study`}>
                                                                        <div onClick={() => window.scrollTo(0,0)}>
                                                                            {/* eslint-disable-next-line */}
                                                                            <strong>{next.title} <i className="fa fa-arrow-right"></i></strong>
                                                                        </div></Link>
                                                                    : <div>
                                                                        <button className="btn btn-success btn-sm" onClick={() => courseCompleted()}>Completed</button>
                                                                    </div>
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                                : 'do nothing'
                                        }
                                    </div>
                                    : 'there are no topics'
                            }
                        </div>
                }
            </div>
            <Footer />
        </div>
    )
}

export default StudyPage