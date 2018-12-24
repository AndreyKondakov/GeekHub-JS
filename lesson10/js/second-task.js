


$('#getWeather').click(function (e) {
  e.preventDefault();


  $.ajax({
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies&count=10',
    type: 'GET',
    dataType: 'json',
    success: function (data) {
      console.log(data);
      // var widget = show(data);
      // $('#show').html(widget);
      // $('#city').val('');
    }
  });






});
