'use strict'

function blockPosition (nameId) {
    this.container = document.getElementById(nameId);
    this.btnLeft = document.getElementById('left');
    this.btnRight = document.getElementById('right');
    this.btnUp = document.getElementById('up');
    this.btnDown = document.getElementById('down');
    this.winHeigt = document.documentElement.clientHeight;
    this.winWeigt = document.documentElement.clientWidth;
    this.scrllDwn = function () {
        if(window.pageYOffset < this.winHeigt){
            window.scrollBy(0, 10);
            setTimeout(scroll, 0);
            return scrllDwn()
        }
        if(window.pageYOffset > this.winHeigt){
            window.scrollTo(0, this.winHeigt);
        }
    }
    this.btnDown.onclick = this.scrllDwn;
}

var di = new blockPosition('main_block');
