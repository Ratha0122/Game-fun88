function OpenNav(){
    document.getElementById("Nav").style.width= "100%"
}
function CloseNav(){
    document.getElementById("Nav").style.width= "0"
}

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centereSlide: true,
    slidesPerView: 1,
    //effect : "cube",
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 1,
        },
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    cubeEffect:{
        shadow: true,
        slideShadows: true,
        shadowOffset:20,
        shadowScale: 0.94,
    },
    on: {
        autoplayTimeLeft(s, time, progress){
            const currentSlide = s.slides[s.activeIndex];
            const progressBar = currentSlide.querySelector(".progressBar")
            if(progressBar){
                const widthPercentage = parseFloat(progress) * 100;
                progressBar.style.width =widthPercentage + "%"
            }
        }
    }
})