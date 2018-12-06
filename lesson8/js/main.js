$( document ).ready(function() {
  console.log( "ready!" );


  function handleDragStart(e) {
    this.style.opacity = '0.4';  // this / e.target is the source node.
  }

  var cols = document.querySelectorAll('.lets-play');
  [].forEach.call(cols, function(col) {
    col.addEventListener('dragstart', handleDragStart, false);
  });






});


