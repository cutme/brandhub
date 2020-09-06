document.addEventListener('DOMContentLoaded',function() {

    const el = document.getElementsByClassName('js-formfield');

    const init = function() {

        const action = function(e) {
            
            let _this;
            
            e.type === 'click' ? _this = e.currentTarget : _this = e.currentTarget.parentNode;

            let _input = _this.getElementsByTagName('input')[0];
            
            if (!_this.classList.contains('is-active')) {
                
                for (let i = 0; i < el.length; i++) {
                    if (!el[i].getElementsByTagName('input')[0].value) {
                        el[i].classList.remove('is-active');
                    }
                }
                
                _input.focus();
                _this.classList.add('is-active');
            }            

            e.preventDefault() ? e.preventDefault() : e.preventDefault = false;
        }
        
        const action2 = function() {
            console.log('focus');
        }
        
        for (let i = 0; i < el.length; i++) {
            el[i].addEventListener('click', action);
            el[i].getElementsByTagName('input')[0].addEventListener('focus', action);
        }

    };

    el.length ? init() : false;

}, false);