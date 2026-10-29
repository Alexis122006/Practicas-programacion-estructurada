//Tarea 2: Funciones recursivas con figuras y menú

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función recursiva para sumar los primeros n números pares
function sumaPares(n) {
    if (n === 0) {
        return 0;
    }
    return (2 * n) + sumaPares(n - 1);
}

// Función recursiva para sumar los primeros n números impares
function sumaImpares(n) {
    if (n === 0) {
        return 0;
    }
    return (2 * n - 1) + sumaImpares(n - 1);
}

// Función recursiva para calcular el n-ésimo término de la serie de Fibonacci
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Solicitar al usuario que seleccione una operación
rl.question("Seleccione una operación:\n1. Sumar los primeros n números pares\n2. Sumar los primeros n números impares\n3. Calcular el n-ésimo término de la serie de Fibonacci\n", function (respuestaOpcion) {
    let opcion = parseInt(respuestaOpcion);

    // Validar la opción ingresada por el usuario
    if (opcion >= 1 && opcion <= 3) {
        rl.question("Ingrese el valor de n: ", function (respuestaN) {
            let n = parseInt(respuestaN);

            if (isNaN(n) || n < 0) {
                console.log("Por favor, ingrese un número entero no negativo.");
            } else {
                switch (opcion) {
                    case 1:
                        console.log("La suma de los primeros " + n + " números pares es: " + sumaPares(n));
                        break;
                    case 2:
                        console.log("La suma de los primeros " + n + " números impares es: " + sumaImpares(n));
                        break;
                    case 3:
                        console.log("El " + n + "-ésimo término de la serie de Fibonacci es: " + fibonacci(n));
                        break;
                }
            }

            rl.close();
        });
    } else {
        console.log("Opción no válida. Por favor, seleccione una opción del 1 al 3.");
        rl.close();
    }
});