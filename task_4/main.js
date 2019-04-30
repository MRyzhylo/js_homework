'use strict'

function blockPosition (nameId) {
    this.container = document.getElementById(nameId);
    this.btnLeft = document.getElementById('left');
    this.btnRight = document.getElementById('right');
    this.btnUp = document.getElementById('up');
    this.btnDown = document.getElementById('down');
    
    this.moveUp = function () {
        this.container.className = 'btn-up';
    }.bind(this);
    this.btnUp.onclick = this.moveUp;

    this.moveDown = function () {
        this.container.className = 'btn-down';
    }.bind(this);
    this.btnDown.onclick = this.moveDown;

    this.moveLeft = function () {
        this.container.className = 'btn-left';
    }.bind(this);
    this.btnLeft.onclick = this.moveLeft;

    this.moveRight = function () {
        this.container.className = 'btn-right';
    }.bind(this);
    this.btnRight.onclick = this.moveRight;
}

var di = new blockPosition('main_block');
