var view = {

  delNote: function () {
    var list = document.getElementById('todoList');
    let buttonDelText = 'x';

    list.addEventListener('click', ({target}) => {
      const isButton = target.tagName === 'BUTTON';

      if (isButton && target.textContent === buttonDelText) {
        list.removeChild(target.parentNode.parentNode);
        // toLocal();
      }
    });
  },

  updateNote: function () {
    var list = document.getElementById('todoList');
    list.addEventListener('click', ({target}) => {
      controller.updateNote(target)
    })
  }

};
