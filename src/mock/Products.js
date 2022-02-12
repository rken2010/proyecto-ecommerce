export const Products = [
    { nombre:"camisa"},
    { nombre:"Pantalon"},
    { nombre:"zapatos"},
    { nombre:"zapatillas"}
]

export const getProducts = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve (Products)}, 2000)}
);