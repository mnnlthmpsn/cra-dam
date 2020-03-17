import React, { useContext, useState } from 'react'
import Navbar from '../components/Navbar'
import FooterContent from '../components/FooterContent'
import { Button, List, Avatar, Row, Col, message, Form } from 'antd'
import { useHistory } from 'react-router-dom'
import Event from '../components/Event'
import { MyCourseContext } from '../contexts/MyCourseContext'
import { TopicContext } from '../contexts/TopicContext'

const Dashboard = () => {

    const history = useHistory()

    const [loading, setLoading] = useState(false)
    const { myCourses, RemoveCourse } = useContext(MyCourseContext)
    const { getTopics } = useContext(TopicContext)

    const AddCourse = () => {
        setLoading(true)
        history.push('/departments')
    }

    const RemoveMyCourse = (item) => {
        RemoveCourse(item.id)
        message.warning(`${item.title} removed from Library`)
    }

    const ReadCourse = (item) => {
        getTopics(item.id)
        history.push(`/course/${item.id}`)
    }

    return (
        <div>
            <Navbar />
            <Row>
                <Col span={5}></Col>
                <Col xs={24} sm={24} md={12} lg={12}>
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
                                        title={item.title}
                                        description={`Course Code: ${item.code}`}
                                    />
                                </List.Item>
                            )}
                        />
                    </div>
                    <div className='col-button'>
                        <Form>
                            <Form.Item>
                                <Button onClick={AddCourse} type='primary' loading={loading}>Course Catalog</Button>
                            </Form.Item>
                        </Form>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={7} lg={7} className='event'>
                    <Event />
                </Col>
            </Row>
            <FooterContent />
        </div>
    )
}

export default Dashboard