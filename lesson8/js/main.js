$( document ).ready(function() {
  let newGame = [];

  $('#game-start').one('click', function () {
    refresh();
  });

  function compareRandom(a, b) {
    return Math.random() - 0.5;
  }; // sort numbers

  function refresh() {
    newGame = [];
    for (let i = 15; i > 0; i--) {
      newGame.push(i)
    }
    newGame.sort(compareRandom);
    $('.lets-play').empty();
    for (let i = 0; i < newGame.length; i++) {
      $('.lets-play').append(`<span class="numbers">${newGame[i]}</span>`);
    }
    $('.lets-play').append(`<span class="numbers free"> 0</span>`);
    $('.lets-play').children().attr('draggable', 'true');

    // $('.lets-play').children().on('dragstart', handleDragStart());
    // $('.lets-play').children().on('dragenter', handleDragEnter());
    // $('.lets-play').children().on('dragover', handleDragOver());
    // $('.lets-play').children().on('dragleave', handleDragLeave());
    // $('.lets-play').children().on('drop', handleDrop());
    // $('.lets-play').children().on('dragend', handleDragEnd());

    // $('.lets-play').children().on('click', function handleDragStart(e) {
    //   // Target (this) element is the source node.
    //   console.log('test');
    //
    //   this.style.opacity = '0.7';
    //
    //   dragSrcEl = this;
    //
    //   e.dataTransfer.effectAllowed = 'move';
    //   e.dataTransfer.setData('text/html', this.innerHTML);
    // });

    // addDraggableEvents(($('.lets-play').children()));


    // let initEvent = $('.lets-play').children();
    // addDraggableEvents(initEvent);





    // $('.lets-play').children().on('dragstart', function () {
      var cols = document.querySelectorAll('.lets-play .numbers');
      [].forEach.call(cols, function (col) {
        col.addEventListener('dragstart', handleDragStart, false);
        col.addEventListener('dragenter', handleDragEnter, false);
        col.addEventListener('dragover', handleDragOver, false);
        col.addEventListener('dragleave', handleDragLeave, false);
        col.addEventListener('drop', handleDrop, false);
        col.addEventListener('dragend', handleDragEnd, false);
      });

      var dragSrcEl = null;
      var dragFreeEl = null;

      function handleDragStart(e) {
        console.log('start', this.innerHTML);
        console.log('start', this.classList[1]);
        // Target (this) element is the source node.
        this.style.opacity = '0.7';
        dragSrcEl = this;
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', this.innerHTML);

        // if (this.innerHTML === '0') {
        //   console.log('получилось');
        //   dragFreeEl = this.classList[1];
        //   this.classList.remove(dragFreeEl)
        // }
        console.log('start');
        dragFreeEl = this.classList[1];
        this.classList.remove(dragFreeEl)
      }

      function handleDrop(e) {
        // this/e.target is current target element.
        if (e.stopPropagation) {
          e.stopPropagation(); // Stops some browsers from redirecting.
        }
        // Don't do anything if dropping the same column we're dragging.
        if (dragSrcEl != this) {
          // Set the source column's HTML to the HTML of the column dropped on.
          dragSrcEl.innerHTML = this.innerHTML;
          this.innerHTML = e.dataTransfer.getData('text/html');
        }
        if (dragFreeEl == 'free') {
          console.log(' drop!');
          this.classList.add(dragFreeEl);
        }

        return false;
      }

      function handleDragOver(e) {
        if (e.preventDefault) {
          e.preventDefault(); // Necessary. Allows us to drop.
        }
        console.log('over');

        //
        e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.
        return false;
      }
      //
      function handleDragEnter(e) {
        // this / e.target is the current hover target.
        this.classList.add('over');
        console.log('enter');

      }
      //
      function handleDragLeave(e) {
        this.classList.remove('over');  // this / e.target is previous target element.
      }

      function handleDragEnd(e) {
        // this/e.target is the source node.
        console.log('end');

        [].forEach.call(cols, function (col) {
          col.classList.remove('over');
        });
      }
    // });

  };







  $('#refresh').click(function () {
    refresh();
  });

  // let initEvent = $('.lets-play').children()

  // function addDraggableEvents(item) {
  //   item.addEventListener('dragstart', handleDragStart);
  //   item.addEventListener('dragenter', handleDragEnter);
  //   item.addEventListener('dragover', handleDragOver);
  //   item.addEventListener('dragleave', handleDragLeave);
  //   item.addEventListener('drop', handleDrop);
  //   item.addEventListener('dragend', handleDragEnd);
  // }
  //
  // addDraggableEvents(initEvent);

  // var cols = document.querySelectorAll('.lets-play .numbers');
  // [].forEach.call(cols, function (col) {
  //   col.addEventListener('dragstart', handleDragStart, false);
  //   col.addEventListener('dragenter', handleDragEnter, false);
  //   col.addEventListener('dragover', handleDragOver, false);
  //   col.addEventListener('dragleave', handleDragLeave, false);
  //   col.addEventListener('drop', handleDrop, false);
  //   col.addEventListener('dragend', handleDragEnd, false);
  // });
  //
  // var dragSrcEl = null;
  //
  // function handleDragStart(e) {
  //   console.log('start');
  //   // Target (this) element is the source node.
  //   this.style.opacity = '0.7';
  //
  //   dragSrcEl = this;
  //
  //   e.dataTransfer.effectAllowed = 'move';
  //   e.dataTransfer.setData('text/html', this.innerHTML);
  // }
  //
  // function handleDrop(e) {
  //   // this/e.target is current target element.
  //   if (e.stopPropagation) {
  //     e.stopPropagation(); // Stops some browsers from redirecting.
  //   }
  //   // Don't do anything if dropping the same column we're dragging.
  //   if (dragSrcEl != this) {
  //     // Set the source column's HTML to the HTML of the columnwe dropped on.
  //     dragSrcEl.innerHTML = this.innerHTML;
  //     this.innerHTML = e.dataTransfer.getData('text/html');
  //   }
  //   return false;
  // }
  //
  // function handleDragOver(e) {
  //   if (e.preventDefault) {
  //     e.preventDefault(); // Necessary. Allows us to drop.
  //   }
  //   //
  //   e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.
  //   return false;
  // }
  // //
  // function handleDragEnter(e) {
  //   // this / e.target is the current hover target.
  //   this.classList.add('over');
  //   console.log('enter');
  // }
  // //
  // function handleDragLeave(e) {
  //   this.classList.remove('over');  // this / e.target is previous target element.
  // }
  //
  // function handleDragEnd(e) {
  //   // this/e.target is the source node.
  //   [].forEach.call(cols, function (col) {
  //     col.classList.remove('over');
  //   });
  // }

});












// function timer()  {
//   $('#timer').text('00:00:00');
//   var this_date = new Date();
//   clearInterval(start_time_interval);
//   start_time_interval = setInterval(function(){
//     var new_date = new Date() - this_date;
//     var sec   = Math.abs(Math.floor(new_date/1000)%60); //sek
//     var min   = Math.abs(Math.floor(new_date/1000/60)%60); //min
//     var hours = Math.abs(Math.floor(new_date/1000/60/60)%24); //hours
//     if (sec.toString().length   == 1) sec   = '0' + sec;
//     if (min.toString().length   == 1) min   = '0' + min;
//     if (hours.toString().length == 1) hours = '0' + hours;
//     $('.timer').text(hours + ':' + min + ':' + sec);
//   },100);
// }


//
// $('#game-start').one('click', function () {
//   console.log('test');
//   for (let i = 15; i>0; i--) {
//     $('.lets-play').append(`<span class="numbers">${i}</span>`);
//     newGame.push(i)
//   }
//   $('.lets-play').append(`<span class="numbers free"></span>`);
//   newGame.push(0);
//   console.log(newGame)
// });
//
//
// $('#refresh').click(function () {
//   function compareRandom(a, b) {
//     return Math.random() - 0.5;
//   }
//   newGame.sort(compareRandom);
//   console.log(newGame);
//   $('.lets-play').empty();
//   for (let i = 15; i>0; i--) {
//     $('.lets-play').append(`<span class="numbers">${newGame[i]}</span>`);
//   }
//   $('.lets-play').append(`<span class="numbers free"></span>`);
// })


// sort items
// $('#refresh').click( function refreshGame() {
//   console.log('working click!!!');
//   var parent = $(".lets-play");
//   var divs = parent.children();
//   while (divs.length) {
//     parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
//   }
// });