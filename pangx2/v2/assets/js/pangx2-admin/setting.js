$(document).ready(function (e) {
	/* 임계치설정 슬라이더 */
	// the code belows assume the colors array is exactly one element bigger
	// than the handlers array.
	var handlers = [60, 80];
	var reset_handlers = [50, 70];
	var colors = ["#59b65b", "#ed6205", "#d5130a"];
	updateColors1(handlers);
	updateColors2(handlers);
	updateColors3(handlers);
	updateColors4(handlers);
	
	$('.critical-list-wrap .button-area .reset').click(function () {
		$('.slider-cpu').slider('option', 'values', reset_handlers);
		$(".amount-cpu1").val(reset_handlers[0] + " %");
		$(".amount-cpu2").val(reset_handlers[1] + " %");
		updateColors1(reset_handlers);
		
		$('.slider-memory').slider('option', 'values', reset_handlers);
		$(".amount-memory1").val(reset_handlers[0] + " %");
		$(".amount-memory2").val(reset_handlers[1] + " %");
		updateColors2(reset_handlers);
		
		$('.slider-hard').slider('option', 'values', reset_handlers);
		$(".amount-hard1").val(reset_handlers[0] + " %");
		$(".amount-hard2").val(reset_handlers[1] + " %");
		updateColors3(reset_handlers);
		
		$('.slider-traffic').slider('option', 'values', reset_handlers);
		$(".amount-traffic1").val(reset_handlers[0] + " %");
		$(".amount-traffic2").val(reset_handlers[1] + " %");
		updateColors4(reset_handlers);
		
		$('.time').val('5분').prop("selected", true);
	});
	
	$(".slider-cpu").slider({
		min: 0,
		max: 100,
		step: 1,
		values: handlers,
		slide: function (event, ui) {
			if (ui.values[0] >= ui.values[1] - 1) {
				event.preventDefault();
			} else {
				$(".amount-cpu1").val(ui.values[0] + " %");
				$(".amount-cpu2").val(ui.values[1] + " %");
				updateColors1(ui.values);
			}
		},
		start: function (event, ui) {
			if (ui.values[0] >= ui.values[1] - 1) {
				event.preventDefault();
			}
		}
	});
	
	$(".slider-memory").slider({
		min: 0,
		max: 100,
		step: 1,
		values: handlers,
		slide: function (event, ui) {
			if (ui.values[0] >= ui.values[1] - 1) {
				event.preventDefault();
			} else {
				$(".amount-memory1").val(ui.values[0] + " %");
				$(".amount-memory2").val(ui.values[1] + " %");
				updateColors2(ui.values);
			}
		},
		start: function (event, ui) {
			if (ui.values[0] >= ui.values[1] - 1) {
				event.preventDefault();
			}
		}
	});
	
	$(".slider-hard").slider({
		min: 0,
		max: 100,
		step: 1,
		values: handlers,
		slide: function (event, ui) {
			if (ui.values[0] >= ui.values[1] - 1) {
				event.preventDefault();
			} else {
				$(".amount-hard1").val(ui.values[0] + " %");
				$(".amount-hard2").val(ui.values[1] + " %");
				updateColors3(ui.values);
			}
		},
		start: function (event, ui) {
			if (ui.values[0] >= ui.values[1] - 1) {
				event.preventDefault();
			}
		}
	});
	
	$(".slider-traffic").slider({
		min: 0,
		max: 100,
		step: 1,
		values: handlers,
		slide: function (event, ui) {
			if (ui.values[0] >= ui.values[1] - 1) {
				event.preventDefault();
			} else {
				$(".amount-traffic1").val(ui.values[0] + " %");
				$(".amount-traffic2").val(ui.values[1] + " %");
				updateColors4(ui.values);
			}
		},
		start: function (event, ui) {
			if (ui.values[0] >= ui.values[1] - 1) {
				event.preventDefault();
			}
		}
	});
	
	$(".amount-cpu1").val($(".slider-cpu").slider("values", 0) + " %");
	$(".amount-cpu2").val($(".slider-cpu").slider("values", 1) + " %");
	
	$(".amount-memory1").val($(".slider-memory").slider("values", 0) + " %");
	$(".amount-memory2").val($(".slider-memory").slider("values", 1) + " %");
	
	$(".amount-hard1").val($(".slider-hard").slider("values", 0) + " %");
	$(".amount-hard2").val($(".slider-hard").slider("values", 1) + " %");
	
	$(".amount-traffic1").val($(".slider-traffic").slider("values", 0) + " %");
	$(".amount-traffic2").val($(".slider-traffic").slider("values", 1) + " %");
	
	
	function updateColors1(values) {
		var colorstops = colors[0] + ", "; // start left with the first color
		for (var i = 0; i < values.length; i++) {
			colorstops += colors[i] + " " + values[i] + "%,";
			colorstops += colors[i + 1] + " " + values[i] + "%,";
		}
		// end with the last color to the right
		colorstops += colors[colors.length - 1];
		
		/* Safari 5.1, Chrome 10+, Firefox */
		var css = '-webkit-linear-gradient(left,' + colorstops + ')';
		/* IE */
		var css2 = '-ms-linear-gradient(left,' + colorstops + ')';
		var position = '30%'
		
		/* Browser check */
		var agent = navigator.userAgent.toLowerCase();
		if ((navigator.appName == 'Netscape' && agent.indexOf('trident') != -1) || (agent.indexOf("msie") != -1)) {
			$('.slider-cpu').css('background-image', css2);
			// is IE
		} else {
			$('.slider-cpu').css('background-image', css);
			// is not IE
		}
	}
	
	function updateColors2(values) {
		var colorstops = colors[0] + ", "; // start left with the first color
		for (var i = 0; i < values.length; i++) {
			colorstops += colors[i] + " " + values[i] + "%,";
			colorstops += colors[i + 1] + " " + values[i] + "%,";
		}
		// end with the last color to the right
		colorstops += colors[colors.length - 1];
		
		/* Safari 5.1, Chrome 10+, Firefox */
		var css = '-webkit-linear-gradient(left,' + colorstops + ')';
		/* IE */
		var css2 = '-ms-linear-gradient(left,' + colorstops + ')';
		var position = '30%'
		
		/* Browser check */
		var agent = navigator.userAgent.toLowerCase();
		if ((navigator.appName == 'Netscape' && agent.indexOf('trident') != -1) || (agent.indexOf("msie") != -1)) {
			$('.slider-memory').css('background-image', css2);
			// is IE
		} else {
			$('.slider-memory').css('background-image', css);
			// is not IE
		}
		
	}
	
	function updateColors3(values) {
		var colorstops = colors[0] + ", "; // start left with the first color
		for (var i = 0; i < values.length; i++) {
			colorstops += colors[i] + " " + values[i] + "%,";
			colorstops += colors[i + 1] + " " + values[i] + "%,";
		}
		// end with the last color to the right
		colorstops += colors[colors.length - 1];
		
		/* Safari 5.1, Chrome 10+, Firefox */
		var css = '-webkit-linear-gradient(left,' + colorstops + ')';
		/* IE */
		var css2 = '-ms-linear-gradient(left,' + colorstops + ')';
		var position = '30%'
		
		/* Browser check */
		var agent = navigator.userAgent.toLowerCase();
		if ((navigator.appName == 'Netscape' && agent.indexOf('trident') != -1) || (agent.indexOf("msie") != -1)) {
			$('.slider-hard').css('background-image', css2);
			// is IE
		} else {
			$('.slider-hard').css('background-image', css);
			// is not IE
		}
	}
	
	function updateColors4(values) {
		var colorstops = colors[0] + ", "; // start left with the first color
		for (var i = 0; i < values.length; i++) {
			colorstops += colors[i] + " " + values[i] + "%,";
			colorstops += colors[i + 1] + " " + values[i] + "%,";
		}
		// end with the last color to the right
		colorstops += colors[colors.length - 1];
		
		/* Safari 5.1, Chrome 10+, Firefox */
		var css = '-webkit-linear-gradient(left,' + colorstops + ')';
		/* IE */
		var css2 = '-ms-linear-gradient(left,' + colorstops + ')';
		var position = '30%'
		
		/* Browser check */
		var agent = navigator.userAgent.toLowerCase();
		if ((navigator.appName == 'Netscape' && agent.indexOf('trident') != -1) || (agent.indexOf("msie") != -1)) {
			$('.slider-traffic').css('background-image', css2);
			// is IE
		} else {
			$('.slider-traffic').css('background-image', css);
			// is not IE
		}
	}
	
	function alarm_talk_link() {
		document.location.href = 'pangx2.com/admin/add_service/alarm_talk.php';
	}
	
	/* 임계치설정 적용여부 안내 */
	$('.critical-list-wrap .apply').click(function () {
		$('.critical-setting-guide').css('display', 'block');
	});
	
	/* 임계치설정 적용완료 */
	$('.critical-setting-guide .alert-btn-conf').click(function () {
		$('.critical-setting-success').css('display', 'block');
	});
	
	/* 임계치설정 적용취소 */
	$('.critical-setting-guide .alert-btn-cancel').click(function () {
		$('.critical-setting-cancel').css('display', 'block');
	});
	
	/* 수신자정보 수정 */
	/* 알림수신자리스트 수정아이콘 클릭 시 수신자정보 수정 출력 */
	$('.receiver-list .icon-pencil').click(function () {
		$('.alarm-receiver-enter.enter-cont').css('display', 'none');
		$('.alarm-receiver-enter.modify-cont').css('display', 'block');
	});
	/* 수신자정보 수정버튼 클릭 시 안내팝업 출력 */
	$('.alarm-receiver-enter.modify-cont button.btn').click(function () {
		$('.receiver-modify-guide').css('display', 'block');
	});
	/* 수신자정보 수정 안내팝업에서 확인버튼 클릭 시 성공 팝업 출력 */
	$('.receiver-modify-guide .alert-btn-conf').click(function () {
		$('.receiver-modify-success').css('display', 'block');
	});
	/* 성공 팝업 확인버튼 클릭 시 좌측하단 수신자정보수정을 다시 알림수신자설정 등록으로 변경 */
	$('.receiver-modify-success .alert-btn-conf').click(function () {
		$('.alarm-receiver-enter.enter-cont').css('display', 'block');
		$('.alarm-receiver-enter.modify-cont').css('display', 'none');
	});
	
	/* 알림수신자리스트 tbody 높이값 */
	var tr_length = $('.receiver-list tbody').children('tr').length;
	if (tr_length > 3) {
		$('.receiver-list tbody').height(176);
	} else {
		$('.receiver-list tbody').css('height', 'auto');
	}
	
	/* 알림수신자리스트 알림수신 설정 활성, 비활성 스위치 */
	$('.receiver-list-switch').change(function () {
		if ($(this).is(':checked')) {
			$(this).parent().siblings('td').removeClass('off');
		} else {
			$(this).parent().siblings('td').addClass('off');
		}
	});
	
	/* 알림수신자리스트 삭제 버튼 클릭 시 팝업창 출력 */
	var receiver_list_index;
	$('.receiver-list .fa-times').click(function () {
		receiver_list_index = $(this).parents('tr').index(); // 선택한 리스트 인데스값 저장
		$('.receiver-delete-guide').css('display', 'block');
	});
	/* */
	$('.receiver-delete-guide .alert-btn-conf').click(function () {
		var tr_length = $('.receiver-list tbody tr').length;// 알림수신자리스트 개수 체크
		if (tr_length > 3) {
			$('.receiver-list tbody').height(176);
			$('.receiver-list tbody tr').eq(receiver_list_index).remove(); // 저장한 리스트 인덱스값 받아와서 해당 항목 제거
		} else {
			$('.receiver-list tbody').css('height', 'auto');
			$('.receiver-list tbody tr').eq(receiver_list_index).remove(); // 저장한 리스트 인덱스값 받아와서 해당 항목 제거
		}
	});
	
	/* 알림수신자리스트 Edge에서 td값 새로 부여 */
	// Internet Explorer 6-11
	var isIE = /*@cc_on!@*/false || !!document.documentMode;
	// Edge 20+
	var isEdge = !isIE && !!window.StyleMedia;
	if (isEdge) {
		$('.receiver-list th:nth-child(1)').css('width', '134px');
		$('.receiver-list th:nth-child(2)').css('width', '226px');
		$('.receiver-list th:nth-child(3)').css('width', '127px');
		$('.receiver-list th:nth-child(4)').css('width', '132px');
	}
	
});