//CALCULAR EDAD Y AÑOS DE EXPERIENCIA
//Solictar año de nacimiento
//Obtener el año actual 
//Calcular la edad del usuario

import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`Ingrese su año de nacimiento: `, function(anioNacimiento){
    let fechaActual = new Date ();
    let anioActual = fechaActual.getFullYear ();

    let edadAproximada = (anioActual-anioNacimiento);
    
    console.log ("")
    console.log (`Tu edad aproximada en años es: ${edadAproximada}`)
    rl.close();
})