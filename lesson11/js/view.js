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
  },

  updateNote: function () {
    var list = document.getElementById('todoList');

    list.addEventListener('click', ({target}) => {

      const isButton = target.tagName === 'BUTTON';
      let buttonUpdateText = 'Update';
      let buttonSaveText = 'Save';

      if (isButton && target.textContent === buttonUpdateText) {
        let updating = target.parentNode.parentNode;
        const firstSpan = target.parentNode.previousSibling;
        // updating.removeChild(target.parentNode.previousSibling);
        firstSpan.className = 'hidden';

        const input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.value = firstSpan.innerHTML;
        updating.insertBefore(input, target.parentNode);
        const btnSave = document.createElement('button');
        btnSave.className = 'btn btn-save';
        btnSave.textContent = buttonSaveText;
        updating.insertBefore(btnSave, target.parentNode);

        btnSave.onclick = function () {
          firstSpan.textContent = input.value;
          firstSpan.classList.remove('hidden');
          this.parentNode.removeChild(input);
          this.parentNode.removeChild(btnSave);
          // toLocal();
        }
      }
    })
  }

};
