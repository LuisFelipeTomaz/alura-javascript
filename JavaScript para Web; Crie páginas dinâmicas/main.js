// document.querySelector('.tecla_pom').onclick = tocaSomPom;
const listaDeTeclas = document.querySelectorAll('.tecla');

function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento === null) {
        alert('Elemento não encontrado!');
    } else {
        if (elemento.localName === 'audio') {
            elemento.play();
        } else {
            alert('Seletor não encontrado!');
        }
    }
}

/* 
let contador = 0;

while (contador < listaDeTeclas.length) { 
    const tecla = listaDeTeclas[contador];
    
    const instrumento = tecla.classList[1];

    // Template string
    const idAudio = `#som_${instrumento}`;

    // console.log(idAudio);

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    contador += 1;

    // console.log(contador);
} 
*/

for (let contador = 0; contador < listaDeTeclas.length; contador++) { 
    const tecla = listaDeTeclas[contador];
    
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;       // Template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function (evento) {
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.remove('ativa');
        }
    }
}
