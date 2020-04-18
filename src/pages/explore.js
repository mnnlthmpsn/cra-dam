import React from 'react'
import { Link } from 'react-router-dom'
import ExploreNav from '../components/explorenav'
import Footer from '../components/footer'

const Explore = () => {

    return (
        <div>
            <ExploreNav />
            <div className="d-flex flex-row flex-grow-1 justify-content-center align-items-center" style={{ minHeight: "25px" }}><input className="border rounded border-success justify-content-center align-items-center align-content-center" type="search" style={{ width: "277px", marginTop: "25px", height: "40px", padding: "9px" }} /></div>
            <div className='d-flex flex-row flex-grow-1 justify-content-center align-items-center' id="searchItem"></div>
            <h4 className="text-center" style={{ marginTop: "24px", marginBottom: "24px" }}>Course Catalog</h4>
            <div class="container">
                <div class="row product-list dev">
                    <div class="col-sm-6 col-md-4 product-item animation-element slide-top-left">
                        <div class="product-container">
                            <div class="row">
                                <div class="col-md-12"><a href="#" class="product-image"><img src="assets/img/iphone6.jpg" /></a></div>
                            </div>
                            <div class="row">
                                <div class="col-8">
                                    <h4 style={{ color: "black !important" }}><a href="#" style={{ color: "black" }}>Business Administration</a></h4>
                                </div>
                                <div class="col-4"><a href="#" class="small-text"></a></div>
                            </div>
                            <div class="product-rating"><a href="#" class="small-text">15 topics</a></div>
                            <div class="row">
                                <div class="col-12">
                                    <p class="product-description">Business administration is the administration of a business. It includes all aspects of overseeing and supervising business operations. From the point of view of management and leadership, it also covers fields that include accounting, finance, project management and marketing</p>
                                    <div class="row">
                                        <Link to='/catalog'><div class="col-6"><button class="btn btn-light" type="button" style={{ backgroundColor: "rgb(40,167,69)" }}>Enroll</button></div></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6 col-md-4 product-item animation-element slide-top-left">
                        <div class="product-container">
                            <div class="row">
                                <div class="col-md-12"><a href="#" class="product-image"><img src="assets/img/iphone6.jpg" /></a></div>
                            </div>
                            <div class="row">
                                <div class="col-8">
                                    <h4 style={{ color: "black !important" }}><a href="#" style={{ color: "black" }}>Computer Science</a></h4>
                                </div>
                                <div class="col-4"><a href="#" class="small-text"></a></div>
                            </div>
                            <div class="product-rating"><a href="#" class="small-text">15 topics</a></div>
                            <div class="row">
                                <div class="col-12">
                                    <p class="product-description">Computer science is the study of processes that interact with data and that can be represented as data in the form of programs. It enables the use of algorithms to manipulate, store, and communicate digital information</p>
                                    <div class="row">
                                        <Link to='/catalog'><div class="col-6"><button class="btn btn-light" type="button" style={{ backgroundColor: "rgb(40,167,69)" }}>Enroll</button></div></Link>
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