const {crearArchivo} = require('./helpers/multiplicar');
// Exportacion mi argv
const argv = require('./config/yargs');
// Colores de consola
const colors = require('colors');

console.clear();
// Estos argumentos se tienen que mandar 
crearArchivo(argv.base, argv.l, argv.h)
.then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
.catch(err => console.log(err));


