//Cálculo de Consumo de Electricidad
//Una variable para los kilowatts (kWh) consumidos durante el mes
//Una variable con el precio fijo por kilowatt, que es $0.15
//Muestre en consola un resumen de la factura

let kilowattsConsumidos = 250; 
let precioPorKilowatt = 0.15;
let Costobase = kilowattsConsumidos * precioPorKilowatt;
let impuesto = Costobase * 0.10;
let Costototal = Costobase + impuesto;

console.log(`Resumen de la factura de electricidad:`);
console.log(`Kilowatts consumidos: ${kilowattsConsumidos} kWh`);
console.log(`Costo base: $${Costobase.toFixed(2)}`);
console.log(`Impuesto (10%): $${impuesto.toFixed(2)}`);
console.log(`Costo total: $${Costototal.toFixed(2)}`);