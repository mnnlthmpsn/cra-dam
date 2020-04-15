import React from 'react'
import { Link } from 'react-router-dom'
import UnAuthNav from '../components/unauthnav'
import Footer from '../components/footer'

const CategoryCourses = () => {
    return (
        <div>
            <UnAuthNav />
            <h4 class="text-center" style={{ marginTop: "24px", marginBottom: "24px" }}>Computer Science</h4>
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
            <Footer />
        </div>
    )
}

export default CategoryCourses