const form = document.querySelector("#form")

const inputServicio = document.getElementById("servicio")
const inputEmail = document.getElementById("email")
const inputNombre = document.getElementById("nombre")
const inputApellido = document.getElementById("apellido")
const inputMensaje = document.getElementById("mensaje")

const resultado = document.querySelector(".citas__section")

function crearCita(datos) {
    return `
    <div class="card__cita">
        <h3 class="cita__nombre">${datos.nombre} ${datos.apellido}</h3>
        <h4 class="cita__email">${datos.email}</h4>
        <h5 class="cita__servicio">${datos.servicio}</h5>
        <p class="cita__mensaje">
        ${datos.mensaje}
        </p>
    </div>
    `
}

function mostrarCita(cita) {
    resultado.innerHTML = cita.map(cita => crearCita(cita)).join("");
}

class Cita {
    constructor(servicio, email, nombre, apellido, mensaje) {
        this.servicio = servicio
        this.email = email
        this.nombre = nombre
        this.apellido = apellido
        this.mensaje = mensaje
    }
}

let citas = []

function obtenerDatos(event) {
    event.preventDefault()
    const servicio = inputServicio.value
    const email = inputEmail.value
    const nombre = inputNombre.value
    const apellido = inputApellido.value
    const mensaje = inputMensaje.value

    citas.unshift(new Cita(servicio, email, nombre, apellido, mensaje))
    mostrarCita(citas)
}

function iniciar() {
    form.addEventListener("submit", obtenerDatos)
}

iniciar()