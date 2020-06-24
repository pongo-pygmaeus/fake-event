$(document).ready(function() {
  var randomEmoji = function() {
    var index = (Math.floor(Math.random() * 55)) + 128512
    return "&#".concat(index.toString())
  }

  $('#mouse-over-list').on('mouseover','li', function(e){
    var element = $(this)
    e.preventDefault();
    $('li').css("background","white")
    element.css("background","yellow")

    switch(element[0].id) {
      case 'mol-1':
        $("#result-list").find("#amazing-span").trigger("customEvent")
        break;
      case 'mol-2':
        $("#result-list").find("#best-span").trigger("customEvent")
        break;
      case 'mol-3':
        $("#result-list").find("#sweet-span").trigger("customEvent")
        break;
      default:
        break;
    }
  })

  $("#result-list").on('customEvent', 'li', function(e){
    var targetSpan = $(this).find('span').html(randomEmoji())
  })  
});