import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import FooterContent from '../components/FooterContent'
import { Col, Row, List, Button } from 'antd'
import Event from '../components/Event'
import { TopicContext } from '../contexts/TopicContext'
import { SubTopicContext } from '../contexts/SubTopicContext'
import { useHistory } from 'react-router'


const CourseDetails = () => {

    const history = useHistory()

    const { topics } = useContext(TopicContext)
    const { getSubTopics } = useContext(SubTopicContext)

    const ReadTopic = (item) => {
        getSubTopics(item.id)
        history.push(`/topic/${item.id}`)
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
                            dataSource={topics}
                            renderItem={item => (
                                <List.Item key={item.id} 
                                    extra={
                                        <div>
                                            <Button type='primary' onClick={() => ReadTopic(item)}>Continue</Button>
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
                    </div>
                </Col>
                <Col span={7} className='event'>
                    <Event />
                </Col>
            </Row>
            <FooterContent />
        </div>
    )
}

export default CourseDetails