const catalogo = document.getElementById("catalogo");

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
    const autosFiltrados = arrayVehiculos.filter(vehiculo => vehiculo.precio > 95000);
    catalogo.innerHTML = autosFiltrados.map(vehiculo => crearCardCatalogo(vehiculo)).join("");
}

obtenerDatos();

const concesionarias = {
    Audi: {
        boton: document.getElementById("concesionariaAudi"),
        mapa: document.getElementById("mapaConcesionariaAudi"),
        bandera: document.getElementById("banderaArgentina")
    },
    Maserati: {
        boton: document.getElementById("concesionariaMaserati"),
        mapa: document.getElementById("mapaConcesionariaMaserati"),
        bandera: document.getElementById("banderaItalia")
    },
    McLaren: {
        boton: document.getElementById("concesionariaMcLaren"),
        mapa: document.getElementById("mapaConcesionariaMcLaren"),
        bandera: document.getElementById("banderaFrancia")
    }
};

function activarConcesionaria(concesionaria) {
    for (const i in concesionarias) {
        const { mapa, bandera } = concesionarias[i];
        mapa.classList.toggle("visible", i === concesionaria);
        bandera.classList.toggle("activo", i === concesionaria);
    }
}

for (const i in concesionarias) {
    concesionarias[i].boton.addEventListener("click", () => activarConcesionaria(i));
}