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
  }

};