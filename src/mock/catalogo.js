export const catalogo = [
    { id:1, nombre:"camisa"},
    { id:2, nombre:"Pantalon"},
    { id:3, nombre:"zapatos"},
    { id:4, nombre:"zapatillas"}
]

export const getProducts = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve (catalogo)}, 2000)}
);