// Colores de consola
const colors = require('colors');
const fs = require("fs");
// Trasformar a una funcion asincrona con el async
const crearArchivo = async (base = 7, listar=false, hasta = 10) => {
  try {
    // Para el error
    let consola = '';
    let salida = '';
// El hasta tendra que llamarse el for en vez de 10
    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
      // Clonamos la linea que vamos a imprimir en la consola 
      consola += `${base} ${'x'.cyan} ${i} ${'='.cyan} ${base * i}\n`;
    }

    if(listar){
     
      console.log("===================".red);
      console.log("Tabla del:".green, colors.green(base));
      console.log("===================".red);

      console.log(consola);
      }
    
    fs.writeFileSync(`./salida/Tabla-${base}.txt`, salida);
    return `Tabla-${base}.txt`; 
  }
  catch (err) {
    throw err;
  }
}
// Asi exportamos el crearArchivo
module.exports = {
  // Tiene le mismo nombre de la variable y lo simplificamos
  crearArchivo,
};
