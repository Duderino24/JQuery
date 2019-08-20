$(document).ready(function() {
 		$('button#start').on('click', function(event) {
 			$('#bookingArea').slideDown('slow', function() {

 			});
 		});
 		$('#seats div p').mouseover(function() {
 			if ( !$(this).hasClass('booked') ) {
 				$(this).css('background', '#4DB3A2');
 			} else {
 				return;
 			}
 			$('#seats div p').mouseleave(function() {
	 			if ( $(this).hasClass('firstClass') ) {
	 				$(this).css('background', '#1E599E');
	 			} else {
	 				$(this).css('background', '#1A98B8');
	 			}
	 		});
 		});
 		var numberSelected = 0;
 		var total = 0;
 		var bookedTotal = 0;
 		$('#seats div div p').on('click', function(event) {
 			if (!$(this).hasClass('booked')) {
	 			if ( !$(this).hasClass('selected') ) {
		 			numberSelected++;
		 			$(this).addClass('selected');
		 			if ( $(this).hasClass('firstClass') ) {
		 				total += 200;
		 			} else {
		 				total +=100;
		 			}
		 		}
		 		else {
		 			numberSelected--;
		 			$(this).removeClass('selected');
		 			if ($(this).hasClass('firstClass')) {
		 				total -= 200;
		 				$(this).css('background', '#1E599E');
		 			} else {
		 				total -=100;
		 				$(this).css('background', '#1A98B8');
		 			}
		 		}
		 	}
		 	else {
		 		return;
		 	}
	 		$('#numberSeats').text(numberSelected);
	 		$('#total').text('$' + total);
 		});
 		$('#book').on('click', function() {
 			$('#seats div div p.selected').addClass('booked').removeClass('selected');
 			bookedTotal = total;
 		});
 		$('#submit').on('click', function() {
 			if( alert('The bus booking has been finished. \r\n Your total is: $' + bookedTotal)){}
			else window.location.reload(); 
 		});
 	});