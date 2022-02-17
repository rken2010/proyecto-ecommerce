export const catalogo = [
    { id:1, nombre:"camisa", imagen:"./img/camisa.jpg", descripcion:"lorem", stock:"10"},
    { id:2, nombre:"Pantalon", imagen:"./img/camisa.jpg", descripcion:"lorem", stock:"50"},
    { id:3, nombre:"zapatos", imagen:"./img/camisa.jpg", descripcion:"lorem", stock:"20"},
    { id:4, nombre:"zapatillas", imagen:"./img/camisa.jpg", descripcion:"lorem", stock:"5"}
]

export const getProducts = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve (catalogo)}, 2000)}
);