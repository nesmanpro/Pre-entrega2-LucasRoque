// Variables necesarias

let carrito = [];

// lista de productos 

const productos = [{
    Id: 1,
    nombre: "Camiseta",
    precio: 29.5
},
{
    Id: 2,
    nombre: "Gorra",
    precio: 40.9
},
{
    Id: 3,
    nombre: "Jersey",
    precio: 60
},
{
    Id: 4,
    nombre: "Sombrero",
    precio: 75.5
},
{
    Id: 5,
    nombre: "Bicicleta",
    precio: 1100
},
{
    Id: 6,
    nombre: "Mochila",
    precio: 120
}
];


console.log('Estos son los productos que hay ahora mismo disponibles:');
let updatedList = productos.map((producto) => {
    console.table(`Productos añadidos: (ID: ${producto.Id}): ${producto.nombre},\nprecio: $${producto.precio}`);
});

// prompt para iniciar el ciclo o no
let newProd = prompt('Viendo la lista de productos en la consola, quieres añadir algo al carrito? Escribe S para SI, o N para NO').toLocaleUpperCase();


function TotalCarrito(){
    let total = 0;
    carrito.forEach((producto) => {
        total += producto.precio;
    })
    return total;
}




// console.table("Carrito:", carrito);





while(newProd != 'N'){
    if(newProd != 'S'){
        alert('Vaya! Algo ha slido mal. 🚨 \n Ingresa S para SI, N para NO.');
    }else{
        function AgregarAlCarrito(idProducto) {
            const prodEncontrado = productos.find((producto) =>producto.Id === idProducto);
            if (prodEncontrado){
                carrito.push(prodEncontrado);
                console.log(`Producto "${prodEncontrado.nombre}" agregado al carrito.`);
            } else {
                console.log('Producto no encontrado. 🤔');
            }
        }
        AgregarAlCarrito(parseInt(prompt('Indica el ID del producto que quieres añadir')))
    }
    newProd = prompt('Quieres añadir algo más al carrito? Escribe S para SI, o N para NO').toLocaleUpperCase();
};

// console.log("Total del carrito: " + (TotalCarrito() * 1.21) + '€');

// Enumera los productos que hay en el carrito y su precio



// Funcion para calcular el precio subtotal + iva
function totalCalc(carrito){
    let total = carrito.reduce((acum, product) => acum + product.precio, 0)
    return total;
}


// Función para calcular el total del carrito

const totalprecio = totalCalc(carrito)
console.log(`Lo que da un total de: ${totalCalc() * 1.21}  iva incluido`);
