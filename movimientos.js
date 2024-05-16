const tituloDiv = document.getElementById("titulo");
const titulo = tituloDiv.textContent;
tituloDiv.innerHTML = titulo.split("").map((char) => `<span class="letra">${char}</span>`).join("");

const letras = document.querySelectorAll('.letra');
letras.forEach((letra, index) => {
    if (index % 2 === 0) {
        letra.style.animation = `moverY 2s linear infinite alternate`;
    } else {
        letra.style.animation = `moverX 2s linear infinite alternate`;
    }
});