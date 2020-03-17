import React from 'react'
import { List } from 'antd'

const Event = () => {

    return (
        <div>
            <h3 className='eventHeader'>Upcoming Events</h3>
            <div className='eventContainer'>
                <List
                    itemLayout='horizontal'
                    dataSource={[]}
                    size='small'
                    renderItem={item => (
                        <List.Item key={item.id}>
                            <List.Item.Meta
                                title={item.name}
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