'use strict'

var arr = ['Kyiv', 'Kharkiv', 'Dnipro', 'Odessa', 'Poltava', 'Lviv'];

function whatEver() {

    var box = document.getElementById('main_block');
    var secondBox = document.getElementById('second_block');
    var ul = document.createElement('ul');
    var ul1 = document.createElement('ul');
    box.appendChild(ul);
    secondBox.appendChild(ul1);

    for (var name of arr) {
        var li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML = name;
        var button = document.createElement('button');
        button.innerHTML = 'x';
        li.appendChild(button);
        button.onclick = elemReplace;    
    }
    
    function elemReplace() {
        if (this.li === this.name) {
            ul1.appendChild(this.li);
        }
        if (this.li !== this.name) {
            ul.appendChild(li);
        }
    }

}

whatEver();