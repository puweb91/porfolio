$('.all-guide .depth1 li a').click(function () {
	$(this).parent().addClass('on');
	$(this).parent().siblings().removeClass('on');
	
	$(this).siblings('.depth2').children().eq(0).addClass('on');
	$(this).parent().siblings().find('.depth2').children().removeClass('on');
});

$('.all-guide .depth2 li a').click(function () {
	$(this).parent().addClass('on');
	$(this).parent().siblings().removeClass('on');
});