'use strict'

var arr = ['Kyiv', 'Kharkiv', 'Dnipro', 'Odessa', 'Poltava', 'Lviv'];

function WhatEver(data, nameId1, nameId2) {
    this.box = document.getElementById(nameId1);
    this.secondBox = document.getElementById(nameId2);
    this.ul = document.createElement('ul');
    this.ul1 = document.createElement('ul');
    this.box.appendChild(this.ul);
    this.secondBox.appendChild(this.ul1);
    this.data = data;

    this.renderList = function () {
        for (var name of data) {
            this.li = document.createElement('li');
            this.ul.appendChild(this.li);
            this.li.innerHTML = name;
            this.button = document.createElement('button');
            this.button.innerHTML = 'x';
            this.li.appendChild(this.button);
            this.button.onclick = this.elemReplace;
        }
    }.bind(this) 
    this.renderList();

    this.elemReplace = function () {
        if (this.li === this.name) {
            ul1.appendChild(this.li);
        }
        if (this.li !== this.name) {
            ul.appendChild(li);
        }
    }.bind(this)
}

new WhatEver (arr, 'main_block', 'second_block')