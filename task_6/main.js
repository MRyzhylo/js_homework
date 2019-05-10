'use strict'

var arr = [];

function formList () {
function firstForm () {
    var container = document.getElementById('container');
    var firstDiv = document.createElement('div');
    firstDiv.id = 'main_block';
    var firstInput = document.createElement('input');
    var secondInput = document.createElement('input');
    firstInput.type = Text;
    secondInput.type = Text;
    var button = document.createElement('button');
    button.innerHTML = 'Next';
    firstDiv.appendChild(firstInput);
    firstDiv.appendChild(secondInput);
    firstDiv.appendChild(button);
    container.appendChild(firstDiv);
    button.onclick = function () {
        arr.push(firstInput.value, secondInput.value);
        firstDiv.style.display = 'none';
        SecondForm();
    }
}
firstForm();
function SecondForm () {
    var container = document.getElementById('container');
    var secondDiv = document.createElement('div');
    secondDiv.id = 'second_block';
    var firstInput = document.createElement('input');
    var secondInput = document.createElement('input');
    firstInput.type = Text;
    secondInput.type = Text;
    var button = document.createElement('button');
    button.innerHTML = 'Next';
    secondDiv.appendChild(firstInput);
    secondDiv.appendChild(secondInput);
    secondDiv.appendChild(button);
    container.appendChild(secondDiv);
    button.onclick = function () {
        arr.push(firstInput.value, secondInput.value);
        secondDiv.style.display = 'none';
        ThirdForm();
    }
}
function ThirdForm () {
    var container = document.getElementById('container');
    var thirdDiv = document.createElement('div');
    thirdDiv.id = 'third_block';
    var firstInput = document.createElement('input');
    var secondInput = document.createElement('input');
    firstInput.type = Text;
    secondInput.type = Text;
    var button = document.createElement('button');
    button.innerHTML = 'Next';
    thirdDiv.appendChild(firstInput);
    thirdDiv.appendChild(secondInput);
    thirdDiv.appendChild(button);
    container.appendChild(thirdDiv);
    button.onclick = function () {
        arr.push(firstInput.value, secondInput.value);
        thirdDiv.style.display = 'none';
        finalForm();
    }
}
function finalForm () {
    var container = document.getElementById('container');
    var finalDiv = document.createElement('div');
    finalDiv.id = 'final_block';
    var button = document.createElement('button');
    button.innerHTML = 'Send Form';
    container.appendChild(finalDiv);

    for(var name of arr) {
        var p = document.createElement('p');
        finalDiv.appendChild(p)
        p.innerHTML = name;
    }

    function sendData () {
        alert('Data send sucsesfully!');
    }
    finalDiv.appendChild(button);
    button.onclick = sendData;
}
}
formList();