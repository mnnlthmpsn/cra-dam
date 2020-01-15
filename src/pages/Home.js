import React, { useState, useContext } from 'react'
import HomeNav from '../components/HomeNav'
import SignUpForm from '../components/SignUpForm'
import { Row, Col, Layout, Affix } from 'antd'

const { Footer, Content } = Layout;

const Home = () => {
    return (
        <div className='Container'>
            <Layout style={{ backgroundColor: '#fff' }}>
                <div>
                    <HomeNav />
                </div>
                <Content className='content'>
                    <Row>
                        <Col span={14}>
                        </Col>
                        <Col span={10} className='SignUpForm'>
                            <SignUpForm />
                        </Col>
                    </Row>
                </Content>
                <Footer style={{ position: 'sticky', bottom: '0', background: 'green' }}>
                    <div style={{ textAlign: 'center' }}>
                        <p style={{ color: 'white' }}><strong>Donate to support Damzinium (054 0000 000)</strong></p>
                        <p style={{ color: 'white' }}>Thank you !!!</p>
                    </div>
                </Footer>
            </Layout>
        </div>
    )
}

export default Home