'use strict'
const colors = require('colors');
const argv = require('./config/yagrs');
const {multiplicar} = require('./helpers/multiplicar');
const {guardar} = require('./helpers/almacenamiento');
const { array, boolean } = require('yargs');

 
/* const cabecera_arch = `====== Tabla del ${base} hasta la ${iteracion} iteracion ======`;
const nombre_arch = `tabla_${base}_X_${iteracion}.txt`;


const tablaMultiplicar = async(base, iteracion) =>{
    console.clear()
    console.log(cabecera_arch);
   
    cont_arch = cabecera_arch + '\n';
   

    for (let index = 1; index <= iteracion; index++) {
        cont_arch += ` ${base} x ${index} = ${base*index}\n`;
        console.log(`${base} x ${index} = ${base*index}`);
    }
    cont_arch += `====== ====== ====== ====== ====== ====== ====== \n`
} 


tablaMultiplicar(base, iteracion)
    .then( 
            
        )
    .catch(error => console.error(error));

*/
//const  = [ 5, 3 ];

console.clear()

console.log('==============================================='.bold.red);
//console.log(process.argv);
//console.log(argv);



multiplicar(argv.base, argv.iteraciones)
.then( (tabla) => guardar(argv.base, argv.iteraciones, tabla, argv.listar) )
.catch( (err) => console.error(err));

/* const [,,arg3 = '5', arg4 = '10'] = process.argv;
const bases = [] = arg3.split(',');
const iteraciones = [] = arg4.split(',');
const iteracion = 10;

console.log( 'Valores proporcionados '.bold.red, bases,' ',iteraciones);
bases.forEach(base => {
    multiplicar(base, iteracion)
        .then( (tabla) => guardar(base, iteracion, tabla) )
        .then( (contenido) => console.log(contenido) )
        .catch( (err) => console.error(err));    
}); */