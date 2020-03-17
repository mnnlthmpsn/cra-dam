import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'
import { prod_host } from '../components/Links'


export const CourseContext = createContext()

const CourseContextProvider = (props) => {


    const [courses, setCourses] = useState([])

    const getCourses = async () => {
        const res = await axios.get(`${prod_host}/departments/?is_active=true`,)
        let data = res.data
        setCourses(data)
    }

    useEffect(() => {
        getCourses()
    },[])
    
    return(
        <CourseContext.Provider value={{courses, setCourses, getCourses}}>
            { props.children }
        </CourseContext.Provider>
    )
}

export default CourseContextProvider