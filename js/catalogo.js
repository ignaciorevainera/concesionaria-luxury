const catalogo = document.getElementById("catalogo");
const filtros = document.getElementById("filtros");

let data = [];

async function obtenerDatos() {
    try {
        const respuesta = await fetch("../data.json");
        data = await respuesta.json();
        mostrarCatalogo(data);
    } catch (error) {
        console.error("Error al obtener datos:", error);
    }
}

function crearCardCatalogo(vehiculo) {
    const { marca, modelo, categoria, precio, imagen } = vehiculo;
    return `
    <div class="card__container">
        <img src="${imagen}" alt="card__img" class="card__img">
        <div class="card__body">
            <div class="card__info">
                <h3 class="card__nombre">${marca} ${modelo}</h3>
                <h4 class="card__categoria">${categoria}</h4>
            </div>
            <div class="card__footer">
                <p class="card__precio">u$s${precio}</p>
                <button class="button">Cotizar</button>
            </div>
        </div>
    </div>
    `;
}

function mostrarCatalogo(arrayVehiculos) {
    catalogo.innerHTML = arrayVehiculos.map(vehiculo => crearCardCatalogo(vehiculo)).join("");
}

function filtrar(e) {
    if (e.target.classList.contains("filtro")) {
        if (e.target.value === "todos") {
            mostrarCatalogo(data);
        } else {
            const valor = e.target.value;
            const filtro = data.filter(vehiculo => vehiculo.categoria === valor);
            mostrarCatalogo(filtro);
        }
    }
}

obtenerDatos();
filtros.addEventListener("click", filtrar);
