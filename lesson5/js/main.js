


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
  let item = document.createElement('li');
  item.className = 'list-group-item';

  let span = document.createElement('span');
  span.innerText = text;
  item.appendChild(span);
  list.appendChild(item);

}
