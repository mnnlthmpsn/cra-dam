import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Nav from '../components/nav'
import Footer from '../components/footer'
import Spinner from '../components/spinner'

const Explore = () => {

    const [categories, setCategories] = useState([])
    const [errors, setErrors] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    // get all course categories here
    const getCategories = () => {
        axios.get('http://dapi.herokuapp.com/api/v1/category/')
            .then(res => {
                setCategories(res.data)
                setIsLoading(false)
            })
            .catch(err => {
                setErrors(err)
                setIsLoading(false)
            })
    }

    useEffect(() => (
        getCategories()
    ), [])

    return (
        <div>
            <Nav />
            {
                isLoading
                    ? <Spinner />
                    :
                    <div>
                        <div className="d-flex flex-row flex-grow-1 justify-content-center align-items-center" style={{ minHeight: "25px" }}><input className="border rounded border-success justify-content-center align-items-center align-content-center" type="search" style={{ width: "277px", marginTop: "25px", height: "40px", padding: "9px" }} /></div>
                        <div className='d-flex flex-row flex-grow-1 justify-content-center align-items-center' id="searchItem"></div>
                        <h4 className="text-center" style={{ marginTop: "24px", marginBottom: "24px" }}>Course Catalog</h4>

                        <div class="container">
                            <div class="row product-list dev">
                                {
                                    categories
                                        ? categories.map(course => (
                                            <div class="col-sm-6 col-md-4 product-item animation-element slide-top-left">
                                                <div class="product-container">
                                                    <div class="row">
                                                        <div class="col-md-12"><a href="#" class="product-image"><img src="assets/img/iphone6.jpg" /></a></div>
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
                                                                <Link to={`/category/${course.id}/courses`}><div class="col-6"><button class="btn btn-light" type="button" style={{ backgroundColor: "rgb(40,167,69)" }}>View Courses</button></div></Link>
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