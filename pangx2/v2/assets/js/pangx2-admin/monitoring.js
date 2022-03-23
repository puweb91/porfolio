$(function ($) {
	// server list checkbox
	$('.period-list input[type="checkbox"]').change(function () {
		if ($(this).is(':checked')) {
			$(this).parents('li').addClass('on');
		} else {
			$(this).parents('li').removeClass('on');
		}
	});
	
	$('.rack-list').bxSlider({
		pager: false,
		prevSelector: '.prev',
		prevText: '<i class="fas fa-angle-left"></i>',
		nextSelector: '.next',
		nextText: '<i class="fas fa-angle-right"></i>',
		adaptiveHeight: true
	});
	
	$('.rack-list > li > span').on('click', function () {
		$('.rack-list > li > span').removeClass('on');
		$(this).addClass('on');
	});
});