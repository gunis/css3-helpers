/* bug */
$(function ($) {
	function getNewPosition() {
		// Get viewport dimensions (remove the dimension of the div)
		var w = $(window).width() - 25;
		var h = $(window).height() - 25;
		var x = Math.floor(Math.random() * w);
		var y = Math.floor(Math.random() * h);
		return [y, x];
	}
	var startpos = getNewPosition();
	$('#bug').css({
		top : startpos[0],
		left : startpos[1]
	});
	$('#bug').hover(function() {
		var pos = getNewPosition();
		var rotate = Math.floor(Math.random() * 360);
		$(this).css({
			'-webkit-transform' : 'rotate('+rotate+'deg)',
			'-moz-transform' : 'rotate('+rotate+'deg)',
			'-o-transform' : 'rotate('+rotate+'deg)',
			'-ms-transform' : 'rotate('+rotate+'deg)',
			'transform' : 'rotate('+rotate+'deg)'
		});
		$(this).animate({
			top : pos[0],
			left : pos[1]
		}, 150);
	}, function() {});
});