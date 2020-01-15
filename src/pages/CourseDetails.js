import React, { useContext, useEffect } from 'react'
import { MyCourseContext } from '../contexts/MyCourseContext'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { Col, Row, List } from 'antd'
import CourseTitles from '../components/CourseTitles'
import Event from '../components/Event'


const CourseDetails = props => {

    let { course_id, topic_id } = useParams()
    const { myCourses } = useContext(MyCourseContext)
    const currentCourse = myCourses.filter(myCourse => myCourse.id == course_id)
    const course = currentCourse[0]
    const topics = course.topic
    
    useEffect(() => {
        console.log(topics)
    })

    return (
        <div>
            <Navbar />
            <Row>
                <Col span={5}>
                    <CourseTitles />
                </Col>
                <Col span={12}>
                    <div className='ComponentContainer'>
                        <List 
                            itemLayout='vertical'
                            pagination={{
                                onChange: page => {
                                    console.log(page)
                                },
                                pageSize: 1
                            }}
                            dataSource={topics}
                            renderItem={item=>(
                                <List.Item key={item.id}>
                                    {item.content}
                                </List.Item>
                            )}
                        />
                    </div>
                </Col>
                <Col span={7}>
                    <Event />
                </Col>
            </Row>
        </div>
    )
}

export default CourseDetails