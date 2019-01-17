var controller = {

  handleClick: function () {
    var inputNote = document.getElementById('textNote');

    if (inputNote.value !== '') {
      var value = inputNote.value;
      if (inputNote.value !== '') {
        inputNote.value = '';
      }
      model.createItem(value);
    }
  },

  updateNote: function (target) {
      return model.update(target)
  },

  reverseNotes: function () {
    const list = document.getElementById('todoList');
    const items = list.querySelectorAll('li');
    for (let i = items.length -2; i >= 0; i--) {
      list.appendChild(items[i])
    }
  }

};