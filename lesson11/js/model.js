var model = {

    createItem: function (text) {
    var list = document.getElementById('todoList');

    let buttonDelText = 'x';
    let buttonUpdateText = 'Update';
    // let buttonSaveText = 'Save';

    const item = document.createElement('li');
    item.className = 'list-group-item';

    // to local storage ---- START ----///--------------------
    var tdMask = 'td_';
    var nId = 0;

    list.querySelectorAll('li').forEach(function(el) {
      let count = el.getAttribute('dataItemId').slice(3);
      if (count > nId) {
        nId = count
      }
    });
    nId++;

    localStorage.setItem(tdMask + nId, text);

    item.setAttribute('dataItemId', tdMask + nId);

    // to local storage --- END ----------------------------

    const span = document.createElement('span');
    span.textContent = text;
    item.appendChild(span);
    list.appendChild(item);

    const div = document.createElement('div');
    item.appendChild(div);

    const spanData = document.createElement('span');
    const dataCreate = (new Date()).toString().split(' ').splice(1, 4).join(' ');
    spanData.textContent =  dataCreate;
    div.appendChild(spanData);

    const btnUpdate = document.createElement('button');
    btnUpdate.className = 'btn btn-update';
    btnUpdate.textContent = buttonUpdateText;
    div.appendChild(btnUpdate);

    const btnDel = document.createElement('button');
    btnDel.className = 'btn btn-del';
    btnDel.textContent = buttonDelText;
    div.appendChild(btnDel);
    // toLocal();

  },

  update: function (target) {
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
  },

  showAllNote: function () {
    var lsLen = localStorage.length;
    if (lsLen > 0) {
      var list = document.getElementById('todoList').firstChild;
      for(var i = 0; i < lsLen; i++) {
        var key = localStorage.key(i);
        if (list === null ) {
          // this.createItem(localStorage.key(i))    // создает лишнюю кописю даных в Local storage

        }
      }
    }
  }







};