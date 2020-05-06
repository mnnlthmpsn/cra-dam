import React, { createContext, useState, useEffect } from 'react'

export const EnrolledCoursesContext = createContext()

export const EnrolledCoursesContextProvider = props => {

    const [ enrolledCourses, setEnrolledCourses ] = useState(() => {
        let localData = localStorage.getItem('enrolledCourses')
        return localData ? JSON.parse(localData) : []
    })

    const addToEnrolledCourses = course => {
        let newCourses = enrolledCourses.filter(item => item.title === course.title)
        newCourses.length === 0 ? setEnrolledCourses([...enrolledCourses, course]) : console.log('https://www.damzinium.com')
    }

    const removeEnrolled = course => {
        let newCourses = enrolledCourses.filter(item => item !== course)
        setEnrolledCourses(newCourses)
    }

    useEffect(() => {
        localStorage.setItem('enrolledCourses', JSON.stringify(enrolledCourses))
    }, [enrolledCourses])

    return(
        <EnrolledCoursesContext.Provider value={{ enrolledCourses, addToEnrolledCourses, removeEnrolled }}>
            { props.children }
        </EnrolledCoursesContext.Provider>
    )
}

export default EnrolledCoursesContextProvider