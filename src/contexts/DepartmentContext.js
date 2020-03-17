import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'
import { prod_host } from '../components/Links'


export const DepartmentContext = createContext()

const DepartmentContextProvider = (props) => {

    const [departments, setDepartment] = useState([])
    const [departmentCourses, setDepartmentCourses] = useState([])

    const getDepartments = async () => {
        const res = await axios.get(`${prod_host}/departments/?is_active=true`)
        let data = res.data
        setDepartment(data)
    }
    const getDepartmentCourses = async (id) => {
        const res = await axios.get(`${prod_host}/departments/${id}/courses/?is_active=true`,)
        let data = res.data
        setDepartmentCourses(data)
    }

    useEffect(() => {
        getDepartments()
    },[])
    
    return(
        <DepartmentContext.Provider value={{departments, getDepartmentCourses, departmentCourses}}>
            { props.children }
        </DepartmentContext.Provider>
    )
}

export default DepartmentContextProvider