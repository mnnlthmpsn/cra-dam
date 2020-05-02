import React, { useState, useEffect, useContext } from 'react'
import Nav from '../components/nav'
import Footer from '../components/footer'
import { AuthContext } from '../context/authcontext'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import { home } from '../components/links'


const Landing = () => {

    const { isAuthenticated } = useContext(AuthContext)
    const history = useHistory()

    const [popularCourses, setPopularCourses] = useState([])
    const [errors, setErrors] = useState([])

    const getPopularCourses = () => {
        axios.get(`${home}/api/v1/course/popular/`)
            .then(res => (
                res
                    ? setPopularCourses(res.data)
                    : console.log(errors)
            ))
            .catch(err => (
                setErrors(err)
            ))
    }

    const checkAuthStat = () => (
        isAuthenticated
            ? history.push('/dashboard')
            : 'no action'
    )

    useEffect(() => {
        checkAuthStat()
        getPopularCourses()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <Nav />
            <section className="d-flex d-lg-flex justify-content-lg-center align-items-lg-center" style={{ minHeight: "70vh", backgroundColor: "rgba(94,89,67,0.69)", marginTop: "-26px", backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/img/banner2.jpg'})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", color: "rgb(0,0,0)" }}>
                <div className="text-center d-flex d-lg-flex flex-column flex-grow-1 align-items-center align-content-center flex-wrap align-items-lg-center">
                    <h3 className="text-center d-lg-flex justify-content-lg-center" style={{ marginTop: "0px", paddingTop: "125px" }}>Welcome to Damzinium</h3><Link to='/explore'><button className="btn btn-success" type="button" data-bs-hover-animate="rubberBand" style={{ width: "100px", marginTop: "16px" }}>Explore</button></Link></div>
            </section>

            <h4 className="text-center d-lg-flex justify-content-lg-center" style={{ marginTop: "60px", marginBottom: "60px" }}>We've Upgraded</h4>
            <div className="text-center" style={{ marginTop: "30px", marginBottom: "30px" }}>
                <div className="container">
                    <div className="row Icon">
                        <div className="col-md-4" data-bs-hover-animate="bounce" style={{ marginBottom: "20px" }}>
                            <div className="card">
                                <div className="card-body border-danger"><i className="icon ion-speedometer" style={{ marginBottom: "20px", color: "#ad0100" }}></i>
                                    <h6 className="text-muted card-subtitle mb-2">Subtitle</h6>
                                    {/* eslint-disable-next-line */}
                                    <p className="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p><a className="card-link">Link</a><a className="card-link">Link</a></div>
                            </div>
                        </div>
                        <div className="col-md-4" data-bs-hover-animate="bounce" style={{ marginBottom: "20px" }}>
                            <div className="card">
                                <div className="card-body"><i className="material-icons" style={{ marginBottom: "20px", color: "#ad0100" }}>devices_other</i>
                                    <h6 className="text-muted card-subtitle mb-2">Subtitle</h6>
                                    {/* eslint-disable-next-line */}
                                    <p className="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p><a className="card-link" >Link</a><a className="card-link">Link</a></div>
                            </div>
                        </div>
                        <div className="col-md-4" data-bs-hover-animate="bounce">
                            <div className="card">
                                <div className="card-body"><i className="fa fa-heart" style={{ marginBottom: "20px", color: "#ad0100" }}></i>
                                    <h6 className="text-muted card-subtitle mb-2">Subtitle</h6>
                                    {/* eslint-disable-next-line */}
                                    <p className="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p><a className="card-link" href="#">Link</a><a className="card-link"
                                    >Link</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <hr style={{ width: "200px", marginTop: "67px", marginBottom: "110px" }} />

            <section style={{ minHeight: "50vh", backgroundColor: "#0F7C07", marginTop: "-26px" }}>
                <div className="text-center d-flex d-lg-flex flex-column flex-grow-1 align-items-center align-content-center flex-wrap align-items-lg-center">
                    <h3 className="text-center d-lg-flex justify-content-lg-center" style={{ marginTop: "0px", paddingTop: "125px", color: "rgb(255,255,255)" }}>Start Studying Now</h3><Link to='/explore'><button className="btn btn-outline-light" type="button" data-bs-hover-animate="rubberBand" style={{ width: "100px", marginTop: "16px" }}>Explore</button></Link></div>
            </section>

            <div className="article-list">
                <div className="container">
                    <div className="intro">
                        <h2 className="text-center">Popular Courses</h2>
                    </div>
                    {
                        popularCourses
                            ? popularCourses.map(course => (

                                <div className="row articles" key={course.id}>
                                    {/* eslint-disable-next-line */}
                                    <div className="col-sm-6 col-md-4 item"><a href="#"><img className="img-fluid" src="assets/img/loft.jpg" alt='loft' /></a>
                                        <h3 className="name">{course.title}</h3>
                                        {/* eslint-disable-next-line */}
                                        <p className="description">{course.description}</p><a href="#" className="action"><i className="fa fa-arrow-circle-right"></i></a>
                                    </div>
                                </div>
                            ))
                            : console.log('no popular courses found')
                    }
                </div>
            </div>

            {/* testimonials */}
            <div className="testimonials-clean">
                <div className="container">
                    <div className="intro">
                        <h2 className="text-center">Testimonials </h2>
                        <p className="text-center">Our customers love us! Read what they have to say below. Aliquam sed justo
                    ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae.</p>
                    </div>
                    <div className="row people">
                        <div className="col-md-6 col-lg-4 item">
                            <div className="box">
                                <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus.
                            Praesent aliquam in tellus eu gravida. Aliquam varius finibus est.</p>
                            </div>
                            <div className="author"><img className="rounded-circle" src="assets/img/1.jpg" alt='user' />
                                <h5 className="name">Ben Johnson</h5>
                                <p className="title">CEO of Company Inc.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 item">
                            <div className="box">
                                <p className="description">Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, et
                            interdum justo suscipit id.</p>
                            </div>
                            <div className="author"><img className="rounded-circle" src="assets/img/3.jpg" alt='user' />
                                <h5 className="name">Carl Kent</h5>
                                <p className="title">Founder of Style Co.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 item">
                            <div className="box">
                                <p className="description">Aliquam varius finibus est, et interdum justo suscipit. Vulputate quis
                            leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu.</p>
                            </div>
                            <div className="author"><img className="rounded-circle" src="assets/img/2.jpg" alt='user' />
                                <h5 className="name">Emily Clark</h5>
                                <p className="title">Owner of Creative Ltd.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default Landing