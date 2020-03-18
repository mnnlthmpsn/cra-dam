import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { List } from 'antd'

const Event = () => {

    const [ news, setNews ] = useState([])
 

    const getNews = async () => {
        const res = await axios.get('https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=4d9ad1e36f0e4d139bd250d4d4f9ea92')
        let data = res.data.articles
        var top_5_news = data.slice(0,5)
        setNews(top_5_news)
    }

    useEffect(() => {
        getNews()
    }, [])
    return (
        <div>
            <div className='eventContainer'>
                <List
                    header={<h3>Latest News</h3>}
                    itemLayout='horizontal'     
                    dataSource={news}
                    size='small'
                    renderItem={item => (
                        <List.Item key={item.id}>
                            <List.Item.Meta
                                description={<a target="_blank" rel="noopener noreferrer" href={item.url}>{item.title}</a>}
                            />
                        </List.Item>
                    )}
                />
            </div>
            {/* <div>
                <input id='inputfield' type='input' value={input} onChange={(e) => setInput(e.target.value)}/>
                <button onClick={cloneInput}>Clone</button>
            </div> */}
        </div>
    )
}

export default Event