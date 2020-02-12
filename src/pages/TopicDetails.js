import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import ReactHtmlParser from 'react-html-parser';
import Navbar from '../components/Navbar'
import { Col, Row, List, Button } from 'antd'
import { SubTopicContext } from '../contexts/SubTopicContext'


const TopicDetails = props => {

    const { subtopics } = useContext(SubTopicContext)
    const history = useHistory()

    return (
        <div>
            <Navbar />
            <Row>
                <Col span={2}>
                    <div></div>
                </Col>
                <Col span={20}>
                    <div className='ComponentContainer'>
                        <List
                            itemLayout='vertical'
                            pagination={{
                                onChange: page => {
                                    console.log(page)
                                },
                                pageSize: 1
                            }}
                            dataSource={subtopics}
                            renderItem={item => (
                                <List.Item key={item.id}>
                                    <List.Item.Meta 
                                        title={<h2 style={{ color: 'green'}}>{item.title}</h2>}
                                        description={<div><h5>{ ReactHtmlParser(item.content) }</h5></div>}
                                    />
                                </List.Item>
                            )}
                        />
                    </div>
                    <Button type='primary' onClick={() => history.goBack()} style={{margin: '20px'}}>Go Back</Button>
                </Col>
                <Col span={2}>
                    <div></div>
                </Col>
            </Row>
        </div>
    )
}

export default TopicDetails