//convertir el string en objeto

let reservaString = localStorage.getItem("reserva")
let reserva = JSON.parse(reservaString)

mostrarReserva(reserva)

//mostrar los datos de la reserva

function mostrarReserva(reserva) {
    const reservaClienteContenedor = document.getElementById('reservaCliente');
    const div = document.createElement('div');
    div.classList.add('reservaClienteContenedor');
    div.innerHTML = `
        <h2>¡Gracias por su reserva!</h2>
        <div class="textoReserva">
            <p>Su reserva ha sido creada con éxito.</p>
            <p>Le agradecemos al Sr/Sra ${reserva.cliente.nombre} ${reserva.cliente.apellido} con DNI ${reserva.cliente.dni} por su reserva en nuestro hotel de una habitación ${reserva.habitacionSeleccionada.clase} ${reserva.habitacionSeleccionada.camas}</p>
            <p>Su método de pago elegido es con ${reserva.pago} y su fecha de ingreso es el día ${reserva.fecha} por ${reserva.noches} noches.</p>
            <p>Monto a pagar: $ ${reserva.totalConDescuentos} </p>
        </div>`;
    reservaClienteContenedor.appendChild(div);
}

mostrarReserva(reserva);