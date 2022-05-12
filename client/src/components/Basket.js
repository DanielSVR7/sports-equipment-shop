import React, { useContext } from 'react'
import { Offcanvas } from 'react-bootstrap'
import { Context } from '..'
import BasketItem from './BasketItem'

const Basket = ({show, onHide}) => {
    const {product} = useContext(Context)
    const brands = product.brands 
    return (
        <Offcanvas 
            show={show} 
            onHide={onHide}
            placement='end'
        >
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Корзина</Offcanvas.Title>
            
            </Offcanvas.Header>
            <Offcanvas.Body>
            { product.basket.map(product =>
                <BasketItem 
                    key={product.id} 
                    brandName={brands.find(brand => brand.id === product.brandId).name} 
                    product={product}
                />
            )}
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default Basket