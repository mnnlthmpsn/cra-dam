import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/nav'
import Footer from '../components/footer'

const Dashboard = () => {

    const setfirst = () => {
        var second = document.getElementById('second')
        second.classList.remove('active')
        var first = document.getElementById('first')
        first.classList.toggle('active')
    }

    const setSecond = () => {
        var first = document.getElementById('first')
        first.classList.remove('active')
        var second = document.getElementById('second')
        second.classList.toggle('active')
    }

    return (
        <div>
            <Nav />
            <h4 className="text-center" style={{ marginTop: "24px", marginBottom: "24px" }}>Enrolled Courses</h4>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-24 col-md-24 col-lg-24">
                        <div className="card">
                            <div className="card-header">
                                <ul className="nav nav-tabs card-header-tabs" id="class-list" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link" role="tab" aria-controls="description" aria-selected="true" onClick={() => setfirst()}><h6>Enrolled Courses</h6></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" role="tab" aria-controls="history" aria-selected="false" onClick={() => setSecond()}><h6>Course Catalog</h6></a>
                                    </li>
                                </ul>
                            </div>
                            <div className="card-body">
                                <div className="tab-content mt-3">
                                    <div className="tab-pane active" id="first" role="tabpanel" aria-labelledby="description-tab">
                                        <h4 className="card-title">Enrolled Courses</h4>
                                        <p className="card-text">Courses you've started studying</p>
                                        {/* Enrolled courses go here */}
                                        <div class="container">
                                            <div class="row product-list dev">
                                                <div class="col-sm-6 col-md-4 product-item animation-element slide-top-left">
                                                    <div class="product-container">
                                                        <div class="row">
                                                            <div class="col-md-12"><a href="#" class="product-image"><img src="assets/img/iphone6.jpg" /></a></div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-8">
                                                                <h4 style={{ color: "black !important" }}><a href="#" style={{ color: "black" }}>Artificial Intelligence</a></h4>
                                                            </div>
                                                            <div class="col-4"><a href="#" class="small-text"></a></div>
                                                        </div>
                                                        <div class="product-rating"><a href="#" class="small-text">15 topics</a></div>
                                                        <div class="row">
                                                            <div class="col-12">
                                                                <p class="product-description">In computer science, artificial intelligence (AI), sometimes called machine intelligence, is intelligence demonstrated by machines, in contrast to the natural intelligence displayed by humans and animals. Leading AI textbooks define the field as the study of "intelligent agents": any device that perceives its environment and takes actions that maximize its chance of successfully achieving its goals</p>
                                                                <div class="row">
                                                                    <Link to='/course/6/study'><div class="col-6"><button class="btn btn-light" type="button" style={{ backgroundColor: "rgb(40,167,69)" }}>Continue to Study</button></div></Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-pane second" id="second" role="tabpanel" aria-labelledby="history-tab" >
                                        <h4 class="card-title">Course Catalog</h4>
                                        <p className="card-text">All Damzinium Courses</p>
                                        {/* Course Catalog here */}
                                        <div class="container">
                                            <div class="row product-list dev">
                                                <div class="col-sm-6 col-md-4 product-item animation-element slide-top-left">
                                                    <div class="product-container">
                                                        <div class="row">
                                                            <div class="col-md-12"><a href="#" class="product-image"><img src="assets/img/iphone6.jpg" /></a></div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-8">
                                                                <h4 style={{ color: "black !important" }}><a href="#" style={{ color: "black" }}>Artificial Intelligence</a></h4>
                                                            </div>
                                                            <div class="col-4"><a href="#" class="small-text"></a></div>
                                                        </div>
                                                        <div class="product-rating"><a href="#" class="small-text">15 topics</a></div>
                                                        <div class="row">
                                                            <div class="col-12">
                                                                <p class="product-description">In computer science, artificial intelligence (AI), sometimes called machine intelligence, is intelligence demonstrated by machines, in contrast to the natural intelligence displayed by humans and animals. Leading AI textbooks define the field as the study of "intelligent agents": any device that perceives its environment and takes actions that maximize its chance of successfully achieving its goals</p>
                                                                <div class="row">
                                                                    <Link to='/course/6/detail'><div class="col-6"><button class="btn btn-light" type="button" style={{ backgroundColor: "rgb(40,167,69)" }}>Enroll</button></div></Link>
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
                                                                <h4 style={{ color: "black !important" }}><a href="#" style={{ color: "black" }}>Artificial Intelligence</a></h4>
                                                            </div>
                                                            <div class="col-4"><a href="#" class="small-text"></a></div>
                                                        </div>
                                                        <div class="product-rating"><a href="#" class="small-text">15 topics</a></div>
                                                        <div class="row">
                                                            <div class="col-12">
                                                                <p class="product-description">In computer science, artificial intelligence (AI), sometimes called machine intelligence, is intelligence demonstrated by machines, in contrast to the natural intelligence displayed by humans and animals. Leading AI textbooks define the field as the study of "intelligent agents": any device that perceives its environment and takes actions that maximize its chance of successfully achieving its goals</p>
                                                                <div class="row">
                                                                    <Link to='/course/6/detail'><div class="col-6"><button class="btn btn-light" type="button" style={{ backgroundColor: "rgb(40,167,69)" }}>Enroll</button></div></Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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

export default Dashboard