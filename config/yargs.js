// Colores de consola
const colors = require('colors');
// Impotamos yargs
const argv = require('yargs')
.option('b',{
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar'.red
})
.option('h',{
    alias: 'hasta',
    type: 'number',
    default: 10,
    describe: 'Este es el numero hasta donde quieras la tabla'.red
})
.option('l',{
    alias: 'listar',
    type: 'boolean',
    default: false,
    describe: 'Muestra la tabla en consola'.red
})
.check((argv, options) => {
    if(isNaN(argv.base)){
        throw 'La base tiene que ser un numero';
    }
    return true;
})
.argv;
// Exportacion por defecto de mi objeto argv
module.exports=argv;