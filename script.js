// Preguntamos y almacenamos el nombre y edad del cliente

const usuario = {
    nombre: prompt('Indica tu nombre'),
    edad: prompt('¿Eres mayor de edad? (si/no)'),
}
0
let mayorEdad = usuario.edad.toLowerCase()

// Preguntamos si el usuario es mayor de edad

if (mayorEdad == 'si' ) {

    // En caso de que si, iniciamos el proceso de venta

    let gastoTotal = 0;
    let producto = prompt (`Bienvenido ${usuario.nombre}!\nSelecciona el numero del servicio a contratar:\n\n1 - Branding corporativo ... 800€\n2 - Desarrollo web responsive e interactiva ... 2500€\n3 - Tarifa plana mensual creacion de contenido ... 600€\n4 - Video corporativo ... 900€\n\n0 - Para finalizar\n`);
    // condicional para informar al usuario qué servicios puede seleccionar
    
    while(producto != '0') {
    
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
            producto = prompt('¿Deseas añadir algun otro servicio?\n\n1 - Branding corporativo ... 800€\n2 - Desarrollo web responsive e interactivo ... 2500€\n3 - Tarifa plana mensual creacion de contenido ... 600€\n4 - Video corporativo ... 900€\n\n0 - Para ver presupuesto');
        
    }

    alert(`${usuario.nombre}, el presupuesto que solicitas seria de:\n\nSubtotal:   ${gastoTotal}€\n     + IVA:   ${gastoTotal*0.21}€\n----------------\n  TOTAL:   ${gastoTotal*1.21}€`);

    // Función para uso interno

    function inclrementarTotal(precioServicio){
        gastoTotal = gastoTotal + precioServicio;
        console.log(`Subtotal hasta el momento sin iva es: ${gastoTotal}€`);
    }

} else {


    alert('Lo sentimos, debes ser mayor de edad para recibir esa información')
}



