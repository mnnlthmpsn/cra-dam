import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/nav'
import Footer from '../components/footer'

const CourseDetail = () => {
    return (
        <div>
            <Nav />
            <h4 className="text-center" style={{marginTop: "24px",marginBottom: "24px"}}>Artificial Intelligence</h4>
            <div className="container text-center d-flex flex-column justify-content-center align-items-center align-content-center">
                <div className="card" style={{width: "80%"}}>
                    <div className="card-body m-sm-auto" style={{width: "90"}}>
                        <h4 className="card-title">Course Description</h4>
                        <h6 className="text-muted card-subtitle mb-2">CSAI 101</h6>
                    </div>
                </div>
                <p style={{width: "70%", minHeight: "100px", marginTop: "30px", marginBottom: "0px"}}>
                    Course Syllabus can go here
                </p>
                <Link to='/course/6/study'><button className="btn btn-success" type="button" style={{marginTop: "43px"}}>Study Now</button></Link>
            </div>
            <Footer />
        </div>
    )
}

export default CourseDetail