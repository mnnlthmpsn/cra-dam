import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import { Button, List, Avatar, Row, Col, message, Empty } from 'antd'
import { useHistory } from 'react-router-dom'
import Event from '../components/Event'
import { MyCourseContext } from '../contexts/MyCourseContext'

const Dashboard = () => {

    const history = useHistory()

    const { myCourses, RemoveCourse } = useContext(MyCourseContext)

    const AddCourse = () => {
        history.push('/courses')
    }

    const RemoveMyCourse = (item) => {
        RemoveCourse(item.id)
        message.warning(`${item.title} removed from Library`)
    }

    const ReadCourse = (item) => {
        history.push(`/course/${item.id}/topic/${item.topic[0].id}`)
    }

    return (
        <div>
            <Navbar />
            <Row>
                <Col span={5}></Col>
                <Col span={12}>
                    <div className='ComponentContainer'>
                        <List
                            header={<h3>Library</h3>}
                            itemLayout='vertical'
                            pagination={{
                                onChange: page => {
                                    console.log(page)
                                },
                                pageSize: 3
                            }}
                            dataSource={myCourses}
                            size='large'
                            renderItem={item => (
                                <List.Item key={item.id}
                                    extra={
                                        <div>
                                            <Button onClick={() => ReadCourse(item)} type='primary'>Read</Button>
                                            <Button onClick={() => RemoveMyCourse(item)} style={{ marginLeft: 10 }} type='danger'>Delete</Button>
                                        </div>
                                    }
                                >
                                    <List.Item.Meta
                                        avatar={<Avatar />}
                                        title={item.name}
                                        description={item.institution}
                                    />
                                </List.Item>
                            )}
                        />
                    </div>
                    <div style={{ marginTop: 8 }}>
                        <Button onClick={AddCourse} type='primary'>Add Courses</Button>
                    </div>
                </Col>
                <Col span={7}>
                    <Event />
                </Col>
            </Row>
        </div>
    )
}

export default Dashboard