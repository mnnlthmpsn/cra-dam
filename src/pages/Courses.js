import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import Event from '../components/Event'
import { Row, Col, List, Button, Avatar, message } from 'antd'
import { CourseContext } from '../contexts/CourseContext'
import { MyCourseContext } from '../contexts/MyCourseContext'
import { useHistory } from 'react-router-dom'

const Courses = () => {

    const history = useHistory()

    const { courses } = useContext(CourseContext)
    const { AddCourse } = useContext(MyCourseContext)

    const AddToMyCourse = (item) => {
        AddCourse(item)
        message.success(`${item.name} added to Library`)
    }

    return (
        <div>
            <Navbar />
            <Row>
                <Col span={5}></Col>
                <Col span={12}>
                    <div className='ComponentContainer'>
                        <List
                            header={<h3>All Courses</h3>}
                            itemLayout='vertical'
                            pagination={{
                                onChange: page => {
                                    console.log(page)
                                },
                                pageSize: 4
                            }}
                            dataSource={courses}
                            renderItem={item => (
                                <List.Item
                                    key={item.id}
                                    extra={
                                        <Button onClick={() => AddToMyCourse(item)} type='primary'>Add</Button>
                                    }
                                >
                                    <List.Item.Meta
                                        avatar={<Avatar />}
                                        title={item.name}
                                        description={item.insitution}
                                    />
                                </List.Item>
                            )}
                        />
                    </div>
                    <div style={{ marginTop: 8 }}>
                        <Button onClick={() => {
                            history.push('/dashboard')
                        }} type='primary'>Return to Library</Button>
                    </div>
                </Col>
                <Col span={7}>
                    <Event />
                </Col>
            </Row>
        </div>
    )
}

export default Courses