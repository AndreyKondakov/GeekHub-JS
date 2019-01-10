


var getReposResult = fetch('https://api.github.com/users/AndreyKondakov/repos\n', {
  // method: 'get',
  // dataType: "json"
}).then(dataWrappedByPromise => dataWrappedByPromise.json())
  .then(data => {
    // you can access your data here
    var getOneBranh = data[16];
    console.log(getOneBranh)
  }).catch(function(err) {
  // обработка ошибки
  console.log('Error!')
});

// console.log(getReposResult);

