import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'
import star from '../assets/star512.png'
import { useParams } from "react-router-dom";
import { fetchOneProduct } from "../http/productAPI";

const ProductPage = () => {
    const [product, setProduct] = useState({info: []})
    const {id} = useParams()
    useEffect(() => {
        fetchOneProduct(id).then(data => setProduct(data))
    }, [id])

    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={process.env.REACT_APP_API_URL + product.img}/>
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2>{product.name}</h2>
                        <div 
                            className="d-flex align-items-center justify-content-center"
                            style={{background:`url(${star}) no-repeat center center`, width: 240, height: 240, backgroundSize: 'cover', fontSize: 64}}
                        >
                            {product.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                    >
                        <h3>Цена: {product.price} руб.</h3>
                        <Button variant="outline-dark">Добавить в корзину</Button>
                    </Card>      
                </Col>
            </Row>
            <Row>
                <h1>Характеристики</h1>
                {product.info.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 8}}>
                        {info.title} : {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default ProductPage;