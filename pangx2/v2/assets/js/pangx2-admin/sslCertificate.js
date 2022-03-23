$(document).ready(function () {
	/* 셀렉트박스 기타 선택시 직접입력 input 활성화 */
	$('.form-select').on('change', function () {
		if ($(this).val() == '기타') {
			$(this).next().prop('readonly', false);
		} else {
			$(this).next().prop('readonly', true);
		}
	});
	
	/* 상단 타이틀 서브메뉴 슬라이드 */
	$('.page-title .search-btn').on('click', function () {
		$(this).parents('.page-title').find('.inner-bottom').slideToggle();
	});
	
	/* 데이트피커 적용 */
	$('.datepicker').each(function () {
		$(this).datepicker({
			dateFormat: 'yy-mm-dd',
			showOptions: {
				direction: "down"
			},
			monthNames: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
			dayNames: ["일", "월", "화", "수", "목", "금", "토"],
			dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
			showMonthAfterYear: true,
			yearSuffix: "년"
		});
	});
	
	/* 스크롤 다운시 타이틀 고정 */
	$('.contents-wrap.scrollbar-inner').on('scroll', function () {
		if ($(this).scrollTop() > 0) {
			$('.page-title, .page-title-blank').addClass('fixed');
		} else {
			$('.page-title, .page-title-blank').removeClass('fixed');
		}
	});
});
