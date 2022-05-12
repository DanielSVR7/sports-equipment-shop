import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Card, Row } from 'react-bootstrap'
import { Context } from '../index'

const BrandBar = observer(() => {
    const {product} = useContext(Context)
    return (
        <Row className='d-flex mt-2 ms-1 justify-content-center' lg='auto' md='auto' xs='auto'>
            <Card
                style={{cursor: 'pointer'}}
                onClick={() => product.setSelectedBrand({})}
                className='p-3 me-1 mb-1'
                bg={product.selectedBrand === {} ? 'light' : 'white'}
            >
                Сброс
            </Card>
            {product.brands.map(brand =>
                <Card
                    style={{cursor: 'pointer'}}
                    key={brand.id}
                    onClick={() => product.setSelectedBrand(brand)}
                    className='p-3 me-1 mb-1'
                    bg={brand.id === product.selectedBrand.id ? 'primary' : 'light'}
                    text={brand.id === product.selectedBrand.id ? 'white' : 'dark'}
                >
                    {brand.name}
                </Card>
            )}
        </Row>
    )
})

export default BrandBar