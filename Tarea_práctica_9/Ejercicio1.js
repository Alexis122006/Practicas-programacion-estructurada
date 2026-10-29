//Tarea 1: Funciones recursivas para cálculos matemáticos

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Cree una función recursiva que calcule el factorial de un número entero positivo.
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Cree otra función recursiva que calcule la potencia de una base elevada a un exponente sin usar el operador **.
function potencia(base, exponente) {
    if (exponente === 0) {
        return 1;
    }
    return base * potencia(base, exponente - 1);
}

// Cree una tercera función recursiva que sume todos los números desde 1 hasta n.
function sumaHasta(n) {
    if (n === 1) {
        return 1;
    }
    return n + sumaHasta(n - 1);
}

// Solicite al usuario un número, y muestre el factorial, la potencia (usando ese número como base y como exponente) y la suma hasta ese número.
rl.question("Ingrese un número entero positivo: ", function (respuesta) {
    let numero = parseInt(respuesta);

    if (numero > 0) {
        console.log("Factorial de " + numero + ": " + factorial(numero));
        console.log("Potencia de " + numero + " elevado a " + numero + ": " + potencia(numero, numero));
        console.log("Suma desde 1 hasta " + numero + ": " + sumaHasta(numero));
    } else {
        console.log("Por favor, ingrese un número entero positivo.");
    }

    rl.close();
});