import React, { useEffect, useContext, useState } from 'react'
import Nav from '../components/nav'
import Footer from '../components/footer'
import { AuthContext } from '../context/authcontext'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import parse from 'html-react-parser'
import { home } from '../components/links'
import Spinner from '../components/spinner'


const StudyPage = () => {

    const { isAuthenticated } = useContext(AuthContext)
    const { topic_id } = useParams()

    const [topic, setTopic] = useState([])
    const [next, setNext] = useState(null)
    const [previous, setPrevious] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const checkAuthStatus = () => (
        isAuthenticated
            ? 'allow him study'
            : window.location.replace('/cta')
    )

    const getCourseTopics = async () => {
        await axios.get(`${home}/api/v1/topic/${topic_id}/contents/`)
            .then(res => {
                setTopic(res.data)
                setIsLoading(false)
            })
            .catch(err => {
                setError({ message: err.message })
                setIsLoading(false)
            })
    }

    const getNextTopic = async () => {
        await axios.get(`${home}/api/v1/topic/${topic_id}/get_next/`)
            .then(res => {
                setNext(res.data)
            })
            .catch(err => {
                setError({ message: err.message })
            })
    }

    const getPreviousTopic = async () => {
        await axios.get(`${home}/api/v1/topic/${topic_id}/get_previous/`)
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
    }, [])


    return (
        <div>
            <Nav />
            <div className='container text-center'>
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
                                                    <h3 style={{ marginTop: '5%' }}>{topic.topic}</h3>
                                                    {parse(topic.content)}
                                                    <hr style={{ width: '50vw', marginTop: '5%', marginBottom: '2%' }}/>
                                                    {/* pagination */}
                                                    {/* previous topic */}
                                                    <div className="d-flex flex-row flex-grow-1 justify-content-between">
                                                        <div>
                                                            {
                                                                previous
                                                                    ? <div onClick={() => window.location.replace(`/topic/${previous.id}/study`)}>
                                                                        <a><strong><i class="fa fa-arrow-left"> </i> {previous.title}</strong></a>
                                                                    </div>
                                                                    : <div>Mark</div>
                                                            }
                                                        </div>

                                                        {/* next topic */}
                                                        <div>
                                                            {
                                                                next
                                                                    ? <div onClick={() => window.location.replace(`/topic/${next.id}/study`)}>
                                                                        <a><strong>{next.title} <i class="fa fa-arrow-right"></i></strong></a>
                                                                    </div>
                                                                    : ''
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