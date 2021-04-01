'use strict'
const sys_arch = require('fs');


const escribeArchivo = async(base, iteracion, tabla, listar) =>{
    
    try {
        const nombre_arch = `./storage/tabla_${base}_X_${iteracion}.txt`;
        const cabecera_arch = `====== Tabla del ${base} hasta la ${iteracion} iteracion ======\n`;
        const pie_arch = `====== ====== ====== ====== ====== ====== ====== \n`;
        let cont_arch = cabecera_arch;
        cont_arch += tabla += pie_arch;
    
        sys_arch.writeFile(nombre_arch, cont_arch, (err) => {
            if (err) throw err;
            console.log(`====== Informacion almacenada en el archivo >> ${nombre_arch} ======`);
        })

        if(listar){
            console.log(cont_arch.bgBlack.random);
        }
        return cont_arch;
        
    } catch (error) {
        throw error;
    }
}

module.exports = {
   guardar:escribeArchivo
};