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

      model.lsAllNote();

      var btnReverse = document.getElementById('reverse');
      btnReverse.onclick = controller.reverseNotes;
    }
  };

  app.init();

}());