const argv = require('yargs')
                        .option(
                            'b',{
                                alias: 'base',
                                type: 'number',
                                demandOption: true,
                                describe: 'Numero a multiplicar por los 10 exponentes'
                            } )
                        .option(
                            'l',{
                                alias:'listar',
                                type: 'boolean',
                                default:false,
                                describe: 'Muestra la tabla en consola'
                            }
                        )
                        .option(
                            'i',{
                                alias:'iteraciones',
                                tuype: 'number',
                                default: 10,
                                describe: 'Numero de iteraciones para la construccion de la tabla'
                        })
                        .check( (argv, options) => {
                            if(isNaN(argv.base ) || isNaN(argv.iteraciones)){
                                throw 'Debe proporcionar un numero como base y opcionalmente uno para iteraciones'
                            }
                            return true;
                        })
                        .argv;

module.exports = argv;