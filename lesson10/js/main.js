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


// only js

(function () {

  const API_PATH = 'http://api.openweathermap.org/data/2.5/weather?q=';
  const API_KEY = "&APPID=524cbd8746782d97d6a1135c027a7bbb";
  var apiUnits = '&units=metric';

  var buttonForJs = document.getElementById('getWeather2');

  buttonForJs.addEventListener('click', function(e) {
    e.preventDefault();
    var show2 = document.getElementById('show2');
    show2.innerHTML = '';

    let getCity = document.getElementById('your-city2').value;

    // 1. Создаём новый объект XMLHttpRequest
    var xhr = new XMLHttpRequest();
    // 2. Конфигурируем его: GET-запрос на URL
    xhr.open('GET', API_PATH + getCity + API_KEY + apiUnits, false);
    // 3. Отсылаем запрос
    xhr.send();
    // 4. Если код ответа сервера не 200, то это ошибка
    if (xhr.status != 200) {
      // обработать ошибку
      console.log( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
      console.log('error')
    } else {
      // вывести результат
      console.log( xhr.responseText ); // responseText -- текст ответа.
      console.log('no error');

      var parseJson = JSON.parse(xhr.responseText);
      show(parseJson);
    }
  });

  function show(data) {
    var showWeather = document.getElementById('show2');

    var nameInfo = document.createElement('p');
    var weatherInfo = document.createElement('p');
    var tempInfo = document.createElement('p');
    var pressureInfo = document.createElement('p');
    var humidityInfo = document.createElement('p');
    var windSpeedInfo = document.createElement('p');

    nameInfo.innerHTML = 'Weather (погода): ' + data.name + ', ' + data.sys.country;
    weatherInfo.innerHTML = 'Description (описание): ' + data.weather[0].main;
    tempInfo.innerHTML = 'Temperature (температура): ' + data.main.temp + '&deg;C';
    pressureInfo.innerHTML = 'Pressure (давление): ' + data.main.pressure + ' hPa';
    humidityInfo.innerHTML = 'Humidity (влажность): ' + data.main.humidity + '%';
    windSpeedInfo.innerHTML = 'Wind speed (скорость ветра): ' + data.wind.speed + ' m/s';

    showWeather.appendChild(nameInfo);
    showWeather.appendChild(weatherInfo);
    showWeather.appendChild(tempInfo);
    showWeather.appendChild(pressureInfo);
    showWeather.appendChild(humidityInfo);
    showWeather.appendChild(windSpeedInfo);
  }
}());