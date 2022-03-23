$(function ($) {
	/* 검색기간 탭 */
	$('.select-tab li').click(function () {
		$(this).addClass('on').siblings('li').removeClass('on');
	});
	
	/* alert 버튼 클릭이벤트 */
	$('.alert-btn-conf, .alert-btn-cancel, .pop-close').on('click', function () {
		$(this).parents('.alert-pop').fadeOut(0);
	});
	
	/* 커스텀 툴팁 */
	var tooltip_anchor_data;
	$('.tooltip-anchor').on("focusin, mouseover", function () {
		tooltip_anchor_data = $(this).attr('data-tooltip');
		$('[data-anchor="' + tooltip_anchor_data + '"]').appendTo($(this)).fadeIn();
		
	});
	
	$('.tooltip-anchor').on("focusout, mouseleave", function () {
		$('[data-anchor="' + tooltip_anchor_data + '"]').stop(true, true).fadeOut();
	});
	
	$('.tooltip-box').on("focusout, mouseleave", function () {
		$('[data-anchor="' + tooltip_anchor_data + '"]').stop(true, true).fadeOut();
	});
	
	/* 팝업 */
	$('[data-pop="true"]').on('click', function () {
		var popName = $(this).attr('data-popname');
		$('[data-popname="' + popName + '"].alert-pop, [data-popname="' + popName + '"].pop-box').fadeIn(0);
	});
	
	/* 팝업 HTML onclick */
	function popOn(name) {
		var popName = $(name).attr('data-popname');
		$('[data-popname="' + popName + '"].alert-pop, [data-popname="' + popName + '"].pop-box').fadeIn(0);
	}
	
	/* 파일업로드 경로 */
	$('.file-box input[type="file"]').on('change', function () {
		var filePath = $(this).val();
		$(this).siblings('input[type="text"]').attr('value', filePath);
	});
	
	/* switchery 토글 초기화 */
	var elems = Array.prototype.slice.call(document.querySelectorAll('.toggle-switch'));
	elems.forEach(function (html) {
		var switchery = new Switchery(html, {
			secondaryColor: '#ddd'
		});
	});
	
	/* pop box */
	$('.pop-box button, .pop-box .pop-close').click(function () {
		$(this).parents('.pop-box').fadeOut(250);
	});
	
	/* page navigation tab */
	$('.nav-tab ul li').click(function () {
		var idx = $(this).index();
		$(this).addClass('on').siblings().removeClass('on');
		$('.tab-cont > div').eq(idx).css('display', 'block').siblings('div').css('display', 'none');
	});
	
	/* server list checkbox */
	$('.monitor-item .list input[type="checkbox"]').change(function () {
		if ($(this).is(':checked')) {
			$(this).parents('li').addClass('on');
		} else {
			$(this).parents('li').removeClass('on');
		}
	});
	
	/* dashboard pie chart */
	$(".data-attributes span").peity("donut");
	
	/* SSL select change */
	function sslPrdCheck(value) {
		
		$('.prd-info').empty();
		
		if (value == 5) {
			$('.prd-info').append('<div class="table table-box"><table class="table pangx2"><colgroup><col width="15%"><col width="85%"></colgroup><tbody><tr><th>상품정보</th><td colspan="3"><table class="w-100 h-100"><colgroup><col width="35%"><col width="65%"></colgroup><tbody><tr><td class="border-0"><figure><img src="/pangx2.com/assets/images/ssl-prd1.jpg" alt=""></figure></td><td class="align-top border-0"><p class="prd-title">Alpha SSL <span class="prd-detail-view" data-pop="true" data-popname="ssl-prd-view1" onclick="popOn(this)"><i class="fas fa-plus-circle"></i> 자세히보기</span></p><div class="row mx-0 prd-list"><div class="col-6 px-4"><p><i class="fas fa-check"></i><span class="text-danger-pangx2">최저가 인증서</span></p><p><i class="fas fa-check"></i>128~256bit 암호화</p><p><i class="fas fa-check"></i>안전배상 $ 10,000</p></div><div class="col-6 px-4"><p><i class="fas fa-check"></i>&#39;www&#39; 유무 구분없음</p><p><i class="fas fa-check"></i>모든 모바일 호환</p><p><i class="fas fa-check"></i>라이선스 무제한</p></div></div></td></tr></tbody></table></td></tr></tbody></table></div>');
		} else if (value == 6) {
			$('.prd-info').append('<div class="table table-box"><table class="table pangx2"><colgroup><col width="15%"><col width="85%"></colgroup><tbody><tr><th>상품정보</th><td colspan="3"><table class="w-100 h-100"><colgroup><col width="35%"><col width="65%"></colgroup><tbody><tr><td class="border-0"><figure><img src="/pangx2.com/assets/images/ssl-prd1.jpg" alt=""></figure></td><td class="align-top border-0"><p class="prd-title">Alpha SSL WildCard <span class="prd-detail-view" data-pop="true" data-popname="ssl-prd-view2" onclick="popOn(this)"><i class="fas fa-plus-circle"></i> 자세히보기</span></p><div class="row mx-0 prd-list"><div class="col-6 px-4"><p><i class="fas fa-check"></i><span class="text-danger-pangx2">최저가 와일드카드</span></p><p><i class="fas fa-check"></i>128~256bit 암호화</p><p><i class="fas fa-check"></i>안전배상 $ 10,000</p></div><div class="col-6 px-4"><p><i class="fas fa-check"></i>&#39;www&#39; 유무 구분없음</p><p><i class="fas fa-check"></i>모든 모바일 호환</p><p><i class="fas fa-check"></i>라이선스 무제한</p></div></div></td></tr></tbody></table></td></tr></tbody></table></div>');
		} else if (value == 7) {
			$('.prd-info').append('<div class="table table-box"><table class="table pangx2"><colgroup><col width="15%"><col width="85%"></colgroup><tbody><tr><th>상품정보</th><td colspan="3"><table class="w-100 h-100"><colgroup><col width="35%"><col width="65%"></colgroup><tbody><tr><td class="border-0"><figure><img src="/pangx2.com/assets/images/ssl-prd3.jpg" alt=""></figure></td><td class="align-top border-0"><p class="prd-title">Organization <span class="prd-detail-view" data-pop="true" data-popname="ssl-prd-view3" onclick="popOn(this)"><i class="fas fa-plus-circle"></i> 자세히보기</span></p><div class="row mx-0 prd-list"><div class="col-6 px-4"><p><i class="fas fa-check"></i><span class="text-danger-pangx2">강제 128~256bit 암호화(SGC)</span></p><p><i class="fas fa-check"></i>안전배상 $ 1,250,000</p><p><i class="fas fa-check"></i><span class="text-danger-pangx2">서브도메인 추가기능</span></p></div><div class="col-6 px-4"><p><i class="fas fa-check"></i>&#39;www&#39; 유무 구분없음</p><p><i class="fas fa-check"></i>모든 모바일 호환</p><p><i class="fas fa-check"></i>라이선스 무제한</p></div></div></td></tr></tbody></table></td></tr></tbody></table></div>');
		} else if (value == 8) {
			$('.prd-info').append('<div class="table table-box"><table class="table pangx2"><colgroup><col width="15%"><col width="85%"></colgroup><tbody><tr><th>상품정보</th><td colspan="3"><table class="w-100 h-100"><colgroup><col width="35%"><col width="65%"></colgroup><tbody><tr><td class="border-0"><figure><img src="/pangx2.com/assets/images/ssl-prd4.jpg" alt=""></figure></td><td class="align-top border-0"><p class="prd-title">Organization WildCard <span class="prd-detail-view" data-pop="true" data-popname="ssl-prd-view4" onclick="popOn(this)"><i class="fas fa-plus-circle"></i> 자세히보기</span></p><div class="row mx-0 prd-list"><div class="col-6 px-4"><p><i class="fas fa-check"></i><span class="text-danger-pangx2">강제 128~256bit 암호화(SGC)</span></p><p><i class="fas fa-check"></i>안전배상 $ 1,250,000</p><p><i class="fas fa-check"></i><span class="text-danger-pangx2">서브도메인 무제한</span></p></div><div class="col-6 px-4"><p><i class="fas fa-check"></i>&#39;www&#39; 유무 구분없음</p><p><i class="fas fa-check"></i>모든 모바일 호환</p><p><i class="fas fa-check"></i>라이선스 무제한</p></div></div></td></tr></tbody></table></td></tr></tbody></table></div>');
		}
		
	}
});

/* 팝업 HTML onclick */
function popOn(name) {
	var popName = $(name).attr('data-popname');
	$('[data-popname="' + popName + '"].alert-pop, [data-popname="' + popName + '"].pop-box').fadeIn(0);
}

/* SSL select change */
function sslPrdCheck(value) {
	
	$('.prd-info').empty();
	
	if (value == 5) {
		$('.prd-info').append('<div class="table table-box"><table class="table pangx2"><colgroup><col width="15%"><col width="85%"></colgroup><tbody><tr><th>상품정보</th><td colspan="3"><table class="w-100 h-100"><colgroup><col width="35%"><col width="65%"></colgroup><tbody><tr><td class="border-0"><figure><img src="/pangx2.com/assets/images/ssl-prd1.jpg" alt=""></figure></td><td class="align-top border-0"><p class="prd-title">Alpha SSL <span class="prd-detail-view" data-pop="true" data-popname="ssl-prd-view1" onclick="popOn(this)"><i class="fas fa-plus-circle"></i> 자세히보기</span></p><div class="row mx-0 prd-list"><div class="col-6 px-4"><p><i class="fas fa-check"></i><span class="text-danger-pangx2">최저가 인증서</span></p><p><i class="fas fa-check"></i>128~256bit 암호화</p><p><i class="fas fa-check"></i>안전배상 $ 10,000</p></div><div class="col-6 px-4"><p><i class="fas fa-check"></i>&#39;www&#39; 유무 구분없음</p><p><i class="fas fa-check"></i>모든 모바일 호환</p><p><i class="fas fa-check"></i>라이선스 무제한</p></div></div></td></tr></tbody></table></td></tr></tbody></table></div>');
	} else if (value == 6) {
		$('.prd-info').append('<div class="table table-box"><table class="table pangx2"><colgroup><col width="15%"><col width="85%"></colgroup><tbody><tr><th>상품정보</th><td colspan="3"><table class="w-100 h-100"><colgroup><col width="35%"><col width="65%"></colgroup><tbody><tr><td class="border-0"><figure><img src="/pangx2.com/assets/images/ssl-prd1.jpg" alt=""></figure></td><td class="align-top border-0"><p class="prd-title">Alpha SSL WildCard <span class="prd-detail-view" data-pop="true" data-popname="ssl-prd-view2" onclick="popOn(this)"><i class="fas fa-plus-circle"></i> 자세히보기</span></p><div class="row mx-0 prd-list"><div class="col-6 px-4"><p><i class="fas fa-check"></i><span class="text-danger-pangx2">최저가 와일드카드</span></p><p><i class="fas fa-check"></i>128~256bit 암호화</p><p><i class="fas fa-check"></i>안전배상 $ 10,000</p></div><div class="col-6 px-4"><p><i class="fas fa-check"></i>&#39;www&#39; 유무 구분없음</p><p><i class="fas fa-check"></i>모든 모바일 호환</p><p><i class="fas fa-check"></i>라이선스 무제한</p></div></div></td></tr></tbody></table></td></tr></tbody></table></div>');
	} else if (value == 7) {
		$('.prd-info').append('<div class="table table-box"><table class="table pangx2"><colgroup><col width="15%"><col width="85%"></colgroup><tbody><tr><th>상품정보</th><td colspan="3"><table class="w-100 h-100"><colgroup><col width="35%"><col width="65%"></colgroup><tbody><tr><td class="border-0"><figure><img src="/pangx2.com/assets/images/ssl-prd3.jpg" alt=""></figure></td><td class="align-top border-0"><p class="prd-title">Organization <span class="prd-detail-view" data-pop="true" data-popname="ssl-prd-view3" onclick="popOn(this)"><i class="fas fa-plus-circle"></i> 자세히보기</span></p><div class="row mx-0 prd-list"><div class="col-6 px-4"><p><i class="fas fa-check"></i><span class="text-danger-pangx2">강제 128~256bit 암호화(SGC)</span></p><p><i class="fas fa-check"></i>안전배상 $ 1,250,000</p><p><i class="fas fa-check"></i><span class="text-danger-pangx2">서브도메인 추가기능</span></p></div><div class="col-6 px-4"><p><i class="fas fa-check"></i>&#39;www&#39; 유무 구분없음</p><p><i class="fas fa-check"></i>모든 모바일 호환</p><p><i class="fas fa-check"></i>라이선스 무제한</p></div></div></td></tr></tbody></table></td></tr></tbody></table></div>');
	} else if (value == 8) {
		$('.prd-info').append('<div class="table table-box"><table class="table pangx2"><colgroup><col width="15%"><col width="85%"></colgroup><tbody><tr><th>상품정보</th><td colspan="3"><table class="w-100 h-100"><colgroup><col width="35%"><col width="65%"></colgroup><tbody><tr><td class="border-0"><figure><img src="/pangx2.com/assets/images/ssl-prd4.jpg" alt=""></figure></td><td class="align-top border-0"><p class="prd-title">Organization WildCard <span class="prd-detail-view" data-pop="true" data-popname="ssl-prd-view4" onclick="popOn(this)"><i class="fas fa-plus-circle"></i> 자세히보기</span></p><div class="row mx-0 prd-list"><div class="col-6 px-4"><p><i class="fas fa-check"></i><span class="text-danger-pangx2">강제 128~256bit 암호화(SGC)</span></p><p><i class="fas fa-check"></i>안전배상 $ 1,250,000</p><p><i class="fas fa-check"></i><span class="text-danger-pangx2">서브도메인 무제한</span></p></div><div class="col-6 px-4"><p><i class="fas fa-check"></i>&#39;www&#39; 유무 구분없음</p><p><i class="fas fa-check"></i>모든 모바일 호환</p><p><i class="fas fa-check"></i>라이선스 무제한</p></div></div></td></tr></tbody></table></td></tr></tbody></table></div>');
	}
	
}

$(document).ready(function () {
	$('.scrollbar-inner').scrollbar();
	
	/* server diagnosis pop-up */
	$('.monitor-item .list .server-state.error').click(function () {
		$('.alert-pop.diagnosis.error').css('display', 'block');
		/* loading */
		$('.alert-pop.diagnosis.error .diagnosis-result .loading').LoadingOverlay('show', {
			background: '#ffffff',
			image: '/pangx2.com/assets/images/loader.gif',
			imageAnimation: false
		});
		var count = 0;
		var interval = setInterval(function () {
			if (count >= 100) {
				clearInterval(interval);
				/* contents print ( 'type1' or 'type2' ) */
				$('.alert-pop.diagnosis.error .diagnosis-result .type2').css('display', 'block');
				/* exit loading */
				$('.alert-pop.diagnosis.error .diagnosis-result .loading').LoadingOverlay('hide');
				$('.alert-pop.diagnosis.error .diagnosis-result .loading').css('display', 'none');
				return;
			}
			count += 10;
		}, 200);
	});
	
});

/* 스크롤바 여부 확인 */
// 가로 스크롤
(function ($) {
	$.fn.hasHorizontalScrollBar = function () {
		return this.get(0) ? this.get(0).scrollWidth > this.innerWidth() : false;
	}
})(jQuery);
// 세로 스크롤
(function ($) {
	$.fn.hasVerticalScrollBar = function () {
		return this.get(0) ? this.get(0).scrollHeight > this.innerHeight() : false;
	}
})(jQuery);

function browserCheck() {
	
	// Opera 8.0+
	var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
	// Firefox 1.0+
	var isFirefox = typeof InstallTrigger !== 'undefined';
	// Safari 3.0+ "[object HTMLElementConstructor]"
	var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) {
		return p.toString() === "[object SafariRemoteNotification]";
	})(!window['safari'] || safari.pushNotification);
	// Internet Explorer 6-11
	var isIE = /*@cc_on!@*/ false || !!document.documentMode;
	// Edge 20+
	var isEdge = !isIE && !!window.StyleMedia;
	// Chrome 1+
	var isChrome = !!window.chrome && !!window.chrome.webstore;
	// Blink engine detection
	var isBlink = (isChrome || isOpera) && !!window.CSS;
	
	if (isOpera) {
		return 'isOpera';
	} else if (isFirefox) {
		return 'isFirefox';
	} else if (isSafari) {
		return 'isSafari';
	} else if (isIE) {
		return 'isIE';
	} else if (isEdge) {
		return 'isEdge';
	} else if (isChrome) {
		return 'isChrome';
	} else if (isBlink) {
		return 'isBlink';
	}
}
