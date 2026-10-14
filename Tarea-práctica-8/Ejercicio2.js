//Tarea 2: Funciones para figuras geométricas
//Cree funciones para calcular el área y el perímetro de las siguientes figuras: círculo, cuadrado, rectángulo y triángulo. Cada función debe recibir los parámetros necesarios y retornar el resultado. Cree un menú con Switch para que el usuario elija la figura y luego ingrese los datos necesarios. Muestre el área y el perímetro con 2 decimales.

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para calcular el área de un círculo
function areaCirculo(radio) {
    return Math.PI * Math.pow(radio, 2);
}

// Función para calcular el perímetro de un círculo
function perimetroCirculo(radio) {
    return 2 * Math.PI * radio;
}

// Función para calcular el área de un cuadrado
function areaCuadrado(lado) {
    return Math.pow(lado, 2);
}

// Función para calcular el perímetro de un cuadrado
function perimetroCuadrado(lado) {
    return 4 * lado;
}

// Función para calcular el área de un rectángulo
function areaRectangulo(base, altura) {
    return base * altura;
}

// Función para calcular el perímetro de un rectángulo
function perimetroRectangulo(base, altura) {
    return 2 * (base + altura);
}

// Función para calcular el área de un triángulo
function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

// Función para calcular el perímetro de un triángulo
function perimetroTriangulo(lado1, lado2, lado3) {
    return lado1 + lado2 + lado3;
}

// Menú principal
function mostrarMenu() {
    console.log("Seleccione la figura geométrica:");
    console.log("1. Círculo");
    console.log("2. Cuadrado");
    console.log("3. Rectángulo");
    console.log("4. Triángulo");
    rl.question("Ingrese el número de la figura: ", (opcion) => {
        switch (opcion) {
            case '1':
                rl.question("Ingrese el radio del círculo: ", (radio) => {
                    const area = areaCirculo(parseFloat(radio));
                    const perimetro = perimetroCirculo(parseFloat(radio));
                    console.log(`Área del círculo: ${area.toFixed(2)}`);
                    console.log(`Perímetro del círculo: ${perimetro.toFixed(2)}`);
                    rl.close();
                });
                break;
            case '2':
                rl.question("Ingrese el lado del cuadrado: ", (lado) => {
                    const area = areaCuadrado(parseFloat(lado));
                    const perimetro = perimetroCuadrado(parseFloat(lado));
                    console.log(`Área del cuadrado: ${area.toFixed(2)}`);
                    console.log(`Perímetro del cuadrado: ${perimetro.toFixed(2)}`);
                    rl.close();
                });
                break;
            case '3':
                rl.question("Ingrese la base del rectángulo: ", (base) => {
                    rl.question("Ingrese la altura del rectángulo: ", (altura) => {
                        const area = areaRectangulo(parseFloat(base), parseFloat(altura));
                        const perimetro = perimetroRectangulo(parseFloat(base), parseFloat(altura));
                        console.log(`Área del rectángulo: ${area.toFixed(2)}`);
                        console.log(`Perímetro del rectángulo: ${perimetro.toFixed(2)}`);
                        rl.close();
                    });
                });
                break;
            case '4':
                rl.question("Ingrese el lado 1 del triángulo: ", (lado1) => {
                    rl.question("Ingrese el lado 2 del triángulo: ", (lado2) => {
                        rl.question("Ingrese el lado 3 del triángulo: ", (lado3) => {
                            rl.question("Ingrese la altura del triángulo: ", (altura) => {
                                const area = areaTriangulo(parseFloat(lado1), parseFloat(altura));
                                const perimetro = perimetroTriangulo(parseFloat(lado1), parseFloat(lado2), parseFloat(lado3));
                                console.log(`Área del triángulo: ${area.toFixed(2)}`);
                                console.log(`Perímetro del triángulo: ${perimetro.toFixed(2)}`);
                                rl.close();
                            });
                        });
                    });
                });
                break;
            default:
                console.log("Opción no válida");
                rl.close();
        }
    });
}

// Iniciar el programa mostrando el menú
mostrarMenu();              