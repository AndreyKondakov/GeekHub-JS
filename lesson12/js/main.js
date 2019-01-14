var geekhub = document.getElementById('btn-last-change');
geekhub.addEventListener('click', function () {
  fetch('https://api.github.com/users/AndreyKondakov/repos\n', {
  }).then(dataWrappedByPromise => dataWrappedByPromise.json())
    .then(data => {
      var getOneBranh = data[13];
      var getReposLastDate = getOneBranh['pushed_at'];
      var itemDate = document.getElementById('geekhubJs');
      var spanDate = itemDate.querySelector('.result-item');
      spanDate.innerHTML = getReposLastDate;
    }).catch(function(err) {
    console.log('Error!')
  });
});

// setTimeout(func, 1000);

function getData() {
  fetch('https://api.github.com/users/AndreyKondakov/repos\n', {
  }).then(dataWrappedByPromise => dataWrappedByPromise.json())
    .then(data => {
      var list = document.getElementById('git-list');
      for(let i=0; i<data.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = data[i]['name'];
        list.appendChild(li);
      }
    }).catch(function(err) {
    console.log('Error!')
  });
};
getData();

// import { Spinner } from "js/spin.js";

var opts = {
  lines: 13, // The number of lines to draw
  length: 38, // The length of each line
  width: 17, // The line thickness
  radius: 45, // The radius of the inner circle
  scale: 1, // Scales overall size of the spinner
  corners: 1, // Corner roundness (0..1)
  color: '#ffffff', // CSS color or array of colors
  fadeColor: 'transparent', // CSS color or array of colors
  speed: 1, // Rounds per second
  rotate: 0, // The rotation offset
  animation: 'spinner-line-fade-quick', // The CSS animation name for the lines
  direction: 1, // 1: clockwise, -1: counterclockwise
  zIndex: 2e9, // The z-index (defaults to 2000000000)
  className: 'spinner', // The CSS class to assign to the spinner
  top: '50%', // Top position relative to parent
  left: '50%', // Left position relative to parent
  shadow: '0 0 1px transparent', // Box-shadow for the lines
  position: 'absolute' // Element positioning
};

var target = document.getElementById('btn-last-change');
var spinner = new Spinner(opts).spin(target);