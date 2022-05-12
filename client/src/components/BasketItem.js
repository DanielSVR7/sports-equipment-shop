import React from 'react'
import { Card, Row, Col, Image } from 'react-bootstrap'
import star from '../assets/star32.png'

const BasketItem = ({product, brandName}) => {
    
    return (
        <Col >
            <Card className='mb-2'>
                <Row>
                    <Col>
                        <Image className='m-1' width={120} height={120} src={process.env.REACT_APP_API_URL + product.img} />
                    </Col>
                    <Col> 
                        <div >
                            <div className='text-black-50 d-flex justify-content-between align-items-center'>
                                <div>{brandName}</div>
                                <div className='d-flex align-items-center'>
                                    <div>{product.rating}</div>
                                    <Image width={18} height={18} src={star}/>
                                </div>
                                
                            </div>
                            <div className='mb-1'>
                                {product.name}
                            </div>

                            <div className='d-flex flex-column'>
                                <div style={{'fontSize': '14px', 'lineHeight': '60%'}} className='text-black-50 font-size-20'>Цена:</div>
                                <b style={{'fontSize': '16px'}} >{product.price} руб.</b>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Card>
        </Col>
    )
}

export default BasketItem