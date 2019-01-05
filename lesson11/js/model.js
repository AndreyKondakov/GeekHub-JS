var model = {

  createItem: function (text) {
  var list = document.getElementById('todoList');

  let buttonDelText = 'x';
  let buttonUpdateText = 'Update';
  // let buttonSaveText = 'Save';

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
  // toLocal();
}









};