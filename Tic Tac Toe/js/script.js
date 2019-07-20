//start of jquery
jQuery(document).ready(function($) {
    //starting with player Red
    var player = 1;

    $('.box').on('click', function() {
        // if the submit button is disabled change the color based on algroithm, if it is not disabled do nothing 
        if ($('#completeMove').attr('disabled')) {

            //checking if the box is already checked
            if ($(this).hasClass('cross') || $(this).hasClass('circle')) {
                $('h1').html('This box is already checked!');
            } else {
                // making the submit button enabled fo making a move
                $('#completeMove').removeAttr('disabled');

                //checking for class if player is 1 box should be red if player is 2 box should become green
                var mark = checkForMark(player);

                function checkForMark(player) {
                    if (player == 1) {
                        return 'cross';
                    } else if (player == 2) {
                        return 'circle';
                    }

                }
                //adding the color accordingly and adding an active class to be used for the undo command
                $(this).addClass(mark).addClass('active');

                //adding the moves, if function here was for deciding which side of the scren the move should appear
                var coordinates = '<p class="activeCoordinates">' + $(this).attr('data-id') + '<br> </p>';
                if (player == 1) {
                    $('#xPlayer span').append(coordinates)
                } else if (player == 2) {
                    $('#oPlayer span').append(coordinates)
                }
            }
        } else if (!$('#completeMove').attr('disabled')) {
            return;
        }

        //making the undo button visible on wither side of the screen depending on whose tirn it is
        if (player == 1) {
            $('#xPlayer button').removeClass('hidden');
        } else if (player == 2) {
            $('#oPlayer button').removeClass('hidden');
        }
    });


    $('#completeMove').on('click', function() {
        //making the button disabled again
        $(this).attr('disabled', 'true');
        //making the undo button hidden again
        $('button.undoMove').addClass('hidden');
        //removing the active class to be added again after the next move
        $('.box').removeClass('active');
        //removing the h1 text to avoid confusion
        $('h1').text('');
        //removing the active coordinates class to avoid all coordinates being deleted when pressing undo
        $('p').removeClass('activeCoordinates');

        if /* check if red won */ (
            ($('#grid').find('#c00').is('.cross') && $('#grid').find('#c01').is('.cross') && $('#grid').find('#c02').is('.cross')) ||
            ($('#grid').find('#c10').is('.cross') && $('#grid').find('#c11').is('.cross') && $('#grid').find('#c12').is('.cross')) ||
            ($('#grid').find('#c20').is('.cross') && $('#grid').find('#c21').is('.cross') && $('#grid').find('#c22').is('.cross')) ||
            ($('#grid').find('#c00').is('.cross') && $('#grid').find('#c10').is('.cross') && $('#grid').find('#c20').is('.cross')) ||
            ($('#grid').find('#c10').is('.cross') && $('#grid').find('#c11').is('.cross') && $('#grid').find('#c12').is('.cross')) ||
            ($('#grid').find('#c20').is('.cross') && $('#grid').find('#c21').is('.cross') && $('#grid').find('#c22').is('.cross')) ||
            ($('#grid').find('#c00').is('.cross') && $('#grid').find('#c11').is('.cross') && $('#grid').find('#c22').is('.cross')) ||
            ($('#grid').find('#c20').is('.cross') && $('#grid').find('#c11').is('.cross') && $('#grid').find('#c02').is('.cross'))
        ) {
            alert('Player 1 has won.');
            $('.row div').removeClass('cross').removeClass('circle');
        } else if /*check if green won*/ (
            ($('#grid').find('#c00').is('.circle') && $('#grid').find('#c01').is('.circle') && $('#grid').find('#c02').is('.circle')) ||
            ($('#grid').find('#c10').is('.circle') && $('#grid').find('#c11').is('.circle') && $('#grid').find('#c12').is('.circle')) ||
            ($('#grid').find('#c20').is('.circle') && $('#grid').find('#c21').is('.circle') && $('#grid').find('#c22').is('.circle')) ||
            ($('#grid').find('#c00').is('.circle') && $('#grid').find('#c10').is('.circle') && $('#grid').find('#c20').is('.circle')) ||
            ($('#grid').find('#c10').is('.circle') && $('#grid').find('#c11').is('.circle') && $('#grid').find('#c12').is('.circle')) ||
            ($('#grid').find('#c20').is('.circle') && $('#grid').find('#c21').is('.circle') && $('#grid').find('#c22').is('.circle')) ||
            ($('#grid').find('#c00').is('.circle') && $('#grid').find('#c11').is('.circle') && $('#grid').find('#c22').is('.circle')) ||
            ($('#grid').find('#c20').is('.circle') && $('#grid').find('#c11').is('.circle') && $('#grid').find('#c02').is('.circle'))
        ) {
            alert('Player 2 has won.');
            $('.row div').removeClass('cross').removeClass('circle');
            $()
        } else {
            //change turns
            if (player == 1) {
                return player = 2;
            } else {
                return player = 1;
            }
        }
    });
    $('.undoMove').on('click', function() {
        //removing color
        $('.active').removeClass('cross').removeClass('circle');
        //making the submit button deactive again
        $('#completeMove').attr('disabled', 'true');
        //removin the coordinates added
        $('.activeCoordinates').remove();
    }); 
   

  $('#myBtn').on('click', function(event) {
    $('#myModal').css('display', 'block');
  });
  $('.close').on('click', function(event) {
    $('#myModal').css('display', 'none');
  });

});
//end of jquery



