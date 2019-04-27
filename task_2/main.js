'use strict'

var arr = [];

function renderList(data, nameId) {
    var html = '';
    for (var name of data) {
        html += '<li class="link">' + name + '</li>';
    }

    var listName = document.getElementById(nameId);
    listName.innerHTML = html;
}

function addName () {
    var inptTxt = document.getElementById('input_block').value;

    arr.push(inptTxt);

    renderList(arr, 'name_block');
}

function delNames () {
    arr.length = 0;

    renderList(arr, 'name_block');
}

var sub = document.getElementById('btn_submit');
sub.onclick = addName;

var del = document.getElementById('btn_delete');
del.onclick = delNames;
