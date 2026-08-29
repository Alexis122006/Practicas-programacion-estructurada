//PROCESAR NOMBRE DEL USUARIO

import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Solicitar el nombre completo del usuario
rl.question('Por favor, ingrese su nombre completo: ', function(nombre) {
    //Convertir el nombre a mayúsculas 
    let nombreMayusculas = nombre.toUpperCase();
    
    //Extraer 4 letras y retornar a minusculas
    let nombreExtraido = nombre.slice(0, 4);
    let nombreMinusculas = nombreExtraido.toLowerCase();

    //Mostrar todos los resultados en consola
    console.log(`Nombre del usuario en mayúsculas: 
        ${nombreMayusculas}`);
    console.log(`Extracción de las primeras 4 letras: 
        ${nombreExtraido}`);
    console.log(`Primeras 4 letras en minúsculas: 
        ${nombreMinusculas}`);

    rl.close();

})