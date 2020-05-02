import React, { createContext, useState, useEffect } from 'react'

export const CompletedCourseContext = createContext()

const CompletedCourseContextProvider = props => {

    const [ completedCourses, setCompletedCourses ] = useState(() => {
        let localData = localStorage.getItem('completedCourses')
        return localData ? JSON.parse(localData) : []
    })

    const set_completedCourses = courses => {
        setCompletedCourses([...completedCourses, courses])
    }

    useEffect(() => {
        localStorage.setItem('completedCourses', JSON.stringify(completedCourses))
    }, [completedCourses])

    return (
        <CompletedCourseContext.Provider value={{ completedCourses, set_completedCourses }}>
            { props.children }
        </CompletedCourseContext.Provider>
    )
}

export default CompletedCourseContextProvider