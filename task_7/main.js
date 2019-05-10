'use strict'

var arr = ['Kate', 'Bill', 'Alex', 'John', 'Pit', 'Ann',]

function UserManager(data, nameId) {
    this.container = document.getElementById(nameId);
    this.block = document.createElement('div');
    this.block.className = 'wrap_block';
    this.name = document.createElement('input');
    this.name.className = 'input_block';
    this.name.type = 'text';
    this.name.placeholder = 'Enter name';
    this.btnFind = document.createElement('button');
    this.btnFind.className = 'btn';
    this.btnFind.innerHTML = 'Find User';
    this.btnList = document.createElement('button');
    this.btnList.className = 'btn';
    this.btnList.innerHTML = 'List Users';
    this.btnClear = document.createElement('button');
    this.btnClear.className = 'btn';
    this.btnClear.innerHTML = 'Clear';
    this.container.appendChild(this.name);
    this.container.appendChild(this.btnFind);
    this.container.appendChild(this.btnList);
    this.container.appendChild(this.btnClear);
    this.container.appendChild(this.block);

    this.data = data;
    
    this.findUser = function () {
        if (!this.name.value) {
            alert('Please enter name!')
            return
        }
        var checkName = this.data.includes(this.name.value);
        if (checkName) {
            this.block.innerHTML = ` "Имя ${this.name.value} уже существует!" `;
        } else {
            this.data.push(this.name.value);
            this.block.innerHTML = ` "${this.name.value} было добавлено с список!" `;
        }
        this.name.value = null;
    }.bind(this)

    this.listUser = function () {
        this.block.innerHTML = '';
        for (var inn of data) {
            this.li = document.createElement('li');
            this.li.innerHTML = inn;
            this.block.appendChild(this.li);
        }
    }.bind(this)

    this.clearBlock = function () {
        this.block.innerHTML = '';
    }.bind(this)

    this.init = function () {
        this.btnFind.onclick = this.findUser;
        this.btnList.onclick = this.listUser;
        this.btnClear.onclick = this.clearBlock;
    }.bind(this)
    this.init();
}
new UserManager(arr, 'container');