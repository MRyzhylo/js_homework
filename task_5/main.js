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

    for (var name of data) {
        this.li = document.createElement('li');
        this.ul.appendChild(this.li);
        this.li.innerHTML = name;
        this.button = document.createElement('button');
        this.button.className = 'remove_button';
        this.button.innerHTML = 'x';
        this.li.appendChild(this.button);
    }

    this.moveName = function (event) {
        if (!event.target.classList.contains('remove_button')) return;
        this.ul1.appendChild(event.target.parentNode)
    }.bind(this)

    this.ul.onclick = this.moveName;

    this.moveHome = function (event) {
        if (!event.target.classList.contains('remove_button')) return;
        this.ul.appendChild(event.target.parentNode)
    }.bind(this)

    this.ul1.onclick = this.moveHome;
}


new WhatEver(arr, 'main_block', 'second_block');