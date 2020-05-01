import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
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
            <h4 class="text-center" style={{ marginTop: "24px", marginBottom: "24px" }}>{category.title}</h4>
            <div class="container">
                {
                    isLoading
                        ? <Spinner />
                        : <div class="row product-list dev">
                            {
                                courses
                                    ? courses.map(course => (
                                        <div class="col-sm-6 col-md-4 product-item animation-element slide-top-left">
                                            <div class="product-container">
                                                <div class="row">
                                                    <div class="col-md-12"><a href="#" class="product-image"><img src="assets/img/iphone6.jpg" alt="iphone"/></a></div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-8">
                                                        <h4 style={{ color: "black !important" }}><a href="#" style={{ color: "black" }}>{course.title}</a></h4>
                                                    </div>
                                                    <div class="col-4"><a href="#" class="small-text"></a></div>
                                                </div>
                                                <div class="product-rating"><a href="#" class="small-text">15 topics</a></div>
                                                <div class="row">
                                                    <div class="col-12">
                                                        <p class="product-description">{course.description}</p>
                                                        <div class="row">
                                                            <Link to={`/course/${course.id}/detail`}><div class="col-6"><button class="btn btn-light" type="button" style={{ backgroundColor: "rgb(40,167,69)" }}>Enroll</button></div></Link>
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