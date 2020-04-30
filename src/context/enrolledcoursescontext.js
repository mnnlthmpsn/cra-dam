import React, { createContext, useState } from 'react'

export const EnrolledCoursesContext = createContext()

export const EnrolledCoursesContextProvider = props => {

    const [ enrolledCourses, setEnrolledCourses ] = useState([])

    const addToEnrolledCourses = course => {
        setEnrolledCourses([...enrolledCourses, course])
    }

    return(
        <EnrolledCoursesContext.Provider value={{ enrolledCourses, addToEnrolledCourses }}>
            { props.children }
        </EnrolledCoursesContext.Provider>
    )
}

export default EnrolledCoursesContextProvider