var wAPI = 'bcfddafca282d7ca6cd12f744ba7ec96';

$(document).ready(function() {
$('#searchAgain').hide()
  $('form').on('submit', function(event) {
  event.preventDefault()
  })

$('#searchButton').on('click', function() {
  $('form').fadeOut(1)
  $('h3').hide()
  var city = $('input').val()

  $.get('https://api.openweathermap.org/data/2.5/weather?units=metric&q='+city+'&'+'appid='+ wAPI, function(data) {

    $('#info').append("<p>" + data.name + ", " + data.sys.country +"</p>")
    $('#info').append("<p> " + data.weather[0].description + "</p>")
    $('#info').append("<p>Current temperature: " + data.main.temp + "&#8451</p>")

    if (data.main.temp < 3) {
      show_image("icons/vvcold.png");
    } else if (3 <= data.main.temp && data.main.temp <14){
      show_image("icons/cold.png");
    } else {
      show_image("icons/sun.png");
    }

    $('#info').append("<p>Maximum temperature: " + data.main.temp_max + "&#8451</p>")
    $('#info').append("<p>Minimum temperature: " + data.main.temp_min + "&#8451</p>")
    $('#weatherBackground').fadeOut(200)

  })
  $('#searchAgain').show()

  function show_image(src) {
        var img = document.createElement("img");
        img.src = src;
        img.height = "100";
        img.width = "100";
        $('#weatherIcons').append(img)
    }


})

$('#searchAgain').on('click', function() {

  $('form').fadeIn(1)
  $('h3').show()
  $('#info').empty()
  $('#weatherIcons').empty()
  $('#searchAgain').hide()
  $('#weatherBackground').fadeIn(200)
})


});
