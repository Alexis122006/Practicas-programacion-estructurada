//Tarea 3: Máquina de bebidas

import readline from 'readline';

const bebida = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Solicite al usuario que seleccione una bebida del 1 al 5.
bebida.question('Seleccione una bebida (1=Agua, 2=Refresco, 3=Jugo, 4=Café, 5=Té): ', (opcion) => {
    //Usando Switch, muestre el mensaje "Ha seleccionado: [nombre de la bebida]".
    //Además, si la bebida es Refresco o Jugo, agregue el mensaje "¿Desea agregar hielo?".
    switch (opcion) {
        case '1':
            console.log('Ha seleccionado: Agua');
            break;
        case '2':
            console.log('Ha seleccionado: Refresco');
            console.log('¿Desea agregar hielo?');
            break;
        case '3':
            console.log('Ha seleccionado: Jugo');
            console.log('¿Desea agregar hielo?');
            break;
        case '4':
            console.log('Ha seleccionado: Café');
            break;
        case '5':
            console.log('Ha seleccionado: Té');
            break;
        //Si la opción no es válida, muestre "Bebida no disponible"
        default:
            console.log('Bebida no disponible');
    }
    bebida.close();
});