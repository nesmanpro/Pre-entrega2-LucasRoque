// Variables necesarias

let carrito = [];
const productos = [{
        id: 1,
        nombre: "Camiseta",
        precio: 29.99
    },
    {
        id: 2,
        nombre: "Gorra",
        precio: 40.5
    },
    {
        id: 3,
        nombre: "Jersey",
        precio: 60.5
    },
    {
        id: 4,
        nombre: "Sombrero",
        precio: 75.5
    },
    {
        id: 5,
        nombre: "Bicicleta",
        precio: 1100
    },
    {
        id: 6,
        nombre: "Mochila",
        precio: 120
    }
];
console.log('Esta es la lista de productos disponibles:');
console.table(productos);


// Función para agregar un producto al carrito
function agregarAlCarrito(idProducto) {
    const productoEncontrado = productos.find((producto) => producto.id === idProducto);
    if (productoEncontrado) {
        carrito.push(productoEncontrado);
        console.log(`Producto "${productoEncontrado.nombre}" (${productoEncontrado.precio}€) agregado al carrito.`);
    } else {
        alert("Producto no encontrado.");
    }
}


// Función para calcular el total del carrito
function calcularTotalCarrito() {
    let total = 0;
    carrito.forEach((producto) => {
        total += producto.precio;
    });
    return total;
}


// Función para que el usuario agregue productos al carrito
function agregarProductosAlCarrito() {
    let idProducto = parseInt(prompt("Observa la lista de productos en la consola. \nIngrese un ID para agregar un producto al carrito (0 para salir):"));

    while (idProducto !== 0) {
        agregarAlCarrito(idProducto);
        idProducto = parseInt(prompt("Desea agregar algun otro producto al carrito (0 para salir):"));
    }

    console.log('Estos son los productos de tu carrito:');
    console.table(carrito);
    console.log('Total a pagar: ' + calcularTotalCarrito() +'€');

}

// Llamando a la función agregarProductosAlCarrito
agregarProductosAlCarrito();