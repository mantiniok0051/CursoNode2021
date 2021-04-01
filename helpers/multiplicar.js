'use strict'


const tablaMultiplicar = async(base = 5, iteracion = 10) =>{
    
    let tabla_mult = ''; 
   

    for (let index = 1; index <= iteracion; index++) {
        tabla_mult += ` ${base} x ${index} = ${base*index}\n`;
    }
    //console.log(tabla_mult);
    return tabla_mult;
}

module.exports = {
    multiplicar:tablaMultiplicar
};