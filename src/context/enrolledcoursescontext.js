import React, { createContext, useState, useEffect } from 'react'

export const EnrolledCoursesContext = createContext()

export const EnrolledCoursesContextProvider = props => {

    const [ enrolledCourses, setEnrolledCourses ] = useState([])

    const addToEnrolledCourses = course => {
        setEnrolledCourses([...enrolledCourses, course])
    }

    useEffect(() => {
        localStorage.setItem('enrolledCourses', JSON.stringify(enrolledCourses))
    }, [enrolledCourses])

    return(
        <EnrolledCoursesContext.Provider value={{ enrolledCourses, addToEnrolledCourses }}>
            { props.children }
        </EnrolledCoursesContext.Provider>
    )
}

export default EnrolledCoursesContextProvider