'use strict'
var colors = [
    'crimson',
    'green', 
    'blue', 
    'yellowgreen', 
    'brown', 
    'yellow', 
    'violet', 
    'black',
    'coral', 
    'aqua', 
    'white', 
    'red'
]

function colorManager (color, nameId) {
    this.index = 0;
    this.container = document.getElementById(nameId);
    this.btnPrev = document.getElementById('prev');
    this.btnNext = document.getElementById('next');
    this.color = color;
    this.container.style.backgroundColor = this.color[0];
    this.setColor = function () {
        var collo = this.color[this.index];
        this.container.style.backgroundColor = collo;
    };
    this.btnPrev.onclick = function () {
        this.index --;
        if(this.index < 0) {
            this.index = this.color.length - 1;
        }
        this.setColor();
    }.bind(this);
    this.btnNext.onclick = function () {
        this.index ++;
        if(this.index === this.color.length) {
            this.index = 0;
        }
        this.setColor();
    }.bind(this);
       
}

var manager = new colorManager(colors, 'slider');