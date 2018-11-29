(function () {
  'use strict';

  let todo = document.getElementById('todo');
  let buttonAdd = todo.querySelector('button');
  let list = todo.querySelector('ul');
  let inputTask = todo.querySelector('input[type=text]');

  let buttonDelText = 'x';
  let buttonUpdateText = 'Update';
  let buttonSaveText = 'Save';

  var saveTodo;
  function toLocal() {
    saveTodo = list.innerHTML;
    localStorage.setItem('saveTodo', saveTodo);
  }


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

    const btnUpdate = document.createElement('button');
    btnUpdate.className = 'btn btn-update';
    btnUpdate.textContent = buttonUpdateText;
    div.appendChild(btnUpdate);

    const btnDel = document.createElement('button');
    btnDel.className = 'btn btn-del';
    btnDel.textContent = buttonDelText;
    div.appendChild(btnDel);
    toLocal();
  }
  // del item on click
  list.addEventListener('click', ({target}) => {
    const isButton = target.tagName === 'BUTTON';

    // let updating = target.parentNode.parentNode;
    // const firstSpan = target.parentNode.previousSibling;

    if (isButton && target.textContent === buttonDelText) {
      list.removeChild(target.parentNode.parentNode);
      toLocal();
    } else if (isButton && target.textContent === buttonUpdateText) {
      let updating = target.parentNode.parentNode;
      const firstSpan = target.parentNode.previousSibling;
      // updating.removeChild(target.parentNode.previousSibling);
      firstSpan.className = 'hidden';

      const input = document.createElement('input');
      input.setAttribute('type', 'text');
      input.value = firstSpan.innerHTML;
      updating.insertBefore(input, target.parentNode);
      const btnSave = document.createElement('button');
      btnSave.className = 'btn btn-save';
      btnSave.textContent = buttonSaveText;
      updating.insertBefore(btnSave, target.parentNode);

      btnSave.onclick = function () {
        firstSpan.textContent = input.value;
        firstSpan.classList.remove('hidden');
        this.parentNode.removeChild(input);
        this.parentNode.removeChild(btnSave);
        toLocal();
      }
    }
    // else if (target === this.parentNode) {
    //   target.className.toggle('checked');
    // }

    // else if (isButton && target.textContent === buttonSaveText) {
    //   // console.log(firstSpan.textContent);
    //   // console.log(target.previousSibling.value);
    //   // firstSpan.textContent = target.previousSibling.value;
    //   // firstSpan.value = target.previousSibling.value;
    //   // console.log(target.previousSibling.value);
    //
    //   // firstSpan.remove.className = 'hidden';
    //   // this.appendChild(newSpan);
    //   // target.parentNode.appendChild(newSpan);
    //
    //   let newSpan = document.createElement('span');
    //   newSpan.textContent = target.previousSibling.value;
    //   target.previousSibling.remove(target);
    //   target.remove(target.previousSibling);
    // }
  });

  // add checked
  list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
      toLocal();
    }
  }, false);

  // reverse todoList
  document.getElementById('reverse').onclick = function () {
    let items = list.querySelectorAll('li');
    for (let i = items.length -2; i >= 0; i--) {
      list.appendChild(items[i])
    }
  };

  if(localStorage.getItem('saveTodo')){
    list.innerHTML =localStorage.getItem('saveTodo');
  }
}());