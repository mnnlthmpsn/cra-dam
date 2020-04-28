import React from 'react'
import { Link } from 'react-router-dom'
import logo from './z.png'

const UnAuthNav = () => {

    return (
        <nav className="navbar navbar-dark navbar-expand-md sticky-top bg-success shadow d-lg-flex">
            <div className="container-fluid"><button className="navbar-toggler" data-toggle="collapse" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navcol-1">
                    <ul className="nav navbar-nav d-flex flex-row flex-grow-1 justify-content-around">
                        <Link to='/'><li className="nav-item" role="presentation"><span className="nav-link text-white" style={{ marginTop: "12px" }}><img src={logo} alt='damzinum' className='logo' /></span></li></Link>
                        <Link to='/explore'><li className="nav-item" role="presentation"><a className="nav-link"><button className="btn btn-outline-light" type="button" data-bs-hover-animate="rubberBand">Explore</button></a></li></Link>
                        <Link to='/cta'>
                            <li className="nav-item" role="presentation"><a className="nav-link" style={{ marginTop: "12px" }}>
                                <button className="btn btn-outline-light" type="button" style={{ marginLeft: "19px", marginTop: "-6px" }} >Get Started</button>
                            </a></li></Link>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default UnAuthNav