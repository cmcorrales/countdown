$(document).ready(function() {
  $('#submit').click(function(e) {
    e.preventDefault();
    var today = new Date();
    var userEntry = new Date();
    userEntry.setMonth($('#month'-1).val());
    userEntry.setDate($('#day').val());
    if (today.getTime() < userEntry.getTime()) {
      var difference = userEntry.getTime() - today.getTime();
      var display = Math.floor(difference / (1000 * 60 * 60 * 24));
      console.log(display);
    }
  });
})
/* function countdownClock() {
	var secs = 0,
		mins = 0,
		hours = 0,
		days = 0,
		end_date,
		event_name,
		interval;

	init();

	$('form').on('submit', function (e) {
		e.preventDefault();
		init();


		var year = Number($('.year').val()),
			month = Number($('.month').val()),
			day = Number($('.day').val()),
			name = $('.name').val();

		if (_.isNaN(year)){
			alert('Not a valid year.');
		} else if (_.isNaN(month)) {
			alert('Please enter the month as a number, e.g. enter 3 for March.');
		} else if (_.isNaN(day)) {
			alert('You haven\'t learned your days yet?');
		} else {
			end_date = new Date(year, month - 1, day);
			dateDiff();
			$('.modal').fadeOut('600');
			$('#event_name').text(name);
			$('#container').fadeIn('600');
		}

	});

	function resetOnError() {
		$('#container').hide();
		$('.modal').show();
	};


	function dateDiff() {
		var now = new Date(),
			diff = end_date - now;

		days = Math.floor(diff/(3600 * 24 * 1000));
		var remainder =  diff % (3600 * 24 * 1000);

		hours = Math.floor(remainder / (3600 * 1000));
		remainder = diff % (3600 * 1000);

		mins = Math.floor(remainder / (60 * 1000));
		remainder = diff % (60 * 1000);

		secs = Math.floor(remainder / (1000));

		if (days > 9999) {
			init();
			alert('Date too far in the future.');
		} else {
			displayTime();
			setTimeout(dateDiff, 500);
		}
	};
  */
