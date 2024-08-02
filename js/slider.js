const swiper = new Swiper('.swiper', {
    speed: 800,
    loop: true,

    breakpoints: {
        576: {
            slidePerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1200: {
            slidesPerView: 3
        }
    }
})