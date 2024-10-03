import React from 'react';
import CardProduct from '@/components/card-product/CardProduct';

export const fetchProducts = async () => {

    const response = await fetch("https://fakestoreapi.com/products");

    const products = await response.json();

    return products;

};

const Products = async () => {

    const fetchData = await fetchProducts();

    return (

        <div className='flex flex-wrap gap-4 text-white bg-black'>
            <h2 className='w-auto h-7'>
                Estamos en /products trabajando con Generación estática (SSG)
            </h2>
            <section className='flex flex-wrap gap-4 justify-evenly'>
                {fetchData.map(({id, title, price, image}) => (
                    <CardProduct key={id} id={id} title={title} price={price} image={image}/>
                ))}
            </section>
        </div>

    )

};

export default Products;