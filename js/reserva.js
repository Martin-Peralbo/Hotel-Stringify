//convertir el string en objeto

let reservaString = localStorage.getItem("reserva")
let reserva = JSON.parse(reservaString)


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
            <p>Le enviaremos los datos al mail ${reserva.cliente.mail}</p>
            <div class="contenedorBotones">
                <button id="confirmarReserva">CONFIRMAR RESERVA</button>
                <button id="cancelarReserva">CANCELAR RESERVA</button>
            </div>
        </div>`;
    reservaClienteContenedor.appendChild(div);
}

mostrarReserva(reserva);

//Botones

const botonConfirmarReserva = document.getElementById("confirmarReserva")
const botonCancelarReserva = document.getElementById("cancelarReserva")

botonConfirmarReserva.addEventListener ("click", () =>{ 
    Swal.fire({
        icon: "success",
        title: "Reserva Confirmada",
        text: "No se olvide de comprobar su mail",
        confirmButtonText: "Aceptar",
    }).then ((result) => {
        if (result.isConfirmed) {
            window.location="/index.html";
        }
    })
} )

botonCancelarReserva.addEventListener ("click", () =>{ 
    Swal.fire ({
        icon: "question",
        title: "¿Esta usted seguro de que desea cancelar su reserva?",
        confirmButtonText: "Si",
        showCancelButton: true,
        cancelButtonText: "No",
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire ({
                icon: "success",
                title: "Reserva cancelada",
                confirmButtonText: "Aceptar",
            }).then ((result) => {
                if (result.isConfirmed) {
                    window.location="/index.html";
                }
            })
        }
    })
})