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

      view.delNote();

      view.updateNote();

      model.showAllNote();

    }
  };

  app.init();





  // if(localStorage.getItem('saveTodo')){
  //   list.innerHTML =localStorage.getItem('saveTodo');
  // }

}());