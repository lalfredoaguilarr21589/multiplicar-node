const fs = require('fs');
var colors = require('colors');


let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }

        let data = '';

        for (let index = 0; index <= limite; index++) {
            data += `${base} * ${index} = ${base*index}\n`;

        }


        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`.green);

        });

    });
}

let ListarTabla = (base, limite) => {

    console.log('================================='.green);
    console.log(`===========tabla de ${base}===========`.green);
    console.log('================================='.green);

    if (!Number(base)) {
        reject(`El valor introducido ${base} no es un numero`);
        return;
    }

    let data = '';

    for (let index = 0; index <= limite; index++) {
        console.log(`${base} * ${index} = ${base*index}\n`);

    }

}

module.exports = {
    crearArchivo,
    ListarTabla
}