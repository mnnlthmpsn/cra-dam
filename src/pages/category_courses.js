import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Nav from '../components/nav'
import Footer from '../components/footer'
import axios from 'axios'
import Spinner from '../components/spinner'
import { home } from '../components/links'


const CategoryCourses = () => {

    const { category_id } = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [category, setCategory] = useState(false)
    const [courses, setCourses] = useState([])
    const [errors, setErrors] = useState([])

    const getCategoryCourses = () => {
        axios.get(`${home}/api/v1/category/${category_id}/courses/`)
            .then(res => {
                setCourses(res.data)
                setIsLoading(false)
            })
            .catch(err => {
                setErrors(...errors, err)
                setIsLoading(false)
            })
    }

    const getCategoryDetails = () => {
        axios.get(`${home}/api/v1/category/${category_id}`)
            .then(res => {
                setCategory(res.data)
                setIsLoading(false)
            }).catch(err => setErrors(...errors, err))
    }

    useEffect(() => {
        getCategoryDetails()
        getCategoryCourses()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <Nav />
            <h4 className="text-center" style={{ marginTop: "24px", marginBottom: "24px" }}>{category.title}</h4>
            <div className="container">
                {
                    isLoading
                        ? <Spinner />
                        : <div className="row product-list dev">
                            {
                                courses
                                    ? courses.map(course => (
                                        <div key={course.id} className="col-sm-6 col-md-4 product-item animation-element slide-top-left">
                                            <div className="product-container">
                                                <div className="row">
                                                    {/* eslint-disable-next-line */}
                                                    <div className="col-md-12"><a className="product-image"><img src="/assets/img/iphone6.jpg" alt='iphone' /></a></div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-8">
                                                        {/* eslint-disable-next-line */}
                                                        <h4 style={{ color: "black !important" }}><a style={{ color: "black" }}>{course.title}</a></h4>
                                                    </div>
                                                        {/* eslint-disable-next-line */}
                                                    <div className="col-4"><a className="small-text"></a></div>
                                                </div>
                                                    {/* eslint-disable-next-line */}
                                                <div className="product-rating"><a className="small-text">15 topics</a></div>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <p className="product-description">{course.description}</p>
                                                        <div className="row">
                                                            <Link to={`/course/${course.id}/detail`}><div className="col-6"><button className="btn btn-light" type="button" style={{ backgroundColor: "rgb(40,167,69)" }}>View</button></div></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                    : 'do another thing'
                            }
                        </div>
                }
            </div>
            <Footer />
        </div>
    )
}

export default CategoryCourses