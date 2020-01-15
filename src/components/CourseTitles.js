import React, { useContext, useState } from 'react'
import { List } from 'antd'
import { useHistory, useParams, Link } from 'react-router-dom'
import { MyCourseContext } from '../contexts/MyCourseContext'

const CourseTitles = () => {

    let history = useHistory()

    let { course_id, topic_id } = useParams()

    const { myCourses } = useContext(MyCourseContext)

    const currentCourse = myCourses.filter(myCourse => myCourse.id == course_id)
    const currentCourseTopics = currentCourse[0].topic


    return (
        <div>
            <h3 className='eventHeader'>Topics</h3>
            <div className='eventContainer'>
                <List
                    itemLayout='horizontal'
                    dataSource={currentCourseTopics}
                    size='small'
                    renderItem={item => (
                        <List.Item key={item.id}>
                            <List.Item.Meta
                                title={item.title}
                            />

                        </List.Item>
                    )}
                />
            </div>
        </div>
    )
}

export default CourseTitles