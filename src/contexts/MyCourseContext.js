import React, { createContext, useState, useEffect } from 'react'

export const MyCourseContext = createContext()

const MyCourseContextProvider = props => {

    const [myCourses, setMyCourses] = useState(() => {
        const localData = localStorage.getItem('myCourses')
        return localData ? JSON.parse(localData): []
    })

    const AddCourse = (item) => {
        setMyCourses([...myCourses, item])
    } 
    
    const RemoveCourse = (id) => {
        setMyCourses(myCourses.filter(myCourse => myCourse.id !== id))
    }
    
    useEffect(() => {
        localStorage.setItem('myCourses', JSON.stringify(myCourses))
    }, [myCourses])

    return (
        <MyCourseContext.Provider value={{ myCourses, AddCourse, RemoveCourse }}>
            {props.children}
        </MyCourseContext.Provider>
    )
}

export default MyCourseContextProvider