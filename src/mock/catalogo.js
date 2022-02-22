export const catalogo = [
    { id:1, nombre:"camisa", imagen:"./img/camisa.jpg", descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et.", stock:"10", precio:150},
    { id:2, nombre:"Pantalon", imagen:"./img/pantalon.jpg", descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt.", stock:"50",precio:10},
    { id:3, nombre:"zapatos", imagen:"./img/zapatos.jpg", descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac.", stock:"20",precio:15},
    { id:4, nombre:"zapatillas", imagen:"./img/zapatilla.jpg", descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra.", stock:"5",precio:1150}
]

export const getProducts = new Promise((resolve ) => {
    setTimeout(() =>{
        resolve (catalogo)}, 2000)}
);

export const getItem = (id) => {
    return new Promise((resolve ) => {
        const item = catalogo.find(item => item.id === parseInt(id))
        console.log(item)
        setTimeout(() =>{  resolve (item) }, 2000)
    }
);}