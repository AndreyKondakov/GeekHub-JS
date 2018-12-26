$(document).ready(function(){
  var save = null;

  function getRandomQuote() {
    $.ajax({
      type: "POST",
      url: "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous",
      dataType: "json",
      success: function (response) {
        console.log(response);
        displayAPIQuote(response);
      },
      error: save,
      beforeSend: setHeader,
    });
    function setHeader(xhr) {
      xhr.setRequestHeader("X-Mashape-Key", "oueZwRubMAmsh4PztWKubnB99BVAp1H5YlHjsn7AfNRY6QpftP");
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.setRequestHeader("Accept", "application/json");
    }
  };

  $("#quote-next").click(getRandomQuote);

  function displayAPIQuote(response) {
    $("#quotes-text p").text(response[0].quote);
    $("#quotes-text span").text(response[0].author);
  }
});

(function () {

var buttonNextQuote = document.getElementById('quote-next2')
  
  buttonNextQuote.addEventListener('click', function (e) {
    e.preventDefault();

    // 1. Создаём новый объект XMLHttpRequest
    var xhr = new XMLHttpRequest();
    // 2. Конфигурируем его: GET-запрос на URL
    xhr.open('GET', 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous', false);
    xhr.setRequestHeader("X-Mashape-Key", "oueZwRubMAmsh4PztWKubnB99BVAp1H5YlHjsn7AfNRY6QpftP");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("Accept", "application/json");
    // 3. Отсылаем запрос
    xhr.send();
    // 4. Если код ответа сервера не 200, то это ошибка
    if (xhr.status != 200) {
      // обработать ошибку
      console.log( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
      console.log('error')
    } else {
      // вывести результат
      // console.log(xhr.responseText); // responseText -- текст ответа.
      console.log('no error');
      var save = JSON.parse(xhr.responseText);
      var quote = document.getElementById('quotes-text2');
      var p = quote.querySelector('p');
      var span = quote.querySelector('span');

      p.innerHTML = save[0].quote;
      span.innerHTML = save[0].author;
    }
  });

}());