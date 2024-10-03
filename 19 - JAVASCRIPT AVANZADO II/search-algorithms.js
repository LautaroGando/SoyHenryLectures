const list = [
    1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22
];

const linealSearch = (array, target) => {

    for (let i = 0; i < array.length; i++) {
        
        if (array[i] === target) {

            return `El numero ${target} se encuentra en la posición ${i} del array.`;

        };
        
    };

    return `El numero ${target} no se encuentra en el array.`;

};

console.log(linealSearch(list, 1));
console.log(linealSearch(list, 22));

const binarySearch = (array, target) => {

    let left = 0;
    let rigth = array.length - 1;

    while (left <= rigth) {

        let middle = Math.floor((left + rigth) / 2);

        if (array[middle] === target) {

            return `El número ${target} se encuentra en la posición ${middle} del array.`;

        };

        if (array[middle] < target) {

            left = middle + 1;

        } else {

            rigth = middle - 1;

        };

    };

    return `El número ${target} no se encuentra en el array`;

};

console.log(binarySearch(list, 1));
console.log(binarySearch(list, 22));
console.log(binarySearch(list, 6));