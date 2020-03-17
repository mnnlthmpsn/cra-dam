import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import { Col, Row, List, Button } from 'antd'
import Event from '../components/Event'
import { DepartmentContext } from '../contexts/DepartmentContext'
import { MyCourseContext } from '../contexts/MyCourseContext'
import { TopicContext } from '../contexts/TopicContext'
import { useHistory } from 'react-router'
import { message } from 'antd'


const DepartmentDetails = props => {

    const history = useHistory()

    const { departmentCourses } = useContext(DepartmentContext)
    const { AddCourse } = useContext(MyCourseContext)
    const { getTopics } = useContext(TopicContext)


    const ReadCourse = (item) => {
        getTopics(item.id)
        history.push(`/course/${item.id}`)
    }

    const AddToLibrary = item => {
        AddCourse(item)
        message.success(`${item.title} added to Library successfully`)
    }

    return (
        <div>
            <Navbar />
            <Row>
                <Col xs={24} sm={24} md={17} lg={17}>
                    <div className='ComponentContainer'>
                        <List
                            basic
                            header={<h3>Read Course</h3>}
                            itemLayout='vertical'
                            pagination={{
                                onChange: page => {
                                    console.log(page)
                                },
                                pageSize: 10
                            }}
                            dataSource={departmentCourses}
                            renderItem={item => (
                                <List.Item key={item.id} 
                                    extra={
                                        <div>
                                            <Button type='primary' onClick={() => ReadCourse(item)}>Continue</Button>
                                            <Button type='default' onClick={() => AddToLibrary(item)} style={{ marginLeft: 10 }}>Add to Library</Button>
                                        </div>
                                    }
                                >
                                    <List.Item.Meta 
                                        title={<h4>{item.title}</h4>}
                                    />
                                </List.Item>
                            )}
                        />
                    </div>
                    <div className='col-button' style={{marginLeft: '20%'}}>
                        <Button onClick={() => {
                            history.push('/dashboard')
                        }} type='primary'>Return to Library</Button>
                        <Button onClick={() => {
                            history.push('/departments')
                        }} style={{marginLeft: '1%'}}>Return to Catalog</Button>
                    </div>
                </Col>
                <Col span={7} className='event'>
                    <Event />
                </Col>
            </Row>
        </div>
    )
}

export default DepartmentDetails