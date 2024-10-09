import { useState } from "react";

export const Catalog = ({ messageBus }) => {

    const [productsInCartCount, setProductsInCartCount] = useState(0);

    const addToCart = () => {

        messageBus.publishEvent("ADD_TO_CART", {
            count: productsInCartCount + 1,
        });

        setProductsInCartCount(productsInCartCount + 1);

    };

    return (

        <Product onAddToCart={addToCart} />

    )

};

export default Catalog;