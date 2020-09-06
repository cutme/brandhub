import { gsap } from "gsap";

import ScrollTrigger from "gsap/ScrollTrigger";

document.addEventListener('DOMContentLoaded',function() {

    gsap.registerPlugin(ScrollTrigger);

    const intro = function() {

        gsap.from('.c-intro header h3', { opacity: 0, duration: 1, x: -50 })
        gsap.from('.c-intro header h2', { opacity: 0, duration: 1, y: 50 })
        gsap.from('.c-intro li:nth-of-type(1)', { opacity: 0, duration: 1, y: 50, delay: .1 })
        gsap.from('.c-intro li:nth-of-type(2)', { opacity: 0, duration: 1, y: 50, delay: .2 })
        gsap.from('.c-intro li:nth-of-type(3)', { opacity: 0, duration: 1, y: 50, delay: .3 })
        gsap.from('.c-intro .c-intro__photo', { opacity: 0, duration: 1, x: 50, delay: .4 })
        gsap.from('.c-intro .o-more', { opacity: 0, duration: 1, x: -50, delay: .5 })
        
        //document.documentElement.classList.contains('desktop') ? 
            //gsap.to('.c-intro .o-more .js-btn', { opacity: 1, duration: 1, xPercent: -50, delay: 11.4 })
    };
    
    const sections = function() {
        
        
        // Common

        gsap.utils.toArray(".js-fadeIn").forEach(function(section) {

            gsap.from(section, {
                scrollTrigger: {
                    trigger: section,
                    start: '-50px bottom',
                },
                opacity: 0, 
                duration: 1,
                y: 50
            });
        });        
 
        gsap.utils.toArray(".js-fadeInChildren > *").forEach(function(section) {

            gsap.from(section, {
                scrollTrigger: {
                    trigger: section,
                    start: '-50px bottom',
                },
                opacity: 0, 
                duration: 1,
                y: 50
            });
        });
    
        
        gsap.utils.toArray("u").forEach(function(section) {

            gsap.to(section, {
                scrollTrigger: {
                    trigger: section,
                    onEnter: () => section.classList.add("is-visible")
                },
                duration: 1,
            });
        }); 
        
        // Intro
        
        gsap.to('.c-intro__photo', {
            scrollTrigger: {
                trigger: '.c-intro__photo',
                scrub: true,
                start: 'top top'
            },      
            y: -60,
        });

        
        // Actions
        
        gsap.from('.c-actions__cta .o-btn--blue', {
            scrollTrigger: {
                trigger: '.c-actions__cta',
            },        
            opacity: 0, duration: 1, x: -50
        });
        
        gsap.from('.c-actions__cta .o-btn--brownoutline', {
            scrollTrigger: {
                trigger: '.c-actions__cta',
            },        
            opacity: 0, 
            duration: 1, 
            x: 50
        });

        
        // Process
        
        gsap.from('.c-process__oval', {
            scrollTrigger: {
                trigger: '.c-process__oval',
                scrub: 1.2
            },      
            x: -100,  
            opacity: 0, 
            
        });
        
        
        // Service
        
        gsap.to('.c-service__photos', {
            scrollTrigger: {
                trigger: '.c-service__photos',
                scrub: 2.2,
                start: 'center bottom',
            },      
            y: -50
        });
        
        
        // Distinctions
        
        gsap.from('.js-distinctionsSlider', {
            scrollTrigger: {
                trigger: '.js-distinctionsSlider',
                scrub: 2.2,
                start: 'top bottom',
                end: 'center center'
            },      
            xPercent: 10
        });


        // contact
        
        gsap.from('.o-cols__item:last-of-type', {
            scrollTrigger: {
                trigger: '.o-cols__item:last-of-type',
                scrub: 2.2
            },      
            backgroundPosition: '100px 0',
        });
        
        
    };

    window.anims = function() {
        document.getElementsByClassName('c-intro').length > 0 ? intro() : false;
        sections();
    }



}, false)
