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