let imgSlider = document.querySelectorAll('.slider-container .slider-img');
let btnProx = document.querySelector('#proxima');
let btnAnter = document.querySelector('#anterior');
let btnNav = document.querySelectorAll('.btn-nav-box .btn-nav');

let contadorImg = imgSlider.length;
let imgAtiva = 0;

btnProx.addEventListener('click', () => {
  imgAtiva++;
  if (imgAtiva >= contadorImg) {
    imgAtiva = 0;
  }
  mostrarSlider();
});

btnAnter.addEventListener('click', () => {
  imgAtiva--;
  if (imgAtiva < 0) {
    imgAtiva = contadorImg - 1;
  }
  mostrarSlider();
});

function mostrarSlider() {
  let antigaImg = document.querySelector('.slider-container .slider-img.ativo');
  let antigoBtnNav = document.querySelector('.btn-nav-box .btn-nav.ativo');

  if (antigaImg) antigaImg.classList.remove('ativo');
  if (antigoBtnNav) antigoBtnNav.classList.remove('ativo');

  imgSlider[imgAtiva].classList.add('ativo');
  btnNav[imgAtiva].classList.add('ativo');
}

btnNav.forEach((btn, indice) => {
  btn.addEventListener('click', () => {
    imgAtiva = indice;
    mostrarSlider();
  });
});

/*Pausar slider*/ 

let intervalo;

// Função para iniciar o autoplay
function iniciarAutoplay() {
  intervalo = setInterval(() => {
    imgAtiva++;
    if (imgAtiva >= contadorImg) {
      imgAtiva = 0;
    }
    mostrarSlider();
  }, 4000); // 4000ms = 4 segundos
}

// Pausar o autoplay
function pausarAutoplay() {
  clearInterval(intervalo);
}

// Iniciar autoplay assim que a página carregar
iniciarAutoplay();

// Selecionar a área do slider para escutar eventos
let slider = document.querySelector('.slider');

slider.addEventListener('mouseenter', pausarAutoplay);
slider.addEventListener('mouseleave', iniciarAutoplay);

/*APARECER/DESAPARECER HEADER*/
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
/* SCROLL REVEAL */
  ScrollReveal().reveal('.reveal', {
    origin: 'bottom',   // anima de baixo para cima
    distance: '50px',   // distância da animação
    duration: 1000,     // duração em ms
    delay: 200,         // atraso em ms
    reset: true      // se quiser que a animação repita ao rolar para cima
  });



