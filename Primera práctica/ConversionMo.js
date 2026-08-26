//Conversión de Moneda.
//Declare una variable que contenga una cantidad de dinero en dólares estadounidenses
//Muestre en consola todas las conversiones con su respectiva moneda y símbolo.

let Dolares = 100; 

let Euros = Dolares * 0.92; 
let Colones = Dolares * 8.75;
let Quetzales = Dolares * 7.80; 

console.log(`La cantidad en euros es: €${Euros.toFixed(2)} EUR`);
console.log(`La cantidad en colones es: ₡${Colones.toFixed(2)} SVC`);
console.log(`La cantidad en quetzales es: Q${Quetzales.toFixed(2)} GTQ`);