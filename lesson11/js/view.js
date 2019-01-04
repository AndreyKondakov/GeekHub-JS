var view = {

  // showNumber: function (n) {
  //   var el = document.getElementById('showResult');
  //   el.innerHTML = n;
  // }


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
  }

};
