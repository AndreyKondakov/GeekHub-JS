;(function () {
  'use strict';

  // controller.newNote();

  var app = {

    init: function () {
      this.main();
      this.event();
    },

    main: function () {

    },

    event: function () {
      var buttonAdd = document.getElementById('buttonAdd');
      var textNote = document.getElementById('textNote');

      buttonAdd.onclick = controller.handleClick;

      var list = document.getElementById('todoList');
      let buttonDelText = 'x';

      list.addEventListener('click', ({target}) => {
        const isButton = target.tagName === 'BUTTON';

        if (isButton && target.textContent === buttonDelText) {
          list.removeChild(target.parentNode.parentNode);
          // toLocal();
        }
      });

    }
  };

  app.init();





  // if(localStorage.getItem('saveTodo')){
  //   list.innerHTML =localStorage.getItem('saveTodo');
  // }

}());