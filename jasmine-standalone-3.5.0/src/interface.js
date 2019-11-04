$(document).ready(function(){
  $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    $('#current-temperature').text(data.main.temp);
  })
  var thermostat = new Thermostat();
  updateTemperature();

  $('#temp-up').on('click', function() {
    thermostat.up(1);
    updateTemperature();
  });

  $('#temp-down').click(function() {
    thermostat.down(1);
    updateTemperature();
  });

  $('#temp-reset').click(function() {
    thermostat.reset();
    updateTemperature();
  });

  $('#psm-on').click(function() {
    thermostat.powerSavingOn();
    $('#power-saving').text('on')
    updateTemperature();
  });

  $('#psm-off').click(function() {
    thermostat.powerSavingOff();
    $('#power-saving').text('off')
    updateTemperature();
  });

  $('#current-city').change(function() {
    var city = $('#current-city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
      $('#current-temperature').text(data.main.temp)
    });
  });

  function updateTemperature() {
    $('#temperature').text(thermostat._temp);
    $('#temperature').attr('class', thermostat.usage());
  };

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appi=3c26c71cd24004a69127ed0c9d9bf198'
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('current-temperature').text(data.main.temp);
    });
  };
});
