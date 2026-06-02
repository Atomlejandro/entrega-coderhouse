const botones = document.querySelectorAll('.skill-btn');
const paneles = document.querySelectorAll('.skill-panel');

botones.forEach(function(boton) {
    boton.addEventListener('click', function() {
        botones.forEach(b => b.classList.remove('active'));
        paneles.forEach(p => p.classList.remove('active'));
        paneles.forEach(p => {
            p.querySelector('.barra-relleno').style.width = '0%';
        });

        boton.classList.add('active');

        const panelActivo = document.getElementById(boton.dataset.tool);
        panelActivo.classList.add('active');

        const barra = panelActivo.querySelector('.barra-relleno');
        setTimeout(() => {
            barra.style.width = barra.dataset.width;
        }, 50);
    });
});

const panelInicial = document.querySelector('.skill-panel.active');
const barraInicial = panelInicial.querySelector('.barra-relleno');
setTimeout(() => {
    barraInicial.style.width = barraInicial.dataset.width;
}, 100);