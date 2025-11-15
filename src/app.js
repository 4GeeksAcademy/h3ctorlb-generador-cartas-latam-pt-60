import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  function generarCartaAleatoria() {
    let palos = ["♦", "♥", "♠", "♣"];
    let valores = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
    ];

    let palo = palos[Math.floor(Math.random() * palos.length)];
    let valor = valores[Math.floor(Math.random() * valores.length)];

    document.getElementById("palo-arriba").innerHTML = palo;
    document.getElementById("palo-abajo").innerHTML = palo;
    document.getElementById("valor").innerHTML = valor;

    if (palo === "♦" || palo === "♥") {
      document.getElementById("palo-arriba").style.color = "red";
      document.getElementById("palo-abajo").style.color = "red";
      document.getElementById("valor").style.color = "red";
    } else {
      document.getElementById("palo-arriba").style.color = "black";
      document.getElementById("palo-abajo").style.color = "black";
      document.getElementById("valor").style.color = "black";
    }
  }

  // Generar la primera carta al cargar
  generarCartaAleatoria();

  // Agregar evento al botón para generar una nueva carta al hacer clic
  document
    .getElementById("generar-carta")
    .addEventListener("click", generarCartaAleatoria);

  // Generar nueva carta cada 10 segundos (10000 milisegundos)
  setInterval(generarCartaAleatoria, 10000);
};
