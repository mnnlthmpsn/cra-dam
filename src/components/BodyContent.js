import React from 'react'
import { Carousel, Col, Row, Layout } from 'antd'
import slide1 from '../assets/img/slide1.png'
import slide2 from '../assets/img/slide2.png'
import slide3 from '../assets/img/slide3.png'

const BodyContent = () => {

    const { Content } = Layout
    return (
        <div className='slider'>
            <Row>
                <Col span={24}>
                    <Carousel autoplay={true} effect="scrollx">
                        <div className='slide1'>
                            <img src={slide1} />
                        </div>
                        <div className='slide1'>
                            <img src={slide2} />
                        </div>
                        <div className='slide1'>
                            <img src={slide3} />
                        </div>
                    </Carousel>
                </Col>
            </Row>

        </div>
    )
}

export default BodyContent