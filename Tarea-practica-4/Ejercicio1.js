//Clasificación de figuras geométricas

import readline from 'readline';

const fig = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//Solicite al usuario el número de lados de una figura (3, 4, 5, 6).
fig.question('Ingrese el número de lados de una figura (3, 4, 5, 6): ', (numLados) => {
    //Utilizando Switch, muestre el nombre de la figura correspondiente: 3=Triángulo, 4=Cuadrilátero, 5=Pentágono, 6=Hexágono.
    switch (numLados) {
        case '3':
            console.log('El número de lados corresponde a un Triángulo');
            break;
        case '4':
            console.log('El número de lados corresponde a un Cuadrilátero');
            break;
        case '5':
            console.log('El número de lados corresponde a un Pentágono');
            break;
        case '6':
            console.log('El número de lados corresponde a un Hexágono');
            break;
            
        //Si el número no está en la lista, muestre "Figura no reconocida"
        default:
            console.log('El número de lados no corresponde a una figura reconocida');
    }
    fig.close();
});
