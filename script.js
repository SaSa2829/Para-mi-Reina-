// 1. Inicializar la librería de animaciones de scroll
AOS.init({
    duration: 1200, 
    once: true      
});

let sobreAbierto = false;

function abrirSobre() {
    if (sobreAbierto) return; 
    const envelope = document.getElementById('miSobre');
    envelope.classList.add('open');
    sobreAbierto = true;
    envelope.removeAttribute("onclick");
}

function moverBotonNo(event) {
    event.stopPropagation();
    event.preventDefault();
    
    const btnNo = document.getElementById('btnNo');
    const carta = document.getElementById('miCarta');

    const rectCarta = carta.getBoundingClientRect();
    const rectBoton = btnNo.getBoundingClientRect();

    const maxX = rectCarta.width - rectBoton.width - 20; 
    const maxY = rectCarta.height - rectBoton.height - 20;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    btnNo.style.position = 'absolute';
    btnNo.style.left = randomX + 'px';
    btnNo.style.top = randomY + 'px';
}

function mostrarHistoria(event) {
    event.stopPropagation(); 

    const envelopeContainer = document.getElementById('envelope-container');
    envelopeContainer.style.opacity = '0';

    setTimeout(() => {
        envelopeContainer.style.display = 'none';
        
        const mainStory = document.getElementById('main-story');
        mainStory.style.display = 'block';
        
        setTimeout(() => {
             mainStory.style.opacity = '1';
             AOS.refresh(); 
        }, 50);

    }, 800); 
}