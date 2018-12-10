$( document ).ready(function() {
  console.log("ready!");
  var newGame = [];

  $('#game-start').one('click', function () {
    console.log('test');
    // for (let i = 15; i>0; i--) {
    //   $('.lets-play').append(`<span class="numbers">${i}</span>`);
    //   newGame.push(i)
    // }
    // $('.lets-play').append(`<span class="numbers free"></span>`);
    // newGame.push(0);
    console.log(newGame)
    refresh();
  });

  function compareRandom(a, b) {
    return Math.random() - 0.5;
  }

  function refresh() {
    newGame = [];
    for (let i = 15; i > 0; i--) {
      newGame.push(i)
    }
    newGame.sort(compareRandom);
    console.log(newGame);
    $('.lets-play').empty();
    for (let i = 0; i < newGame.length; i++) {
      $('.lets-play').append(`<span class="numbers">${newGame[i]}</span>`);
    }
    $('.lets-play').append(`<span class="numbers free"></span>`);
  };


  $('#refresh').click(function () {
//     function compareRandom(a, b) {
//       return Math.random() - 0.5;
//     }
//     newGame.sort(compareRandom);
//     console.log(newGame);
//     $('.lets-play').empty();
//     for (let i = 15; i>0; i--) {
//       $('.lets-play').append(`<span class="numbers">${newGame[i]}</span>`);
//     }
//     $('.lets-play').append(`<span class="numbers free"></span>`);
//   })
    refresh();
});


  function handleDragOver(e) {
    if (e.preventDefault) {
      e.preventDefault(); // Necessary. Allows us to drop.
    }
    //
    e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.

    return false;
  }

  //
  function handleDragEnter(e) {
    // this / e.target is the current hover target.
    this.classList.add('over');
  }

  //
  function handleDragLeave(e) {
    this.classList.remove('over');  // this / e.target is previous target element.
  }


  // function handleDrop(e) {
  //   // this / e.target is current target element.
  //   if (e.stopPropagation) {
  //     e.stopPropagation(); // stops the browser from redirecting.
  //   }
  //   // See the section on the DataTransfer object.
  //   return false;
  // }

  function handleDragEnd(e) {
    // this/e.target is the source node.
    [].forEach.call(cols, function (col) {
      col.classList.remove('over');
    });
  }

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

  function handleDragStart(e) {
    // Target (this) element is the source node.
    this.style.opacity = '0.7';

    dragSrcEl = this;

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);

    // e.dataTransfer.setData("text/html", e.target.id);
    // if (dragSrcEl == '') {
    //   this.classList.add('white')
    // }
  }

  function handleDrop(e) {
    // this/e.target is current target element.
    if (e.stopPropagation) {
      e.stopPropagation(); // Stops some browsers from redirecting.
    }
    // Don't do anything if dropping the same column we're dragging.
    if (dragSrcEl != this) {
      // Set the source column's HTML to the HTML of the columnwe dropped on.
      dragSrcEl.innerHTML = this.innerHTML;
      this.innerHTML = e.dataTransfer.getData('text/html');

      // e.target.appendChild(document.getElementById('free'));
    }


    // if (dragSrcEl == '') {
    //   this.classList.add('white')
    // }
    return false;
  }

});


  // if ($('lets-play span').length == 0) {
  //   console.log('test');
  //   this.className('white')
  // }

  // sort div
  // $('#refresh').click( function refreshGame() {
  //   console.log('working click!!!');
  //   var parent = $(".lets-play");
  //   var divs = parent.children();
  //   while (divs.length) {
  //     parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
  //   }
  // });





// let btnStart = document.getElementById('#game-start');
// btnStart.addEventListener('click', function () {
//   console.log('test');
// });
//











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



