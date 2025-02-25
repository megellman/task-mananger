let currentDate = $('#current-date');

// currentDate variable updates every second
setInterval(function(){
    currentDate.text(dayjs().format('MMM D, YYYY [at] hh:mm:ss a'))
}, 1000);

// jqueryui datepicker function for task input form
$( function() {
    $( "#datepicker" ).datepicker();
  } );