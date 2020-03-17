import React, { createContext, useState } from 'react'
import axios from 'axios'
import { prod_host } from '../components/Links'


export const TopicContext = createContext()

export const TopicContextProvider = (props) => {

    const [topics, setTopics] = useState(() => {
        const localData = localStorage.getItem('topics')
        return localData ? JSON.parse(localData): []
    })

    const getTopics = async (course_id) => {
        const res = await axios.get(`${prod_host}/courses/${course_id}/topics`)
        let data = res.data
        setTopics(data)
        localStorage.setItem('topics', JSON.stringify(topics))
        console.log(topics)
    }

    return(
        <TopicContext.Provider value={{topics, getTopics}}>
            {props.children}
        </TopicContext.Provider>
    )
}

export default TopicContextProvider