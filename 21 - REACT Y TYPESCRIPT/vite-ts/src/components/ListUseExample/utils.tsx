// types
import { Order } from "./types";

export const orders: Order[] = [
    {
        id: '1',
        items: ["manzana", "pan", "verduras"],
        total: 100
    },
    {
        id: '2',
        items: ["camiseta", "zapatos", "mochila"],
        total: 500
    },

];

export const orderRenderer = (order: Order) => {

    return (

        <div>
            <p>{order.id}</p>
            <ul>
                {order.items.map(item => (
                    <li>{item}</li>
                ))}
            </ul>
            <p>{order.total}</p>
        </div>

    )

};