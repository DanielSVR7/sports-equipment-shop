import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Row } from 'react-bootstrap'
import { Context } from '../index'
import ProductItem from './ProductItem'

const ProductList = observer(() => {
    const { product } = useContext(Context)
    const brands = product.brands 
    const addToBasket = (item) => {
        if (!product.basket.includes(item)) {
            product.basket.push(item)
        }
        else {
            product.basket.splice(product.basket.indexOf(item), 1)
        }
    }

    return (
        <Row className="d-flex">
            { product.products.map(product =>
                <ProductItem 
                    key={product.id} 
                    product={product} 
                    brandName={brands.find(brand => brand.id === product.brandId).name} 
                    onPlusClick={() => addToBasket(product)} 
                />
            )}
        </Row>
    )
})

export default ProductList