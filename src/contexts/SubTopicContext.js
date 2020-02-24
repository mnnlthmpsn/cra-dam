import React, { createContext, useState } from 'react'
import axios from 'axios'
import { prod_host } from '../components/Links'

export const SubTopicContext = createContext()

export const SubTopicContextProvider = (props) => {

    const [subtopics, setSubTopics] = useState(() => {
        const localData = localStorage.getItem('subtopics')
        return localData ? JSON.parse(localData): []
    })

    const getSubTopics = async (topic_id) => {
        const res = await axios.get(`${prod_host}/topics/${topic_id}/subtopics`)
        let data = res.data
        setSubTopics(data)
        localStorage.setItem('subtopics', JSON.stringify(subtopics))
    }

    return(
        <SubTopicContext.Provider value={{subtopics, getSubTopics}}>
            {props.children}
        </SubTopicContext.Provider>
    )
}

export default SubTopicContextProvider