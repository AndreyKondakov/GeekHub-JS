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

var git = 0;
var getLen = 0;

function getData() {
  fetch('https://api.github.com/users/AndreyKondakov/repos\n', {
    // method: 'get',
    // dataType: "json"
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


