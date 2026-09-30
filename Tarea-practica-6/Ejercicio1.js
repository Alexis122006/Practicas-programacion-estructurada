//Tarea 1: Factorial de un número
//Solicite un número entero positivo al usuario. Usando un bucle FOR, calcule y muestre su factorial. Ejemplo: 5! = 5 × 4 × 3 × 2 × 1 = 120.

import readline from 'readline';

const factorial = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

factorial.question("Ingrese un número entero: ", (respuesta)=>{
    let numero = parseInt(respuesta)
    //El resultado inicial del factorial se establece en 1, ya que el factorial de 0 y 1 es 1, y se multiplicará por los números sucesivos en el bucle.
    let resultado = 1
    //Se crea la variable "operacion" para almacenar la cadena que representa la operación de multiplicación del factorial, que se construirá durante el bucle.
    let operacion = ''

    //Se inicia la iteración desde el número ingresado hasta 1, multiplicando cada valor por el resultado acumulado y construyendo la cadena de operación para mostrarla al final.
    for (let i = numero; i >= 1; i--){
        resultado = resultado * i
        //Se utiliza un operador ternario para decidir si se debe agregar un "×" después del número actual o no, dependiendo de si es el último número en la operación
        operacion += i === numero ? `${i}` : ` × ${i}`
    }
    console.log(`${numero}! = ${operacion} = ${resultado}`)   
    factorial.close() 
})