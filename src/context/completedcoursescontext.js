import React, { createContext, useState, useEffect } from 'react'
import { message } from 'antd'

export const CompletedCourseContext = createContext()

const CompletedCourseContextProvider = props => {

    const [ completedCourses, setCompletedCourses ] = useState(() => {
        let localData = localStorage.getItem('completedCourses')
        return localData ? JSON.parse(localData) : []
    })

    const set_completedCourses = courses => {
        completedCourses.includes(courses) ? message.warning('Course already added') : setCompletedCourses([...completedCourses, courses])
    }

    const removeCourse = course => {
        let newCourses = completedCourses.filter(item => item !== course)
        setCompletedCourses(newCourses)
    }

    useEffect(() => {
        localStorage.setItem('completedCourses', JSON.stringify(completedCourses))
    }, [completedCourses])

    return (
        <CompletedCourseContext.Provider value={{ completedCourses, set_completedCourses, removeCourse }}>
            { props.children }
        </CompletedCourseContext.Provider>
    )
}

export default CompletedCourseContextProvider