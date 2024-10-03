let a: number = 2;

a = 4;

console.log(a);

const addition = (a: number, b: number): number => a + b;

console.log(addition);

export interface Product {
    title: string;
    description: string;
    price: number;
    images: Array<string>;
    active: boolean;
};

const newProduct: Product = {
    title: "Producto nuevo",
    description: "Un producto muy bueno",
    price: 200,
    images: [],
    active: true,
};

console.log(newProduct);

const arregloGenerico: Array<number> = [1, 2, 3, 4, 5];

const arregloConvencional: number[] = [6, 7, 8, 9, 10];

console.log(arregloGenerico, arregloConvencional);

export class ProductMemoryRepository {

    private products: Product[];

    constructor(products: Array<Product>) {
        this.products = products;
    };

    public getProducts(): Array<Product> {
        
        return this.products;

    };

};

/* export const getLastNumber = (numbers: number[]): number => {

    return numbers[numbers.length - 1];

};

export const getLastProducts = (products: Product[]): Product => {

    return products[products.length - 1];

}; */

export const getLastItem = <T>(items: T[]): T => {

    return items[items.length - 1];

};

console.log(getLastItem([1, 2, 3, 4, 5]));
console.log(getLastItem(["a", "b", "c", "d", "e"]));
console.log(getLastItem([[], {}, 2, 4, "e"]));

const result1 = getLastItem<number>([1, 2, 3, 4, 5]);
const result2 = getLastItem<string>(["a", "b", "c", "d", "e"]);
/* const result3 = getLastItem<string>([[], {}, true, 2, "e"]); */

console.log(result1);
console.log(result2);
/* console.log(result3); */