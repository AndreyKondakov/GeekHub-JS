
var getReposLastDate;

fetch('https://api.github.com/users/AndreyKondakov/repos\n', {
  // method: 'get',
  // dataType: "json"
}).then(dataWrappedByPromise => dataWrappedByPromise.json())
  .then(data => {
    // you can access your data here
    var getOneBranh = data[16];
    getReposLastDate = getOneBranh['pushed_at'];
    var itemDate = document.getElementById('geekhubJs');
    var spanDate = itemDate.querySelector('.result-item');
    spanDate.innerHTML = getReposLastDate;

  }).catch(function(err) {
  // обработка ошибки
  console.log('Error!')
});


