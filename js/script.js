const hamburger = document.querySelector(".header__toggler")
hamburger.onclick = () => {
    const navBar = document.querySelector(".nav")
    navBar.classList.toggle("active")
    hamburger.classList.toggle("rotate")
}

const Audi = document.getElementById("concesionariaAudi");
const Maserati = document.getElementById("concesionariaMaserati")
const McLaren = document.getElementById("concesionariaMcLaren")

const mapaAudi = document.getElementById("mapaConcesionariaAudi")
const mapaMaserati = document.getElementById("mapaConcesionariaMaserati")
const mapaMcLaren = document.getElementById("mapaConcesionariaMcLaren")

const banderaArgentina = document.getElementById("banderaArgentina")
const banderaItalia = document.getElementById("banderaItalia")
const banderaFrancia = document.getElementById("banderaFrancia")

Audi.onclick = () => {
    mapaAudi.classList.add("visible")
    mapaMaserati.classList.remove("visible")
    mapaMcLaren.classList.remove("visible")
    banderaArgentina.classList.add("activo")
    banderaItalia.classList.remove("activo")
    banderaFrancia.classList.remove("activo")
}
Maserati.onclick = () => {
    mapaAudi.classList.remove("visible")
    mapaMaserati.classList.add("visible")
    mapaMcLaren.classList.remove("visible")
    banderaArgentina.classList.remove("activo")
    banderaItalia.classList.add("activo")
    banderaFrancia.classList.remove("activo")
}
McLaren.onclick = () => {
    mapaAudi.classList.remove("visible")
    mapaMaserati.classList.remove("visible")
    mapaMcLaren.classList.add("visible")
    banderaArgentina.classList.remove("activo")
    banderaItalia.classList.remove("activo")
    banderaFrancia.classList.add("activo")
}