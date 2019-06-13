const { argv } = require('./config/yarg');

const { crearArchivo, ListarTabla } = require('./multiplicar/multiplicar');

var colors = require('colors');

let comando = argv._[0];

//console.log(argv);
//let base = argv.base || argv.b;


switch (comando) {

    case 'listar':
        ListarTabla(argv.base, argv.l);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => console.log(`Archivo creado ${archivo}`))
            .catch(e => console.log(e));
        break;
    default:

        break;
}