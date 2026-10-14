//Tarea 1: Sistema de calificaciones con funciones
//Cree una función que reciba una calificación numérica (0-100) y devuelva la letra correspondiente (A, B, C, D, F). Cree otra función que reciba un arreglo de calificaciones y devuelva el promedio. Solicite al usuario cuántas calificaciones desea ingresar, almacene cada una en un arreglo, y al final muestre: cada calificación con su letra, el promedio y la letra del promedio.

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para convertir calificación numérica a su letra correspondiente
function convertirCalificacionALetra(calificacion) {
    if (calificacion >= 90) {
        return 'A';
    } else if (calificacion >= 80) {
        return 'B';
    } else if (calificacion >= 70) {
        return 'C';
    } else if (calificacion >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

// Función para calcular el promedio de un arreglo de calificaciones
function calcularPromedio(calificaciones) {
    let suma = 0;
    for (let i = 0; i < calificaciones.length; i++) {
        suma += calificaciones[i];
    }
    return suma / calificaciones.length;
}

// Solicitar al usuario cuántas calificaciones desea ingresar
rl.question("¿Cuántas calificaciones desea ingresar? ", (cantidad) => {
    const numCalificaciones = parseInt(cantidad);
    const calificaciones = [];
    let contador = 0;

    // Función para solicitar cada calificación al usuario
    rl.question(`Ingrese la calificación ${contador + 1} (0-100): `, function ingresarCalificacion(calificacion) {
        const calificacionNum = parseFloat(calificacion);
        if (calificacionNum < 0 || calificacionNum > 100) {
            console.log("Calificación inválida. Debe estar entre 0 y 100.");
        } else {
            calificaciones.push(calificacionNum);
            contador++;
        }

        if (contador < numCalificaciones) {
            rl.question(`Ingrese la calificación ${contador + 1} (0-100): `, ingresarCalificacion);
        } else {
            // Mostrar cada calificación con su letra correspondiente
            console.log("\nCalificaciones ingresadas:");
            for (let i = 0; i < calificaciones.length; i++) {
                const letra = convertirCalificacionALetra(calificaciones[i]);
                console.log(`Calificación ${i + 1}: ${calificaciones[i]} - Letra: ${letra}`);
            }

            // Calcular y mostrar el promedio y su letra correspondiente
            const promedio = calcularPromedio(calificaciones);
            const letraPromedio = convertirCalificacionALetra(promedio);
            console.log(`\nPromedio: ${promedio.toFixed(2)} - Letra del promedio: ${letraPromedio}`);

            rl.close();
        }
    });
}); 