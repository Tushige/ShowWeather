/*
 * Further Work:
 * 1. different background for different seasons
 * 2. Display degrees in Celcius
 */
$(document).ready(function() {
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?zip=60108,us&appid=e2e5797a4479450ca43d258ee46841df", function(json) {
      console.log(json);
    //display city name
    $(".city").html(json.name);

    //display weather in F
    var html = "<div class='wdata'>";
    $(".temp").html(Math.floor(json.main.temp*(9/5)-459.67) + '<sup><i class="fa fa-genderless"></i></sup>'+  ' F');
    $(".temp-min").html(Math.floor(json.main.temp_min*(9/5)-459.67)+'<sup><i class="fa fa-genderless"></i></sup>'+' F');
    $(".temp-max").html(Math.floor(json.main.temp_max*(9/5)-459.67) + '<sup><i class="fa fa-genderless"></i></sup>'+' F');
    var description = "<div class='description'> " + json.weather[0].description + "</div>"
    var weather = document.querySelector(".weather-degree");
    weather.innerHTML +=description;
  });
});
