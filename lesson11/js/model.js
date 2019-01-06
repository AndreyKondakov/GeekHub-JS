var model = {

    createItem: function (text) {
    const list = document.getElementById('todoList');
    const item = document.createElement('li');
    item.className = 'list-group-item draggable';

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

    var attr = document.createAttribute('draggable');
    attr.value = 'true';
    item.setAttributeNode(attr);

    const span = document.createElement('span');
    span.textContent = text;
    item.appendChild(span);
    list.appendChild(item);

    this.domPartOfNote(item);
  },

  domPartOfNote: function (item) {
    let buttonDelText = 'x';
    let buttonUpdateText = 'Update';
    // let buttonSaveText = 'Save';

    // addEventsDragAndDrop(item);
    this.dragAndDrop(item);

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
  },

  update: function (target) {
    const isButton = target.tagName === 'BUTTON';
    let buttonUpdateText = 'Update';
    let buttonSaveText = 'Save';

    if (isButton && target.textContent === buttonUpdateText) {
      let updating = target.parentNode.parentNode;
      const firstSpan = target.parentNode.previousSibling;
      firstSpan.className = 'hidden';

      const input = document.createElement('input');
      input.setAttribute('type', 'text');
      input.value = firstSpan.innerHTML;
      updating.insertBefore(input, target.parentNode);
      const btnSave = document.createElement('button');
      btnSave.className = 'btn btn-save';
      btnSave.textContent = buttonSaveText;
      updating.insertBefore(btnSave, target.parentNode);

      var btnUpdate = target;
      btnUpdate.disabled = true;

      btnSave.onclick = function () {
        firstSpan.textContent = input.value;
        firstSpan.classList.remove('hidden');
        this.parentNode.removeChild(input);
        this.parentNode.removeChild(btnSave);

        let li = target.parentNode.parentNode;
        let itemId = li.getAttribute('dataItemId');
        localStorage[itemId] = input.value;

        btnUpdate.disabled = false;
      }
    }
  },

  lsAllNote: function () {
    var lsLen = localStorage.length;
    if (lsLen > 0) {
      var list = document.getElementById('todoList');
      for(var i = 0; i < lsLen; i++) {
        let key = localStorage.key(i);

        const item = document.createElement('li');
        item.className = 'list-group-item';
        item.setAttribute('dataItemId', key);
        const attr = document.createAttribute('draggable');
        attr.value = 'true';
        item.setAttributeNode(attr);

        const span = document.createElement('span');
        span.textContent = localStorage.getItem(key);
        item.appendChild(span);
        list.appendChild(item);

        this.domPartOfNote(item);
      }
    }
  },
  
  lsDel: function (item) {
    var thisNote = item.getAttribute('dataItemId');
    localStorage.removeItem(thisNote);
  },

  dragAndDrop: function (item) {
    function dragStart(e) {
      this.style.opacity = '0.4';
      dragSrcEl = this;
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/html', this.innerHTML);
    };

    function dragEnter(e) {
      this.classList.add('over');
    }

    function dragLeave(e) {
      e.stopPropagation();
      this.classList.remove('over');
    }

    function dragOver(e) {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      return false;
    }

    function dragDrop(e) {
      if (dragSrcEl != this) {
        dragSrcEl.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
      }
      return false;
    }

    function dragEnd(e) {
      var listItens = document.querySelectorAll('.draggable');
      [].forEach.call(listItens, function(item) {
        item.classList.remove('over');
      });
      this.style.opacity = '1';
    }

    function addEventsDragAndDrop(el) {
      el.addEventListener('dragstart', dragStart, false);
      el.addEventListener('dragenter', dragEnter, false);
      el.addEventListener('dragover', dragOver, false);
      el.addEventListener('dragleave', dragLeave, false);
      el.addEventListener('drop', dragDrop, false);
      el.addEventListener('dragend', dragEnd, false);
    }

    var listItens = document.querySelectorAll('.draggable');
    [].forEach.call(listItens, function(item) {
      addEventsDragAndDrop(item);
    });

    addEventsDragAndDrop(item);
  }



};