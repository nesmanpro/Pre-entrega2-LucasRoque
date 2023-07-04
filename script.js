

let gastoTotal = 0;
let producto = prompt ('Bienvenido!\nSelecciona el numero del servicio a contratar:\n\n1 - Branding corporativo ... 800€\n2 - Desarrollo web responsive e interactiva ... 2500€\n3 - Tarifa plana mensual creacion de contenido ... 600€\n4 - Video corporativo ... 900€\n\n0 - Para finalizar\n');

while(producto != '0') {
// condicional para informar al usuario que el Libro se. agrego al carrito
    switch (producto){
        case '1':
            alert('Agregaste:\n1 - Branding corporativo ... 800€');
            inclrementarTotal(800);
            break;
        case '2':
            alert ('Agregaste:\n2 - Desarrollo web responsive e interactiva ... 2500€');
            inclrementarTotal(2500);
            break;
        case '3':
            alert('Agregaste:\n3 - Tarifa plana mensual creacion de contenido ... 600€');
            inclrementarTotal(600);
            break;
        case '4':
            alert('Agregaste:\n4 - Video orporativo ... 900€');
            inclrementarTotal(900);
            break;
        default:
            alert ('Ops!!\nParece que ese producto no existe! 👀');
            break;
    }
        producto = prompt('¿Deseas añadir algun otro servicio?\n\n1 - Branding corporativo ... 800€\n2 - Desarrollo web responsive e interactivo ... 2500€\n3 - Tarifa plana mensual creacion de contenido ... 600€\n4 - Video corporativo ... 900€\n\n0 - Para finalizar');
    
}

alert(`El precio total del presupuesto es:\n\nSubtotal:   ${gastoTotal}€\n     + IVA:   ${gastoTotal*0.21}€\n----------------\n  TOTAL:   ${gastoTotal*1.21}€`);

function inclrementarTotal(precioLibro){
    gastoTotal = gastoTotal + precioLibro;
    console.log(`Subtotal hasta el momento ${gastoTotal}€`);
}
