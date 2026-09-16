//Tarea 2: Nivel de estudios

import readline from 'readline';

const estudio = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Solicite al usuario su nivel de estudios con un número del 1 al 5: 1=Primaria, 2=Secundaria, 3=Bachillerato, 4=Universidad, 5=Postgrado.
estudio.question('Ingrese su nivel de estudios (1=Primaria, 2=Secundaria, 3=Bachillerato, 4=Universidad, 5=Postgrado): ', (nivel) => {

    //Usando Switch, muestre el nivel correspondiente.
    switch (nivel) {
        case '1':
            console.log('Su nivel de estudios es Primaria');
            break;
        case '2':
            console.log('Su nivel de estudios es Secundaria');
            break;
        case '3':
            console.log('Su nivel de estudios es Bachillerato');
            break;
        case '4':
            console.log('Su nivel de estudios es Universidad');
            break;
        case '5':
            console.log('Su nivel de estudios es Postgrado');
            break;
        //Si el número no está en la lista, muestre "Nivel no válido"
        default:
            console.log('Nivel no válido');
    }   
})