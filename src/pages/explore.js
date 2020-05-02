import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Nav from '../components/nav'
import Footer from '../components/footer'
import Spinner from '../components/spinner'
import { home } from '../components/links'
import Search from '../components/search'

const Explore = () => {

    const [categories, setCategories] = useState([])
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)


    // get all course categories here
    const getCategories = () => {
        axios.get(`${home}/api/v1/category/`)
            .then(res => {
                setCategories(res.data)
                setIsLoading(false)
            })
            .catch(err => {
                setError({message: err.message})
                setIsLoading(false)
            })
    }

    useEffect(() => (
        getCategories()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    ), [])

    return (
        <div>
            <Nav />
            {
                isLoading
                    ? <Spinner />
                    :
                    <div style={{ marginTop: '20px' }}>
                        <Search />
                        <h4 className="text-center" style={{ marginTop: "24px", marginBottom: "24px" }}>Course Catalog</h4>
                        {error ? <h3 className="text-center ">{error.message}</h3>: <div></div>}
                        <div className="container">
                            <div className="row product-list dev">
                                {
                                    categories
                                        ? categories.map(course => (
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
                                        : 'do another thing'
                                }
                            </div>
                        </div>
                    </div>
            }

            <Footer />
        </div>
    )
}

export default Explore