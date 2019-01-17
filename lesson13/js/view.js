var view = {

  delNote: function () {
    var list = document.getElementById('todoList');
    let buttonDelText = 'x';

    list.addEventListener('click', ({target}) => {
      const isButton = target.tagName === 'BUTTON';

      if (isButton && target.textContent === buttonDelText) {
        model.lsDel(target.parentNode.parentNode);
        list.removeChild(target.parentNode.parentNode);
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
