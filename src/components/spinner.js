import React from 'react'

const Spinner = () => {
    return (
        <div className="d-flex justify-content-center" style={{ height: '100vh' }}>
            <div style={{ marginTop: '45vh' }}>
                <div class="spinner-grow text-success" style={{width: '3rem', height: '3rem'}} role="status">
                    <span class="sr-only">Loading...</span>
                </div>
                <div class="spinner-grow text-danger" style={{width: '3rem', height: '3rem'}}  role="status">
                    <span class="sr-only">Loading...</span>
                </div>
                <div class="spinner-grow text-warning" style={{width: '3rem', height: '3rem'}}  role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
        </div>
    )
}

export default Spinner