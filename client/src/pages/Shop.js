import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Context } from "../index";
import BrandBar from "../components/BrandBar";
import ProductList from "../components/ProductList";
import TypeBar from "../components/TypeBar";
import Pages from "../components/Pages";
import { fetchBrands, fetchProducts, fetchTypes } from "../http/productAPI";

const Shop = observer(() => {
    const {product} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => product.setTypes(data))
        fetchBrands().then(data => product.setBrands(data))
        fetchProducts(null, null, 1, 2).then(data => {
            product.setProducts(data.rows)
            product.setTotalCount(data.count)
        })
    })

    useEffect(() => {
        fetchProducts(product.selectedType.id, product.selectedBrand.id, product.page, product.limit).then(data =>{
            product.setProducts(data.rows)
            product.setTotalCount(data.count)
        })
    }, [product, product.page, product.selectedType, product.selectedBrand])

    return (
        <Container>
            <Row>
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <BrandBar/>
                    <ProductList/>
                    <Pages/>
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;