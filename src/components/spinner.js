import React from 'react'

const Spinner = () => {
    return (
        <div className="d-flex justify-content-center" style={{ height: '100vh' }}>
            <div style={{ marginTop: '45vh' }}>
                <div className="spinner-grow text-success" style={{width: '3rem', height: '3rem'}} role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-grow text-danger" style={{width: '3rem', height: '3rem'}}  role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-grow text-warning" style={{width: '3rem', height: '3rem'}}  role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </div>
    )
}

export default Spinner