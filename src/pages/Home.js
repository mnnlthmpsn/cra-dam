import React from 'react'
import HomeNav from '../components/HomeNav'
import BodyContent from '../components/BodyContent'
import FooterContent from '../components/FooterContent'
import { Layout } from 'antd'

const { Content } = Layout;

const Home = () => {
    return (
        <div className='Container'>
            <Layout style={{ backgroundColor: '#fff' }}>
                <div>
                    <HomeNav />
                </div>
                <Content className='content'>
                    <BodyContent />
                </Content>
                <FooterContent />
            </Layout>
        </div>
    )
}

export default Home