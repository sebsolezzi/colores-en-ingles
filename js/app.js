const titulo = document.querySelector('h2');

document.addEventListener('DOMContentLoaded', () => {

    const botones = document.querySelectorAll('.btn');

    botones.forEach(boton => {
        boton.addEventListener('click', reproducirSonido);
    });
});

function reproducirSonido(e) {

    let nombreColor = e.target.value;

    let etiquetaAudio = document.createElement("audio");
    etiquetaAudio.setAttribute("src", `sounds/${nombreColor}.mp3`);
    etiquetaAudio.play();
  
    titulo.style.color= `${nombreColor}`;
    titulo.innerText = `${nombreColor}`;
    titulo.textContent = nombreColor.toUpperCase(); 

}



