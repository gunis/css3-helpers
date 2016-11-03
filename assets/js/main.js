var copyText = document.querySelector('.copy-btn');  

$('.copy-btn').on('click', function(e) {
	e.preventDefault();
	var self = $(this);
	var copiedElementIdentifier = self.attr('data-target');
	var copiedElement = document.querySelector(copiedElementIdentifier);
	var range = document.createRange();


	range.selectNode(copiedElement);
	window.getSelection().addRange(range);

	try {  
		// Now that we've selected the anchor text, execute the copy command  
		var successful = document.execCommand('copy');  
		var msg = successful ? 'successful' : 'unsuccessful';  
		console.log('Copying was ' + msg);  
	  } catch(err) {  
		console.log('Oops, unable to copy');  
	  }  
	    
	  // Remove the selections - NOTE: Should use   
	  // removeRange(range) when it is supported  
	  window.getSelection().removeAllRanges();
});

$(function ($) {
	$('[data-toggle="popover"]').popover();
	
	$('.panel-heading span.clickable').on("click", function (e) {
		if ($(this).hasClass('panel-collapsed')) {
			// expand the panel
			$(this).parents('.panel').find('.panel-body').removeClass('hidden');
			$(this).removeClass('panel-collapsed');
			$(this).find('i').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
		}
		else {
			// collapse the panel
			$(this).parents('.panel').find('.panel-body').addClass('hidden');
			$(this).addClass('panel-collapsed');
			$(this).find('i').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
		}
	});

	var borderRadius = new BorderRadius('4px 4px 4px 4px');
	$('#border-radius-definition').text(borderRadius.getDefinition());

	var boxShadow = new BoxShadow('1px 4px 14px #878787');
	$('#box-shadow-definition').text(boxShadow.getDefinition());

	var boxSizing = new BoxSizing('border-box');
	$('#box-sizing-definition').text(boxSizing.getDefinition());
});