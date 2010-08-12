$(function() {

	$(".tweet").tweet({
		avatar_size: 32,
    count: 6,
    query: "#rubyonrio",
		loading_text: "carregando tweets..."
	});

  var plural = function(num, text){
    var ret = num + ' ' + text
    return (num == 1 ? ret : ret + 's')
  }

  var launchDate = new Date('2010-08-14 10:00')
  var countdown = function(){
    var difference = Math.floor((launchDate - new Date())/1000)
    if (difference < 0) document.location.reload(true)
    var seconds = difference % 60
    var minutes = Math.floor((difference - seconds)/60) % 60
    var hours = Math.floor((difference - seconds - minutes*60)/60/60) % 24
    var days = Math.floor((difference - seconds - minutes*60 - hours*60*60)/60/60/24)

    if (days > 0) $('#days_count').text(plural(days, 'dia') + ',')
    if (hours > 0) $('#hours_count').text(plural(hours, 'hora') + ',')
    if (minutes > 0) $('#minutes_count').text(plural(minutes, 'minuto') + ' e ')
    $('#seconds_count').text(plural(seconds, 'segundo'))

    $('#countdown').show()
  }
  countdown()
  setInterval(countdown, 1000)

});
