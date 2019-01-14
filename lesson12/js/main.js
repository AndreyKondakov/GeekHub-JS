var geekhub = document.getElementById('btn-last-change');
geekhub.addEventListener('click', function () {
  var div = document.createElement('div');
  div.classList.add('spinner');
  this.parentNode.appendChild(div);

  setTimeout(function () {

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
    div.classList.remove('spinner');

  }, 2000);      // setTimeout for see spinner

});

function getData() {
  fetch('https://api.github.com/users/AndreyKondakov/repos\n', {
  }).then(dataWrappedByPromise => dataWrappedByPromise.json())
    .then(data => {
      var list = document.getElementById('git-list');
      for(let i=0; i<data.length; i++) {
        let li = document.createElement('li');
        li.classList.add('repItem');
        li.innerHTML = data[i]['name'];
        list.appendChild(li);
      }
    }).catch(function(err) {
    console.log('Error!')
  });
};
getData();

//  canvas ------------------------
var ms = document.getElementById("tp2p");
var tp = ms.getContext("2d");
ms.height = window.innerHeight;
ms.width = window.innerWidth;
var tp2p = "TEMPLATEP2P";
tp2p = tp2p.split("");
var font_size = 10;
var columns = ms.width / font_size;
var drops = [];
for (var x = 0; x < columns; x++)
  drops[x] = 1;

function draw() {
  tp.fillStyle = "rgba(0, 0, 0, 0.05)";
  tp.fillRect(0, 0, ms.width, ms.height);
  tp.fillStyle = "#686160";
  tp.font = font_size + "px arial";
  for (var i = 0; i < drops.length; i++) {
    var text = tp2p[Math.floor(Math.random() * tp2p.length)];
    tp.fillText(text, i * font_size, drops[i] * font_size);
    if (drops[i] * font_size > ms.height && Math.random() > 0.975)
      drops[i] = 0;
    drops[i]++;
  }
}
setInterval(draw, 47);
// --------------------- end canvas



// var i;
//
// for(var i=0; i<repItem.length; i++){
//   repItem[i].onclick = function(){
//   //   var div = this.parentElement;
//   //   div.style.opacity = "0";
//   //   setTimeout(function(){
//   //     div.style.display = "none";
//   //   }, 600);
//     console.log(this.parentElement);
//   }
// }

var list = document.getElementById('git-list');

list.addEventListener('click', function (target) {
  var count = [].indexOf.call(this.children, (target ? target.target : event.srcElement) );
  console.log(count);
  return count
});






list.addEventListener('click', ({target}) => {




  // var repItem = document.getElementsByClassName('repItem');

  // var list = document.getElementById('git-list');
  // console.log(list);

  // function test(e){
  //   console.log( [].indexOf.call(this.children, (e ? e.target : event.srcElement) ) );
  // };
  // test(target);
  //


  if (target.className === 'repItem') {




    // var count = target.indexOf.call(this.children, (e ? e.target : event.srcElement) );


    // list.removeChild(target);
    // console.log(count);

    var div = document.createElement('div');
    div.classList.add('spinner');
    target.appendChild(div);

    setTimeout(function () {

      fetch('https://api.github.com/users/AndreyKondakov/repos\n', {
      }).then(dataWrappedByPromise => dataWrappedByPromise.json())
        .then(data => {
          // var getOneBranh = name[target.innerText];


            // var getOneBranh = data[1];
          // console.log(getOneBranh);
          // var getReposLastDate = getOneBranh['pushed_at'];
          // var itemDate = document.getElementById('geekhubJs');
          // var spanDate = itemDate.querySelector('.result-item');
          // spanDate.innerHTML = getReposLastDate;
        }).catch(function(err) {
        console.log('Error!')
      });
      // div.classList.remove('spinner');
      target.remove(div);


    }, 1000);      // setTimeout for see spinner


  }
});