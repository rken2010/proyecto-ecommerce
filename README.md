# Proyecto Ecommerce en React

El proyecto consta de la creación de un E-commerce utilizando la libreria Reacts. Para esto se estudio el uso de componentes, estados, Hooks, ciclos de vida, Routing, entre otros. Los mismos fueron aplicados para generar un negocio de ropa


# Componentes

/NavBar: Se creo componente para la navegación y presentación de marca.
/ItemListContainer: Componente que contiene los items en venta.
/ItemCount: Manipula la cantidad de los items y el agregado al carrito.
/Item: Se presenta con una Card el producto en venta.
/ItemDetailContainer: Contiene la tarjeta con la descripción del producto.
/ItemDetails: Describe el producto con su imagen y precio.
/CartWidget: Icono del carro de compras.
/Cart: Componente que muestra los productos del pedido y permite la carga de los datos para finalizar la compra.
/ContactForm: Formulario de contacto manipulado y validado con Formik para la carga de información del comprador.
/Checkout: Muestra los datos de la compra realizada.

# Context
Se crea un context para el uso de funciones de carrito. Manejan el agregado de items, eliminar items, conteo de cantidades, total de compra, entre otras.


# Librerias
Se utilizaron elementos de Chakra UI y React-Router-DOM

## Chakra

Se utilizaron elementos básicos para el maquetado y diseño como Stacks, Box, Heading, Text, Image, Button. 

## React Router

Se genero el Routing en la app por medio de React Router.

## Formik

Para la validación y manipulación del formulario de contacto se utilizo la libreria Formik, facilitando el manejo de estados en el componente.

# Funcionamiento
Presentación de producto(gif)
https://drive.google.com/file/d/15LgmvzVc9MINBor2FnskKsNz0Ddhnphj/view?usp=sharing

Carrito de compra (gif)
https://drive.google.com/file/d/1Io_pYKpIArnD_Lib_GGe-kqTnIPL-Yga/view?usp=sharing)

# Funcionamiento

Para probar el stock el producto ZAPATOS tiene un stock de 10.000 unidades mientras que PANTALON no tiene stock por lo que debe marcar error.
