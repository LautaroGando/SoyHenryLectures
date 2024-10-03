import React from 'react';

interface IProduct {
    title: string;
    image?: string;
    price: number;
    stock: boolean;
};

const Product: React.FC<IProduct> = ({title, image, price, stock}): React.ReactElement => {

    return (

        <div>
            <h2>{title}</h2>
            <img src={image} alt="" />
            <h3>{price}</h3>
            <h3>{stock}</h3>
        </div>

    )

};

export default Product;