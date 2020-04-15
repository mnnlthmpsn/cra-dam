import React from 'react'
import { Link } from 'react-router-dom'
import ExploreNav from '../components/explorenav'
import Footer from '../components/footer'

const Explore = () => {
    return (
        <div>
            <ExploreNav />
            <div className="d-flex flex-row flex-grow-1 justify-content-center align-items-center" style={{ minHeight: "25px" }}><input className="border rounded border-success justify-content-center align-items-center align-content-center" type="search" autofocus="" style={{ width: "277px", marginTop: "25px", height: "40px", padding: "9px" }} /></div>
            <h4 className="text-center" style={{ marginTop: "24px", marginBottom: "24px" }}>Course Catalog</h4>
            <div className="container">
                <div className="row product-list dev">
                    <div className="col-sm-6 col-md-4 product-item animation-element slide-top-left">
                        <div className="product-container">
                            <div className="row">
                                <div className="col-md-12"><a href="#" className="product-image"><img src="../../assets/img/iphone6.jpg" /></a></div>
                            </div>
                            <div className="row">
                                <div className="col-8">
                                    <h2><a href="#">Computer Science</a></h2>
                                </div>
                            </div>
                            <div className="product-rating"><a href="#" className="small-text">82 Course Items</a></div>
                            <div className="row">
                                <div className="col-12">
                                    <p className="product-description">Computer science is the study of processes that interact with data and that can be represented as data in the form of programs. It enables the use of algorithms to manipulate, store, and communicate digital information. 
                                    A computer scientist studies the theory of computation and the design of software systems</p>
                                    <div className="row">
                                        <Link to='/catalog'><div className="col-6"><button className="btn btn-light" type="button" style={{ backgroundColor: "rgb(40,167,69)" }}>Continue to Course</button></div></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Explore