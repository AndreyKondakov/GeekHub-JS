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

  const btn = document.createElement('button');
  btn.className = 'btn btn-del';
  btn.textContent = 'x'
  item.appendChild(btn)
}

// let buttonDel = list.querySelector('button');
//   let buttonDel = todo.getElementsByClassName('btn-del');

// buttonDel.addEventListener('click', function () {
  // let item = todo.querySelector('li')
//   // let thisItem = list.
//   console.log('text')

//   // list.removeChild(item)
//

//   buttonDel.remove.previousSibling

// });

  // remove.addEventListener('click', function () {
  //   removeTask(this);
  // });

//
// let item = document.querySelector('li');
// let buttonDel = document.querySelector('button');
//
//   item.onclick = function () {
//   list.removeChild(this)
// }
//

list.addEventListener('click', ({ target }) => {
    if (target.tagName === 'BUTTON') {
      list.removeChild(target.parentNode);
    }
  });





}());