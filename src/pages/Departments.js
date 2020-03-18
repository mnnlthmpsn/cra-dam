import React, { useState, useContext } from 'react'
import Navbar from '../components/Navbar'
import Event from '../components/Event'
import FooterContent from '../components/FooterContent'
import { Row, Col, List, Button } from 'antd'
import { DepartmentContext } from '../contexts/DepartmentContext'
import { useHistory } from 'react-router-dom'
import logo from '../assets/img/d-logo.png'


const Departments = () => {

    const history = useHistory()

    const { departments, getDepartmentCourses } = useContext(DepartmentContext)
    const [isLoading, setIsLoading] = useState(false)

    const DepartmentDetail = (item) => {
        setIsLoading(true)
        history.push(`/department/${item}/courses/`)
        getDepartmentCourses(item)
    }

    return (
        <div>
            <Navbar />
            <Row>
                <Col span={5}></Col>
                <Col xs={24} sm={24} md={12} lg={12}>
                    <div className='ComponentContainer'>
                        <List
                            basic
                            header={<h3>All Courses</h3>}
                            itemLayout='vertical'
                            pagination={{
                                onChange: page => {
                                    console.log(page)
                                },
                                pageSize: 4
                            }}
                            dataSource={departments}
                            renderItem={item => (
                                <List.Item
                                    key={item.id}
                                    extra={
                                        // <Button onClick={() => AddToMyCourse(item)} type='primary'>Add</Button>
                                        <Button onClick={() => DepartmentDetail(item.id)} type='primary' loading={isLoading}>View Courses</Button>
                                    }
                                >
                                    <List.Item.Meta
                                        avatar={<img className='logo' src={logo} alt='damzinium' />}
                                        title={item.name}
                                        description={item.insitution}
                                    />
                                </List.Item>
                            )}
                        />
                    </div>
                    <div className='col-button'>
                        <Button onClick={() => {
                            history.push('/dashboard')
                        }} type='primary'>Return to Library</Button>
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

export default Departments