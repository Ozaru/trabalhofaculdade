const titulo = document.getElementById("titulo-animado");

const texto = titulo.innerText;

titulo.innerHTML = "";

texto.split("").forEach((letra, index) => {

    const span = document.createElement("span");

    span.classList.add("letra");

    span.style.animationDelay = `${index * 0.05}s`;

    span.innerText = letra;

    titulo.appendChild(span);

});