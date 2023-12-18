// Inicialize o Swiper
var swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
    spaceBetween: 10,
    preloadImages: false,
    lazy: true,
    on: {
        lazyImageReady: function (swiperSlide, slideEl, imageEl) {
            imageEl.classList.add('swiper-lazy-loaded');
        }
    }
});

// Obtém a barra superior
var header = document.querySelector('.header-container');

// Obtém a posição inicial da barra
var initialOffset = header.offsetTop;

// Função chamada durante o evento de rolagem
function handleScroll() {
    // Verifica se a rolagem é maior ou igual à posição inicial
    if (window.scrollY >= initialOffset) {
        // Adiciona a classe 'scrolled' quando rolado para baixo
        header.classList.add('scrolled');
    } else {
        // Remove a classe 'scrolled' quando voltar ao topo
        header.classList.remove('scrolled');
    }
}

// Adiciona um ouvinte de evento de rolagem à janela
window.addEventListener('scroll', handleScroll);
