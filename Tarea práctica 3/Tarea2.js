//Comparar calificaciones

const readline = require('readline');

const comp = readline.createInterface({
  input: process.stdin,
  output: process.stdout
}); 

comp.question("Ingrese su primer calificacion: ", (calificacion1)=>{
  comp.question("Ingrese su segunda calificación: ", (calificacion2)=>{
    
    if (calificacion1>calificacion2){
      console.log(`La primera nota "${calificacion1}" es más alta que la segunda nota "${calificacion2}"`)
    }else if(calificacion2>calificacion1){
      console.log(`La segunda nota "${calificacion2}" es más alta que la primera nota "${calificacion1}" `)
    }else {
      console.log("Las dos notas son iguales")
    }
    comp.close()
  })
})