const datosDesordenados = [5, 3, 7, 1, 2, 8, 4, 9, 6, 10];

function mergeSort(array) {

    if (array.length <= 1) return array;

    let div = dividir(array);

    let left = div[0];
    let rigth = div[1];

    return merge(mergeSort(left), mergeSort(rigth));

};

function dividir(array) {

    let middle = Math.floor(array.length / 2);

    let left = array.slice(0, middle);
    let rigth = array.slice(middle, array.length);

    return [left, rigth];

};

function merge(left, rigth) {

    let array = [];

    while (left.length && rigth.length) {

        if (left[0] < rigth[0]) {

            array.push(left.shift());

        } else {

            array.push(rigth.shift());

        };

    };

    while (left.length) {

        array.push(left.shift());

    };

    while (rigth.length) {

        array.push(rigth.shift());

    };

    return array;

};

console.log(mergeSort(datosDesordenados));