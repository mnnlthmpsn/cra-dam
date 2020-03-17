import React from 'react'
import { Carousel, Col, Row } from 'antd'
import slide1 from '../assets/img/slide1.png'
import slide2 from '../assets/img/slide2.png'
import slide3 from '../assets/img/slide3.png'

const BodyContent = () => {

    return (
        <div className='slider'>
            <Row>
                <Col span={24}>
                    <Carousel autoplay={true} effect="scrollx">
                        <div className='slide1'>
                            <img src={slide1} alt='slide1' />
                        </div>
                        <div className='slide1'>
                            <img src={slide2} alt='slide2' />
                        </div>
                        <div className='slide1'>
                            <img alt='slide3' src={slide3} />
                        </div>
                    </Carousel>
                </Col>
            </Row>

        </div>
    )
}

export default BodyContent