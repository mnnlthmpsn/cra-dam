import React, { useEffect, useState } from 'react'
import { List } from 'antd'


const CourseTitles = () => {


    return (
        <div>
            <h3 className='eventHeader'>Topics</h3>
            <div className='eventContainer'>
                <List
                    itemLayout='horizontal'
                    dataSource={[]}
                    size='small'
                    renderItem={item => (
                        <List.Item key={item.id}>
                            <List.Item.Meta
                                title={item.title}
                            />

                        </List.Item>
                    )}
                />
            </div>
        </div>
    )
}

export default CourseTitles