import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {Button, Col, Container, Row} from "react-bootstrap";
import Dropdown from "../component/Dropdown";
import ProductDetailButton from "../component/ProductDetailButton";


const ProductDetail = () => {
    let{id} = useParams()
    const [product, setProduct] = useState(null)


    const getProductDetail = async () => {
        let url = `https://my-json-server.typicode.com/dlsvmfjsrkddml1/shoppingmallsite/products/${id}`
        let response = await fetch(url)
        let data = await response.json()
        console.log(data)
        setProduct(data)
    }

    useEffect(()=>{
         getProductDetail()
    },[])
    return (
            <Container>
                <Row>
                    <Col className="product-img">
                        <img src={product?.img}/>
                    </Col>
                    <Col>
                        <div>{product?.title}</div>

                        <div>{product?.price}</div>

                        <div>{product?.choice}</div>

                        <Dropdown></Dropdown>

                        <ProductDetailButton variant="dark">추가</ProductDetailButton>
                    </Col>
                </Row>
            </Container>
    );
};

export default ProductDetail;
