// types
import { ItemListProps } from "./types";

export function ItemList<Item>({items, renderCallback}: ItemListProps<Item>) {

    return (

        <>
            <ul>
                {items.map((item, index) => {
                    return <li key={`${index}`}>{renderCallback(item)}</li>
                })}
            </ul>
        </>

    )

};

export default ItemList;