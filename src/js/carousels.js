import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';

Swiper.use([Navigation, Pagination]);


document.addEventListener('DOMContentLoaded',function() {
    
    const distinctions = document.getElementsByClassName('js-distinctionsSlider')[0];

    window.distinctions = function() {
	    
	    const swiper = new Swiper('.swiper-container', {
            freeMode: true,
            spaceBetween: 0,
            slidesPerView: 'auto',
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            speed: 800,
            pagination: {
                el: '.swiper-pagination',
                    clickable: true,
                },
            });
    };


    

}, false)
