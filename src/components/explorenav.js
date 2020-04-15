import React from 'react'

const ExploreNav = () => {
    return (
        <nav className="navbar navbar-dark navbar-expand-md sticky-top bg-success shadow d-lg-flex">
            <div className="container-fluid"><button className="navbar-toggler" data-toggle="collapse" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navcol-1">
                    <ul className="nav navbar-nav d-flex flex-row flex-grow-1 justify-content-around">
                        <li className="nav-item" role="presentation"><a className="nav-link text-white" href="#" style={{ marginTop: "12px" }}>Damzinium</a></li>
                        <li className="nav-item" role="presentation"><a className="nav-link" href="#" style={{ marginTop: "12px" }}><button className="btn btn-outline-light" type="button" style={{ marginLeft: "19px", marginTop: "-6px" }}>Login</button><button className="btn btn-outline-light" type="button" style={{ marginLeft: "19px", marginTop: "-6px" }}>Register</button></a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default ExploreNav