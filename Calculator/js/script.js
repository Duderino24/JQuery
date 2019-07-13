
	jQuery(document).ready(function($) {
		$('button.value').on('click', function(x) {
			$('input').val(($('input').val() + x.target.innerHTML ))
		});
		$('button#equal').on('click', function() {
			$('input').val(eval($('input').val()))
		});
		$('button#deleteAll').on('click', function() {
			$('input').val("");
		});
		$('button#delete').on('click', function() {
			$('input').val($('input').val().slice(0, -1));
		});
	});