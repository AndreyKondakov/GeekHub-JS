;(function () {
  'use strict';

  var app = {

    init: function () {
      this.main();
      this.event();
    },

    main: function () {

    },

    event: function () {
      var buttonAdd = document.getElementById('buttonAdd');
      buttonAdd.onclick = controller.handleClick;

      view.delNote();  //   вместо >>
      // var list = document.getElementById('todoList');
      // let buttonDelText = 'x';
      //
      // list.addEventListener('click', ({target}) => {
      //   const isButton = target.tagName === 'BUTTON';
      //
      //   if (isButton && target.textContent === buttonDelText) {
      //     list.removeChild(target.parentNode.parentNode);
      //     // toLocal();
      //   }
      // });

    }
  };

  app.init();





  // if(localStorage.getItem('saveTodo')){
  //   list.innerHTML =localStorage.getItem('saveTodo');
  // }

}());