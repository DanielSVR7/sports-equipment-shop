import React, { useContext, useState } from 'react'
import { Button, Card, Col, Image } from 'react-bootstrap'
import star from '../assets/star32.png'
import { useNavigate } from 'react-router-dom'
import { PRODUCT_ROUTE } from '../utils/consts'
import { Context } from '../index'

const ProductItem = ({product, brandName, onPlusClick}) => {
    const navigate = useNavigate()
    const [isAdded, setIsAdded] = useState(false)
    const addHandler = () => {
        setIsAdded(!isAdded)
        onPlusClick()
    }

    return (
        <Col className="mt-2 mb-2" lg={3} md={4} xs={4} >
            <Card style={{width: 160, cursor: 'pointer'}} >
                <Card.Img variant='top' src={process.env.REACT_APP_API_URL + product.img} onClick={() => navigate(PRODUCT_ROUTE + '/' + product.id)}/>
                <Card.Body className='p-2'>
                    <div onClick={() => navigate(PRODUCT_ROUTE + '/' + product.id)}>
                        <div className='text-black-50 d-flex justify-content-between'>
                            <div>{brandName}</div>
                            <div className='d-flex align-items-center'>
                                {product.rating}
                                <Image width={18} height={18} src={star}/>
                            </div>
                        </div>
                        <div className='mb-1'>
                            {product.name}
                        </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='d-flex flex-column' onClick={() => navigate(PRODUCT_ROUTE + '/' + product.id)}>
                            <span style={{'fontSize': '14px', 'lineHeight': '60%'}} className='text-black-50 font-size-20'>Цена:</span>
                            <b style={{'fontSize': '16px'}} >{product.price} руб.</b>
                        </div>
                        {
                            !isAdded ?
                            <Button 
                                variant='outline-secondary' 
                                size='sm'
                                onClick={addHandler}
                            >
                                +
                            </Button>
                            :
                            <Button 
                                variant='success' 
                                size='sm'
                                onClick={addHandler}
                            >
                                ✓
                            </Button>
                        }
                    </div>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ProductItem