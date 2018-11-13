(function () {
  'use strict';

  let todo = document.getElementById('todo');
  let buttonAdd = todo.querySelector('button');
  let list = todo.querySelector('ul');
  let inputTask = todo.querySelector('input[type=text]');

  buttonAdd.addEventListener('click', function () {
    let task = inputTask.value;
    if (task !== '') {
      createItem(list, task);
      inputTask.value = '';
    }
  });

  function createItem(list, text) {
    const item = document.createElement('li');
    item.className = 'list-group-item';

    const span = document.createElement('span');
    span.textContent = text;
    item.appendChild(span);
    list.appendChild(item);

    const div = document.createElement('div');
    item.appendChild(div);

    const spanData = document.createElement('span');
    const dataCreate = (new Date()).toString().split(' ').splice(1, 4).join(' ');
    spanData.textContent =  dataCreate;
    div.appendChild(spanData);

    const btn = document.createElement('button');
    btn.className = 'btn btn-del';
    btn.textContent = 'x';
    div.appendChild(btn);
  }
  // del item on click
  list.addEventListener('click', ({target}) => {
    if (target.tagName === 'BUTTON') {
      list.removeChild(target.parentNode.parentNode);
    }
  });

  // reverse todoList
  document.getElementById('reverse').onclick = function () {
    let items = list.querySelectorAll('li');
    for (let i = items.length -2; i >= 0; i--) {
      list.appendChild(items[i])
    }
  }

}());