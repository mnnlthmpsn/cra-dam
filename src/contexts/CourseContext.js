import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const CourseContext = createContext()

const CourseContextProvider = (props) => {

    const [ courses, setCourses ] = useState()

    useEffect(() => {
        getCourses()
    })

    const getCourses = async () => {
        let res = await axios.get('http://localhost:8000/library/api/courses')
        let data = res.data
        setCourses(data)
    }

    return(
        <CourseContext.Provider value={{courses, setCourses}}>
            { props.children }
        </CourseContext.Provider>
    )
}

export default CourseContextProvider