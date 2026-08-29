//INFORMACION DE PRODUCTOS CON PRECIO

//Solicitar nombre del usuario
//Solicitar precio unitario del producto
//Solicitar cantidad





import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`Ingrese el nombre del producto: `, function(nombre) {
    rl.question(`Ingrese el precio unitario del producto: `, function(precio) {
        rl.question(`Ingrese la cantidad de producto: `, function(cantidad){

            //Mostrar el nombre en mayusculas 
            let nombreMayuscula = nombre.toUpperCase();

            //Extraer las primeras 3 letras del producto
            let nombreExtraído = nombre.slice(0,3);

            //Mostrar el precio total con 2 decimales
            let precioTotal = parseFloat(precio) * parseInt(cantidad);
            
            console.log ("")
            console.log(`Nombre del producto en mayúsculas: ${nombreMayuscula}`);
            console.log(`Primeras 3 letras del producto: ${nombreExtraído}`);
            console.log(`Precio total del producto: $${precioTotal.toFixed(2)}`);
            rl.close();
        })
    })
})