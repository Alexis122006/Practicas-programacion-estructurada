//Tarea 3: Funciones recursivas para manejo de cadenas
// Cree las siguientes funciones recursivas: una que reciba una cadena y devuelva la cantidad de vocales; otra que reciba una cadena y devuelva la cadena invertida; y otra que reciba una cadena y determine si es palíndromo (se lee igual al derecho y al revés). Solicite una palabra o frase al usuario y muestre los tres resultados.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función recursiva para contar la cantidad de vocales en una cadena
function contarVocales(cadena) {
    if (cadena === "") {
        return 0;
    }
    let primeraLetra = cadena[0];
    let esVocal = primeraLetra === "a" || primeraLetra === "e" || primeraLetra === "i" || primeraLetra === "o" || primeraLetra === "u" ||
                   primeraLetra === "A" || primeraLetra === "E" || primeraLetra === "I" || primeraLetra === "O" || primeraLetra === "U";
    return (esVocal ? 1 : 0) + contarVocales(cadena.slice(1));
}

// Función recursiva para invertir una cadena
function invertirCadena(cadena) {
    if (cadena === "") {
        return "";
    }
    return cadena[cadena.length - 1] + invertirCadena(cadena.slice(0, -1));
}

// Función recursiva para determinar si una cadena es palíndromo
function esPalindromo(cadena) {
    cadena = cadena.replace(/\s/g, "").toLowerCase();
    if (cadena.length <= 1) {
        return true;
    }
    if (cadena[0] !== cadena[cadena.length - 1]) {
        return false;
    }
    return esPalindromo(cadena.slice(1, -1));
}

// Solicitar al usuario una palabra o frase
rl.question("Ingrese una palabra o frase: ", function (palabra) {
    // Mostrar los resultados de las funciones recursivas
    console.log("Cantidad de vocales en '" + palabra + "': " + contarVocales(palabra));
    console.log("Cadena invertida: " + invertirCadena(palabra));
    console.log("¿Es palíndromo? " + esPalindromo(palabra));

    rl.close();
});