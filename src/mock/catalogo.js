export const catalogo = [
    { id:1, nombre:"camisa", imagen:"./img/camisa.jpg", descripcion:"lorem"},
    { id:2, nombre:"Pantalon", imagen:"./img/camisa.jpg", descripcion:"lorem"},
    { id:3, nombre:"zapatos", imagen:"./img/camisa.jpg", descripcion:"lorem"},
    { id:4, nombre:"zapatillas", imagen:"./img/camisa.jpg", descripcion:"lorem"}
]

export const getProducts = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve (catalogo)}, 2000)}
);