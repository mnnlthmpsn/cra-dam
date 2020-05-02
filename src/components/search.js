import React from 'react'


const Search = props => {
    return (
        <div className="d-flex flex-row flex-grow-1 justify-content-center align-items-center" style={{ height: "35px" }}>
            <input className="border rounded border-success justify-content-center" type="search" placeholder="... Search" style={{ width: "277px", marginTop: "20px", marginBottom: "40px", height: "30px", padding: "9px" }} />
        </div>
    )
}

export default Search