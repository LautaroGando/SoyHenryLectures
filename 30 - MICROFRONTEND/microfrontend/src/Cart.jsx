import { useEffect, useState } from "react";

export const Cart = ({ messageBus }) => {

    const [productsInCartCount, setProductsInCartCount] = useState(0);

    useEffect(() => {

        const listener = (event) => {

            setProductsInCartCount(event.data.count);

        };

        messageBus.subscribeEvent("ADD_TO_CART", listener);

        return () => {

            messageBus.unsubscribe("ADD_TO_CART", listener);

        };

    }, []);

    return (

        <NumberOfProductsAdded count={productsInCartCount} />

    )

};

export default Cart;