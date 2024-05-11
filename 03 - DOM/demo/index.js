/* *** EJEMPLO 1: AGREGAR AUTOR A LA PAGINA *** */

// En la pagina 'index.hmtl' hay un elemento span cuyo texto es 'Aplicacion creada por:'.
// Usando metodo seleccionar dicho span por su id ('createBy') y luego usando innerHTML.
// Agregar tu nombre al final del texto actual utilizando el input que se encuentra en el footer.
// Ej: 'Aplicacion creada por Gama'.
// Tu codigo aca:

// name
// setName
// createBy

const setNameButton = document.getElementById('setName');

const setNameHandler = () => {

    const nameInput = document.getElementById('name');
    const createBy = document.getElementById('createBy');

    const name = nameInput.value;

    createBy.innerHTML = `Aplicacion creada por: ${name}`;

    nameInput.value = '';

};

setNameButton.addEventListener('click', setNameHandler);

/* *** EJEMPLO 2: CREAR IMAGENES CON LOS ARCHIVOS DE ASSETS *** */

// Crear un array con los nombres de las imagenes que se encuentran en la carpeta 'assets'.
// Crear una funcion cargarImagen que recibe como parametro el nombre de una imagen y devuelve la ruta para el src
// correspondiente a la imagen.
// Ej: crearImagen('abril.jpg') debe devolver 'assets/abril.jpg'

const imagenes = [
    'abril.webp',
    'bebop.webp',
    'destructor.webp',
    'rocoso.webp',
    'splinter.webp',
    'leonardo.webp',
    'miguelangel.webp',
    'donatello.webp',
    'rafael.webp',
    'krang.webp',
];

const cargarImagen = (imgName) => {

    return `assets/${imgName}`;

};

/* *** EJEMPLO 3: ASOCIAR EL CAMBIO DE IMAGEN Y NOMBRE EN EL ELEMENTO CORRESPONDIENTE *** */

// Crear una funcion que se llame 'renderizarImagen' que no reciba parametros.
// Seleccionar el elemento img cuyo id es 'characterImg' y el elemento span cuyo id es 'characterName'.
// Recorrer el array de imagenes y en cada iteracion llamar a la funcion cargarImagen con el nombre de la imagen correspondiente, y en caso de llegar al final del array volver a empezar.
// Asignar el src de la imagen devuelta por la funcion cargarImagen al atributo src del elemento img seleccionado.
// Asignar el nombre de la imagen (sin la extension) al innerHTML del elemento span seleccionado.
// Ej: si la imagen es 'assets/abril.webp' el nombre debe ser 'abril'.

let index = 0;

const renderizarImagen = () => {
    
    const characterImg = document.getElementById('characterImg');

    characterImg.src = cargarImagen(imagenes[index]);

    index++;

    if(index > imagenes.length - 1) {

        index = 0;
        
    };

};

/* *** EJEMPLO 4: ASIGNAR LA FUNCION RENDERIZARIMAGEN AL BOTON CORRESPONDIENTE *** */

const characterChange = document.getElementById('characterChange');

characterChange.addEventListener('click', renderizarImagen);