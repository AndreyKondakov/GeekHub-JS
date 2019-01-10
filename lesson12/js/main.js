//
// function getData(id) {
//   fetch('https://api.github.com/users/AndreyKondakov/repos\n', {
//     // method: 'get',
//     // dataType: "json"
//   }).then(dataWrappedByPromise => dataWrappedByPromise.json())
//     .then(data => {
//       // you can access your data here
//       var getOneBranh = data[id];
//       var getReposLastDate = getOneBranh['pushed_at'];
//       var itemDate = document.getElementById('geekhubJs');
//       var spanDate = itemDate.querySelector('.result-item');
//       spanDate.innerHTML = getReposLastDate;
//     }).catch(function(err) {
//     // обработка ошибки
//     console.log('Error!')
//   });
// }

var geekhub = document.getElementById('btn-last-change');
geekhub.addEventListener('click', function () {
  fetch('https://api.github.com/users/AndreyKondakov/repos\n', {
  }).then(dataWrappedByPromise => dataWrappedByPromise.json())
    .then(data => {
      // you can access your data here
      var getOneBranh = data[13];
      var getReposLastDate = getOneBranh['pushed_at'];
      var itemDate = document.getElementById('geekhubJs');
      var spanDate = itemDate.querySelector('.result-item');
      spanDate.innerHTML = getReposLastDate;
    }).catch(function(err) {
    // обработка ошибки
    console.log('Error!')
  });
});