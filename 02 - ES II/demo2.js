const persona = {
    nombre: 'Juan',
    amigos: ['Maria', 'Pedro', 'Juana'],
    saludar: function () {
        console.log('Hola, soy', this.nombre);
    },
    despedirse: () => {
        console.log('Me despido.', this.nombre);
    },
};

persona.saludar();
persona.despedirse();