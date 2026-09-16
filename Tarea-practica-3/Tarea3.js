//Descuento por monto de compra
//Solicite el monto de compra. 
//Si es mayor a $100, aplique 15% de descuento.
//Si es mayor a $50, aplique 10%.
//En otro caso, no hay descuento
//Muestre el monto original, el descuento aplicado y el total a pagar con 2 decimales.

const readline = require('readline')

const desc = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
 
desc.question("Ingrese el monto de la compra: ", (compra)=>{

    let descuento = 0

    if (compra > 100 ){
        descuento = 0.15
    }else if (compra > 50){
        descuento = 0.10
    }

    let montoTotal = compra - (compra * descuento)

    console.log (`El monto inicial de la compra es: ${compra} \nEl descuento que se aplicó fue del ${descuento*100}% \nEl monto total es de: ${montoTotal.toFixed(2)} `)
    desc.close()
})