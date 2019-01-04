var controller = {

  handleClick: function () {
    var inputNote = document.getElementById('textNote');

    if (inputNote.value !== '') {
      var value = inputNote.value;
      if (inputNote.value !== '') {
        inputNote.value = '';
      }

      // view.showNumber(value);

      model.createItem(value);
    }

  }





};