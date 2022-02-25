const catalogo = [
    { id:1, nombre:"camisa", imagen:"../img/camisa.jpg", descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et.", stock:"10", precio:150, categoria:"Hombre"},
    { id:2, nombre:"Pantalon", imagen:"../img/pantalon.jpg", descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt.", stock:"50",precio:10, categoria:"Hombre" } ,
    { id:3, nombre:"zapatos", imagen:"../img/zapatos.jpg", descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac.", stock:"20",precio:15, categoria:"Hombre" },
    { id:4, nombre:"zapatillas", imagen:"../img/zapatilla.jpg", descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra.", stock:"5",precio:1150, categoria:"Mujer" }
]

const categories = [
    {id: 'Hombre', description: 'Hombre'},
    {id: 'Mujer', description: 'Mujer'},
    
]

export const getProducts = (categoryId) => {
    console.log(categoryId)
    return new Promise((resolve ) => {
        if(categoryId == null){
            setTimeout(() =>{
                resolve (catalogo)}, 2000)
            } 
        else { const category = catalogo.filter(item => item.categoria == categoryId)
        setTimeout(() =>{
            resolve (category)}, 2000)
            }
        }
    )}

export const getItem = (id) => {
    return new Promise((resolve ) => {
        const item = catalogo.find(item => item.id === parseInt(id))
        setTimeout(() =>{  resolve (item) }, 2000)
    }
);}

export const getCategories = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(categories)
        }, 1000)
    })
}

