$(document).ready(() => {
	/*$('.readmore').click() {
			$('#how-this-on-click').slideDown();
	}
}

$('.readless').click() {
	$('#how-this-on-click').slideUp();
}*/

	$('.readmore').click(showMore)

	function showMore() {
		$('#show-this-on-click').slideDown();
		$('.readless hide').show();
		$('.readmore').hide();
	}

	$('.readless hide').click(showLess) 

	function showLess() {
		$('#show-this-on-click').slideUp();
		$('.readless hide').hide();
		$('.readmore').show();
	}

	$('.learnmore').click(learningMore)

		function learningMore() {
		$('#learnmoretext').slideDown();
		$('.learnmore').hide();
	}

})





