import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'
import { custom_host_courses } from '../components/Links'


export const CourseContext = createContext()

const CourseContextProvider = (props) => {


    const [courses, setCourses] = useState(() => {
        const localData = localStorage.getItem('courses')
        return localData ? JSON.parse(localData): []
    })

    const getCourses = async () => {
        const res = await axios.get(custom_host_courses,)
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