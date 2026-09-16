//Validar requisitos de empleado
//Solicite nombre, edad y años de experiencia.
//Valide que la edad sea mayor a 18 Y que la experiencia sea mayor a 0.
//Si cumple ambas condiciones, muestre "Candidato válido".
//Si no cumple, muestre "No cumple con los requisitos".

const readline = require('readline')

const datos = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

datos.question ("Ingrese el nombre del usuario: ", (nombre)=>{
    datos.question("Ingrese la edad del usuario: ", (edad)=>{
        datos.question("Ingrese la experiencia del usuario: ", (experiencia)=>{
            
            if (edad > 18 && experiencia > 0){
                console.log(`El candidato ${nombre} es valido`)
            }else{
                console.log(`EL candidato ${nombre} no cumple los requisitos`)
            }
            datos.close();
        })
    })
})
