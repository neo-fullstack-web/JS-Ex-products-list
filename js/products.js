export const Products = [
    {
        name: 'PS5',
        description: 'La consola más potente de Sony al día de la fecha',
        price: 290000,
        stock: true,
        image: 'https://as.com/meristation/imagenes/2020/11/06/reportajes/1604654372_894608_1604656126_noticia_normal.jpg',
        games: ['God of War Origin']
    },
    {
        name: 'PS4',
        description: 'La consola anterior de Sony',
        price: 140000,
        stock: true,
        image: 'https://live.mrf.io/statics/i/ps/www.muycomputer.com/wp-content/uploads/2019/07/PS4-PS5.jpg'
    },
    {
        name: 'PS3',
        description: 'La consola anterior de Sony',
        price: 70000,
        stock: false,
        image: 'https://live.mrf.io/statics/i/ps/www.muycomputer.com/wp-content/uploads/2019/07/PS4-PS5.jpg',
        jostick: true,
        games: ['Uncharted 3']
    },

    {
        name: 'PS2',
        description: 'La consola anterior de Sony',
        price: 30000,
        stock: false,
    },
    {
        name: 'XBOX Series X',
        description: 'La consola más potente de Microsoft al día de la fecha',
        price: 279000,
        stock: true,
        image: 'https://www.atajo.com.ar/images/0000000RRT-0000234357RRT-00002-Consola-Xbox-Series-X-01.jpg',
        games: ['Halo Infinite'],
        jostick: true,

    },
    {
        name: 'XBOX One',
        description: 'La consola anterior de Microsoft',
        price: 115000,
        stock: false,
        image: 'https://i.blogs.es/a7dc9c/fc7174d71089999f6a7e15c1d16/1366_2000.png'
    },
    {
        name: 'XBOX 360',
        description: 'La consola de Microsoft que compite con la PS3',
        price: 60000,
        stock: true,
        image: 'https://http2.mlstatic.com/D_NQ_NP_686099-MLA32731207921_112019-O.webp',
    }
];

// export const Saludo = `Hola desde modulo productos`;

export const EjemploKeys = {
    criticalmENTE: {
        total: 560,
        status: `compliance`,
    },
    otroNombreQueNoConozco: {
        total: 1000,
        status: `nonCompliance`
    }
}

// const productoUno = Products[0];


// const productoDos = Object.assign({}, productoUno);
// const productoTres = {...productoUno}

// productoTres.price = 999999;
// productoDos.price = 500000;

// console.log(`PRODUCTO 1`, productoUno,`PRODUCTO 2`, productoDos, `PRODUCTO 3`, productoTres);



// console.dir(EjemploKeys.otroNombreQueNoConozco)

// const entries = Object.entries(EjemploKeys)

// console.log(`1 Resultado de object entries`, entries)
// console.log(`2  Ingreso al 2do array`, entries[1])
// console.log(`3 Ingreso a los values`, entries[1][1])
// console.log(`4 `,  entries[1][1].status)


// const keys = Object.keys(EjemploKeys)

// console.log(Object.keys(EjemploKeys))

// keys.forEach(keyName => {
//     console.warn(EjemploKeys[keyName])
//     EjemploKeys[keyName].nuevaPropiedad = `Algo nuevo`
// })

// console.log(EjemploKeys)
