const options = {
    descripcion: {
        alias: 'd',
        demand: true
    },
    completado: {
        alias: 'c',
        default: true
    }

}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', options)
    .command('actualizar', 'Actualiza el estado de un elemento', options)
    .command('borrar', 'Eliminar un registro', options)
    .help()
    .argv;

module.exports = {
    argv
}