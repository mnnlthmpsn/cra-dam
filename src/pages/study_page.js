import React, { useState } from 'react'
import Nav from '../components/nav'
import Footer from '../components/footer'
import { List, Avatar } from 'antd'

const StudyPage = () => {

    const [dummyData, setDummyData] = useState([
        { title: 'First Chapter Title', content: 'First Chapter Content' },
        { title: 'Second Chapter Title', content: 'Second Chapter content' },
        { title: 'Third Chapter Title', content: 'Third Chapter Content' },
    ])

    return (
        <div>
            <Nav />
            <div className='container text-center'>
                <h4 className="text-center" style={{ marginTop: "24px", marginBottom: "24px" }}>Artificial Intelligence</h4>
                <div style={{ minHeight: '50vh', alignItems: 'center' }}>
                    <List
                        itemLayout="vertical"
                        size="large"
                        pagination={{
                            onChange: page => {
                                console.log(page);
                            },
                            pageSize: 1,
                        }}
                        dataSource={dummyData}
                        renderItem={item => (
                            <List.Item
                                key={item.title}
                            >
                                <List.Item.Meta
                                    title={<a href={item.href}>{item.title}</a>}
                                    // description={item.content}
                                />
                                {item.content}
                            </List.Item>
                        )}
                    />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default StudyPage