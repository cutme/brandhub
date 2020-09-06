const { detect } = require('detect-browser');
const browser = detect();

document.addEventListener('DOMContentLoaded',function() {

    if (browser) {
        document.documentElement.classList.add(browser.name);
    }

    const cover = document.getElementById('cover');
    
    const init = function() {
        document.documentElement.removeAttribute('style');
        document.body.classList.add('is-loaded');
        
        setTimeout(function() {
            cover.remove();
            
        }, 500);

        window.anims();
        // Anims on inview
        
        
        // Carousels
        document.getElementsByClassName('js-distinctionsSlider')[0] ? window.distinctions() : false;
    };
    
    
    window.addEventListener('load', init);

}, false);