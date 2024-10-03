// react
import React from "react";

// components
import ItemList from "../ItemList/ItemList";

// types
import { Order } from "./types";

// utils
import { orderRenderer, orders } from "./utils";

const ListUseExample: React.FC = (): React.ReactElement => {

    return (

        <>
            <ItemList<Order> items={orders} renderCallback={orderRenderer}/>
        </>

    )

};

export default ListUseExample;