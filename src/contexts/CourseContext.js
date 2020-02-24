import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'
import { prod_host } from '../components/Links'


export const CourseContext = createContext()

const CourseContextProvider = (props) => {


    const [courses, setCourses] = useState(() => {
        const localData = localStorage.getItem('courses')
        return localData ? JSON.parse(localData): []
    })

    const getCourses = async () => {
        const res = await axios.get(`${prod_host}/courses`,)
        let data = res.data
        setCourses(data)
        localStorage.setItem('courses', JSON.stringify(courses))
    }

    useEffect(() => {
        getCourses()
    },[])
    
    return(
        <CourseContext.Provider value={{courses, setCourses}}>
            { props.children }
        </CourseContext.Provider>
    )
}

export default CourseContextProvider