//1) Creando clases 

class Cliente {
    constructor(nombre, apellido, edad, dni, telefono, mail) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.dni = dni;
        this.telefono = telefono;
        this.mail = mail;
    }
}

class Habitacion {
    constructor(clase, camas, precio) {
        this.clase = clase;
        this.camas = camas;
        this.precio = precio;
    }
}

class Reserva {
    constructor(habitacion, cliente, noches, pago, fecha, totalSinDescuentos, totalConDescuentos) {
        this.habitacionSeleccionada = habitacion;
        this.cliente = cliente;
        this.noches = noches;
        this.pago = pago;
        this.fecha = fecha;
        this.totalSinDescuentos = totalSinDescuentos;
        this.totalConDescuentos = totalConDescuentos;
    }
}


const tiposHabitacion = {
    normal: 'normal',
    suite: 'suite'
}

const cantidadCamas = {
    simple: 'simple',
    doble: 'doble'
}

const normalSimple = new Habitacion(tiposHabitacion.normal, cantidadCamas.simple, 500);
const normalDoble = new Habitacion(tiposHabitacion.normal, cantidadCamas.doble, 700);
const suiteSimple = new Habitacion(tiposHabitacion.suite, cantidadCamas.simple, 1000);
const suiteDoble = new Habitacion(tiposHabitacion.suite, cantidadCamas.doble, 1500);

const arrayHabitaciones = [normalSimple, normalDoble, suiteSimple, suiteDoble];

//------------------------------------------------

const FormularioReserva = document.getElementById("FormularioReserva");


function reservar() {
    const nombre = document.getElementsByName('Nombre')[0].value;
    const apellido = document.getElementsByName('Apellido')[0].value;
    const edad = document.getElementsByName('Edad')[0].value;
    const dni = document.getElementsByName('DNI')[0].value;
    const telefono = document.getElementsByName('Telefono')[0].value;
    const mail = document.getElementsByName('Mail')[0].value;
    const cliente = new Cliente(nombre, apellido, edad, dni, telefono, mail);

    const radios = document.getElementsByName('habitacion');
    const habitacion = Array.from(radios).find(radio => radio.checked).value;
    const [claseHabitacionSeleccionada, camasHabitacionSeleccionada] = habitacion.split('-');
    const habitacionSeleccionada = arrayHabitaciones.find(habitacion => habitacion.clase === claseHabitacionSeleccionada && habitacion.camas === camasHabitacionSeleccionada);

    const metodoPago = document.getElementsByName('MetodoPago')[0].value;
    const noches = document.getElementsByName('Noches')[0].value;
    const fecha = document.getElementsByName('Fecha')[0].value;
    
    const reserva = new Reserva(habitacionSeleccionada, cliente, noches, metodoPago, fecha);
    total(reserva);


    irAReserva();
    
    let reservaString = JSON.stringify(reserva)
    localStorage.setItem("reserva",reservaString)

}

FormularioReserva.addEventListener("submit", function(event) {
    event.preventDefault();

    reservar()
});

function total(reserva) {
    let porcentajeDescuento;
    if (reserva.pago === "Efectivo") {
        porcentajeDescuento = 10
    }
    else if (reserva.pago === "Tarjeta") {
        porcentajeDescuento = 0
    }
    const totalSinDescuentos = reserva.habitacionSeleccionada.precio * reserva.noches;
    const totalConDescuentos = totalSinDescuentos - (totalSinDescuentos * porcentajeDescuento / 100)

    reserva.totalConDescuentos = totalConDescuentos;
}


    function irAReserva(){
        window.location="pages/reserva.html";
    }
    