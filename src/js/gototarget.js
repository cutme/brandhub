import { gsap } from "gsap";
import { ScrollToPlugin, Power4 } from "gsap/all";
const scrollPlugin = ScrollToPlugin;
gsap.registerPlugin(ScrollToPlugin);

document.addEventListener('DOMContentLoaded',function() {

    const btnGoTo = document.getElementsByClassName('js-goto');

	const speed_calculate = function (target) {
    	let base_speed  = 60,
    		page_offset = window.pageYOffset || document.documentElement.scrollTop,
        	offset_diff = Math.abs(target - page_offset),
        	speed = ((offset_diff * base_speed) / 1000)/100;

    	return speed;
	};

	const clickAction = function(e) {
	
	    const that = e.currentTarget;

	    const src = that.getAttribute('href');
	    
	    if (!src) {
	        src = that.getElementsByTagName('a')[0].getAttribute('href');
        } 

        gsap.to(window, { duration: 1.5, scrollTo: src, ease: Power4.easeOut });

	    e.preventDefault() ? e.preventDefault() : e.preventDefault = false;
	};
	
    if (btnGoTo.length > 0) {
        for (let i = 0; i < btnGoTo.length; i++) {
            btnGoTo[i].addEventListener('click', clickAction);
        }
    }

    
}, false);
