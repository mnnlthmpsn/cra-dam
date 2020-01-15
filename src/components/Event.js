import React, { useContext } from 'react'
import { List } from 'antd'
import { CourseContext } from '../contexts/CourseContext'

const Event = () => {

    const { courses } = useContext(CourseContext)

    return (
        <div>
            <h3 className='eventHeader'>Upcoming Events</h3>
            <div className='eventContainer'>
                <List
                    itemLayout='horizontal'
                    dataSource={courses}
                    size='small'
                    renderItem={item => (
                        <List.Item key={item.id}>
                            <List.Item.Meta
                                title={item.title}
                                description={item.description}
                            />
                        </List.Item>
                    )}
                />
            </div>
        </div>
    )
}

export default Event