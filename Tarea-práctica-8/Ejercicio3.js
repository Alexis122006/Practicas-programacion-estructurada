//Tarea 3: Funciones para manejo de cadenas
//Cree las siguientes funciones: una que reciba una cadena y devuelva la cantidad de vocales; otra que reciba una cadena y devuelva la cadena invertida; y otra que reciba una cadena y determine si es palíndromo (se lee igual al derecho y al revés). Solicite una palabra o frase al usuario y muestre los tres resultados.

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para contar la cantidad de vocales en una cadena
function contarVocales(cadena) {
    const vocales = 'aeiouAEIOU';
    let contador = 0;
    for (let i = 0; i < cadena.length; i++) {
        if (vocales.includes(cadena[i])) {
            contador++;
        }
    }
    return contador;
}

// Función para invertir una cadena
function invertirCadena(cadena) {
    return cadena.split('').reverse().join('');
}

// Función para determinar si una cadena es palíndromo
function esPalindromo(cadena) {
    const cadenaLimpia = cadena.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const cadenaInvertida = invertirCadena(cadenaLimpia);
    return cadenaLimpia === cadenaInvertida;
}

// Solicitar al usuario una palabra o frase
rl.question("Ingrese una palabra o frase: ", (entrada) => {
    const cantidadVocales = contarVocales(entrada);
    const cadenaInvertida = invertirCadena(entrada);
    const palindromo = esPalindromo(entrada) ? "sí" : "no";

    console.log(`Cantidad de vocales: ${cantidadVocales}`);
    console.log(`Cadena invertida: ${cadenaInvertida}`);
    console.log(`¿Es palíndromo?: ${palindromo}`);

    rl.close();
});