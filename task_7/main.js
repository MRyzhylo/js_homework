

var arr = ['Kate', 'Bill', 'Alex', 'John', 'Pit', 'Ann',]

function UserManager(data, nameId) {
    this.container = document.getElementById(nameId);
    this.block = document.createElement('div');
    this.block.className = 'wrap_block';
    this.name = document.createElement('input');
    this.name.className = 'input_block';
    this.name.type = 'text'
    this.name.placeholder = 'Enter name'
    this.btnFind = document.createElement('button');
    this.btnFind.className = 'btn'
    this.btnFind.innerHTML = 'Find User';
    this.btnList = document.createElement('button');
    this.btnList.className = 'btn';
    this.btnList.innerHTML = 'List Users'
    this.btnClear = document.createElement('button');
    this.btnClear.className = 'btn';
    this.btnClear.innerHTML = 'Clear';
    this.container.appendChild(this.name);
    this.container.appendChild(this.btnFind);
    this.container.appendChild(this.btnList);
    this.container.appendChild(this.btnClear);
    this.container.appendChild(this.block);

    this.data = data;
    this.checkName = this.data.includes(this.name.value);

    function findUser() {
        if (!this.name.value) {
            return
        }

        if (this.checkName) {
            this.block.innerHTML = `Имя ${this.name.value} уже существует!`;
        } else {
            this.data.push(this.name.value);
            this.block.innerHTML = `${this.name.value} было добавлено с список!`;
        }

        this.name.value = null;
    }.bind(this)

    function listUser() {
        this.block.innerHTML = '';
        for (var inn of data) {
            this.p = document.createElement('p');
            this.p.innerHTML = inn;
            this.block.appendChild(this.p);
        }
    }.bind(this)

    function clearBlock() {
        this.block.innerHTML = '';
    }.bind(this)

    function init() {
        this.btnFind.onclick = findUser;
        this.btnList.onclick = listUser;
        this.btnClear.onclick = clearBlock;
    }.bind(this)
    init();
}
new UserManager(arr, 'container');