$(function () {
	// 요금관리 datepicker
	$(".alarm-picker1").datepicker({
		dateFormat: 'yy-mm-dd',
		showOptions: {direction: "down"},
		monthNames: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
		dayNames: ["일", "월", "화", "수", "목", "금", "토"],
		dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
		showMonthAfterYear: true,
		yearSuffix: "년"
	});
	$(".alarm-picker2").datepicker({
		dateFormat: 'yy-mm-dd',
		showOptions: {direction: "down"},
		monthNames: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
		dayNames: ["일", "월", "화", "수", "목", "금", "토"],
		dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
		showMonthAfterYear: true,
		yearSuffix: "년"
	});
	
	// 알림톡 충전하기 라디오 버튼
	$('.select-option input').change(function () {
		var sel_option = $(this).parents('th').index();
		
		if (sel_option == 1) {
			$('.focus-box').animate({"left": "214px"}, 300);
		} else if (sel_option == 2) {
			$('.focus-box').animate({"left": "518px"}, 300);
		} else {
			$('.focus-box').animate({"left": "822px"}, 300);
		}
	});
	
	// 서비스이용약관동의 약관보기
	$('.view-terms').click(function () {
		$('.terms-service').fadeIn(250);
	});
	
	// 무통장 입금 라디오버튼
	$('.payment-method input').change(function () {
		var pay_option = $(this).parents('.col').index();
		if (pay_option == 0) {
			$('.no-account').css('display', 'block');
		} else {
			$('.no-account').css('display', 'none');
		}
	});
	
});

$(document).ready(function () {
	$('.payment-method .col').each(function () {
		if ($(this).find('input').is(':checked')) {
			var pay_option = $(this).index();
			if (pay_option == 0) {
				$('.no-account').css('display', 'block');
			} else {
				$('.no-account').css('display', 'none');
			}
		}
	});
	
	
});