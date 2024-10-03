import ProductDetail from '@/components/product-detail/ProductDetail';
import React from 'react';

export const fetchProductDetail = async (id) => {

    const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
        cache: "no-cache",
    });

    const product = response.json();

    return product;

};

const Product = async ({ params }) => {

    const {id, title, price, description, image} = await fetchProductDetail(params.id);

    return (

        <ProductDetail id={id} title={title} price={price} description={description} image={image}/>

    )

};

export default Product;