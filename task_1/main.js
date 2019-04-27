'use strict'
var names = ['Vasya', 'Pit', 'Alex', 'Ann', 'Andy'];

function renderList(data, nameId) {
    var html = '';
    for (var name of data) {
        html += '<li class="link">' + name + '</li>';
    }

    var listName = document.getElementById(nameId);
    listName.innerHTML = html;

    var element = document.getElementsByTagName('LI');
    for(var i = 0; i<element.length; i++){
        element[i].onclick = showAlert
    }

    function showAlert () {
        alert('вы нажали на имя: ' + this.textContent);
    } 
}

renderList(names, 'list');