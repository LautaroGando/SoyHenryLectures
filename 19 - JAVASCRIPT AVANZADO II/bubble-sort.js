const datosDesordenados = [5, 3, 7, 1, 2, 8, 4, 9, 6, 10];

function bubbleSort(array) {

    let change = true;

    while (change) {

        change = false;

        for (let i = 0; i < array.length - 1; i++) {
            
            if (array[i] > array[i + 1]) {

                let aux = array[i];

                array[i] = array[i + 1];

                array[i + 1] = aux;

                change = true;

            };
            
        };

    };

    return array;
    
};

console.log(bubbleSort(datosDesordenados))