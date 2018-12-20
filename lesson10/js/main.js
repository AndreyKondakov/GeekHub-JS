$(document).ready(function () {

const API_PATH = 'http://api.openweathermap.org/data/2.5/weather?q=';
const API_KEY = "&APPID=524cbd8746782d97d6a1135c027a7bbb";
var apiUnits = '&units=metric';

$('#getWeather').click(function (e) {
  e.preventDefault();

  var city = $('.your-city').val();

  if (city != '') {
    console.log('no error');
    console.log(API_PATH + city + API_KEY + apiUnits);
    $('#error').html(' ');

    $.ajax({
      url: API_PATH + city + API_KEY + apiUnits,
      type: 'GET',
      dataType: 'json',
      success: function (data) {
        console.log(data);
        var widget = show(data);
        $('#show').html(widget);
        $('#city').val('');
      }
    });

  } else {
    $('#error').html('Field can`t be empty');
    console.log('error')
  }
});

function show(data) {
  return '<h2>Current Weather for '+ data.name + ', ' + data.sys.country +'</h2>' +
         '<h3><strong>Weather (погода)</strong>: ' + data.weather[0].main + '</h3>' +
         '<h3><strong>Description (описание)</strong>: <img src="http://openweathermap.org/img/w/'+data.weather[0].icon+'.png">' + data.weather[0].description + '</h3>' +
         '<h3><strong>Temperature (температура)</strong>: ' + data.main.temp + '&deg;C</h3>' +
         '<h3><strong>Pressure (давление)</strong>: ' + data.main.pressure + ' hPa</h3>' +
         '<h3><strong>Humidity (влажность)</strong>: ' + data.main.humidity + '%</h3>' +
         '<h3><strong>Wind speed (скорость ветра)</strong>: ' + data.wind.speed + ' m/s</h3>';
}

});


// function setup() {
//   var button = select('#getWeather');
//   button.mousePressed(weatherAsk);
//
//   input = select('.your-city');
// }
//
// function weatherAsk() {
//   var url = API_PATH + input.value() + API_KEY + apiUnits;
//
// }
// var url = API_PATH + input.value() + API_KEY + apiUnits;

/////////////////////

// // 1. Создаём новый объект XMLHttpRequest
// var xhr = new XMLHttpRequest();
//
// // 2. Конфигурируем его: GET-запрос на URL
// xhr.open('GET', url, false);
//
// // 3. Отсылаем запрос
// xhr.send();

// 4. Если код ответа сервера не 200, то это ошибка
// if (xhr.status != 200) {
//   // обработать ошибку
//   console.log( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
// } else {
//   // вывести результат
//   console.log( xhr.responseText ); // responseText -- текст ответа.
// }
///////////////////////////////