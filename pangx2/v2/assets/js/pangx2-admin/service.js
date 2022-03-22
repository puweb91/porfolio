$(function () {
    // 요금관리 datepicker
    $(".picker1").datepicker({
        dateFormat: 'yy-mm-dd',
        showOptions: {direction: "down"},
        monthNames: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
        dayNames: ["일", "월", "화", "수", "목", "금", "토"],
        dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
        showMonthAfterYear: true,
        yearSuffix: "년"
    });
    $(".picker2").datepicker({
        dateFormat: 'yy-mm-dd',
        showOptions: {direction: "down"},
        monthNames: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
        dayNames: ["일", "월", "화", "수", "목", "금", "토"],
        dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
        showMonthAfterYear: true,
        yearSuffix: "년"
    });

    // 거래명세서 팝업
    $('.trading-open').click(function () {
        $('.trading').fadeIn(250);
    });
    $('.trading-close, .trading .fa-times').click(function () {
        $('.trading').fadeOut(250);
    });

    // 세금계산서 팝업
    $('.tax-open').click(function () {
        $('.tax-bill').fadeIn(250);
    });
    $('.tax-close, .tax-bill .fa-times').click(function () {
        $('.tax-bill').fadeOut(250);
    });

    // 연장기간 전체선택 & 개별선택 라디오 버튼
    $('.expansion-list input[type="radio"]').change(function () {
        if ($(this).hasClass('all')) {
            $(this).parent().siblings('select').css('display', 'inline-block');
            $('.expansion-list tbody select').css('display', 'none');
        } else {
            $(this).parent().siblings('select').css('display', 'none');
            $('.expansion-list tbody select').css('display', 'inline-block');
        }
    });

    $('.test-button').click(function () {
        $('.expansion-list .panel').append('<div class="table-pangx2 td-text-center td-align-middle mb-1"><table class="table"><colgroup><col width="23%"><col width="30%"><col width="25%"><col width="22%"></colgroup><tbody><tr><td rowspan="2"><p><span>서버이름</span><i class="fa fa-question-circle-o tooltip-anchor" data-tooltip="server-spec"></i></p><p>222.222.222.222</p></td><td>웹호스팅 솔루션<span class="badge badge-danger ml-1">만료3일전</span></td><td><select class="align-middle"><option value="1개월">1개월</option><option value="3개월">3개월</option><option value="6개월">6개월 <span class="text-danger-pangx2">(5%할인)</span></option><option value="12개월">12개월 <span class="text-danger-pangx2">(10%할인)</span></option><option value="24개월">24개월 <span class="text-danger-pangx2">(12%할인)</span></option></select></td><td rowspan="2"><strong class="text-danger-pangx2"><p>1,620,000원</p></strong></td></tr><tr><td><p class="mb-1">2018-02-01 ~ 2018-12-31</p></td><td><p>2019-12-31 까지</p></td></tr></tbody></table></div>');
    });
});


/* s : expansion.php */
$(document).ready(function () {
    var expansion_list_sensor;

    $('.contents-wrap').scroll(function () {
        var scr_top = $(this).scrollTop();
        if (scr_top > 40) {
            $('.expansion-wrap .panel-group').eq(0).addClass('over').css({
                'display': 'block'
            });
            $('.expansion-wrap .panel-group-blank').css('display', 'block');
        } else {
            $('.expansion-wrap .panel-group').eq(0).removeClass('over');
            $('.expansion-wrap .panel-group-blank').css('display', 'none');
        }
    });

    // expansion list select box text color
    var select_val_current = $('.expansion-list select').val();

    if (select_val_current == '6개월' || select_val_current == '12개월' || select_val_current == '24개월') {
        $('.expansion-list select').css('color', '#f44');
        $('.expansion-list select').children('option[value="1개월"], option[value="3개월"]').css('color', '#333');
    } else {
        $('.expansion-list select').css('color', '#333');
        $('.expansion-list select').children('option[value="6개월"], option[value="12개월"], option[value="24개월"]').css('color', '#f44');
    }

    $('.expansion-list select').children().each(function () {
        if ($(this).val() == select_val_current) {
            $(this).css('font-weight', '700');
        } else {
            $(this).css('font-weight', '500');
        }
    });

    $('.expansion-list select').change(function () {
        var select_val = $(this).val();

        $(this).children().each(function () {
            if ($(this).val() == select_val) {
                $(this).css('font-weight', '700');
            } else {
                $(this).css('font-weight', '500');
            }
        });

        if (select_val == '6개월' || select_val == '12개월' || select_val == '24개월') {
            $(this).css('color', '#f44');
            $(this).children('option[value="1개월"], option[value="3개월"]').css('color', '#333');
        } else {
            $(this).css('color', '#333');
            $(this).children('option[value="6개월"], option[value="12개월"], option[value="24개월"]').css('color', '#f44');
        }
    });

    var browser = browserCheck();

    if (browser == 'isOpera') {

        expansion_list_sensor = new ResizeSensor($('.expansion-list'), function () {
            var wrap_h = $(window).height();
            if ($('.contents-body').height() > $('.contents-wrap').height()) {
                $('.expansion-server .monitor-item').css('height', wrap_h - 448);
                $('.expansion-server .monitor-item .list').css('height', wrap_h - 507);
            } else {
                $('.expansion-server .monitor-item').css('height', wrap_h - 479);
                $('.expansion-server .monitor-item .list').css('height', wrap_h - 538);
            }
        });
        // expansion server list resize height
        $(window).resize(function () {
            var wrap_h = $(window).height();
            if ($('.contents-body').height() > $('.contents-wrap').height()) {
                $('.expansion-server .monitor-item').css('height', wrap_h - 448);
                $('.expansion-server .monitor-item .list').css('height', wrap_h - 507);
            } else {
                $('.expansion-server .monitor-item').css('height', wrap_h - 496);
                $('.expansion-server .monitor-item .list').css('height', wrap_h - 555);
            }
        }).resize();

    } else if (browser == 'isFirefox') {

        expansion_list_sensor = new ResizeSensor($('.expansion-list'), function () {
            var wrap_h = $(window).height();
            if ($('.contents-body').height() > $('.contents-wrap').height()) {
                $('.expansion-server .monitor-item').css('height', wrap_h - 448);
                $('.expansion-server .monitor-item .list').css('height', wrap_h - 502);
            } else {
                $('.expansion-server .monitor-item').css('height', wrap_h - 440);
                $('.expansion-server .monitor-item .list').css('height', wrap_h - 538);
            }
        });
        // expansion server list resize height
        $(window).resize(function () {
            var wrap_h = $(window).height();
            if ($('.contents-body').height() > $('.contents-wrap').height()) {
                $('.expansion-server .monitor-item').css('height', wrap_h - 448);
                $('.expansion-server .monitor-item .list').css('height', wrap_h - 500);
            } else {
                $('.expansion-server .monitor-item').css('height', wrap_h - 519);
                $('.expansion-server .monitor-item .list').css('height', wrap_h - 572);
            }
        }).resize();

    } else if (browser == 'isSafari') {
        expansion_list_sensor = new ResizeSensor($('.expansion-list'), function () {
            var wrap_h = $(window).height();
            if ($('.contents-body').height() > $('.contents-wrap').height()) {
                $('.expansion-server .monitor-item').css('height', wrap_h - 458);
                $('.expansion-server .monitor-item .list').css('height', wrap_h - 517);
            } else {
                $('.expansion-server .monitor-item').css('height', wrap_h - 487);
                $('.expansion-server .monitor-item .list').css('height', wrap_h - 546);
            }
        });

        // expansion server list resize height
        $(window).resize(function () {
            var wrap_h = $(window).height();
            if ($('.contents-body').height() > $('.contents-wrap').height()) {
                $('.expansion-server .monitor-item').css('height', wrap_h - 458);
                $('.expansion-server .monitor-item .list').css('height', wrap_h - 517);
            } else {
                $('.expansion-server .monitor-item').css('height', wrap_h - 502);
                $('.expansion-server .monitor-item .list').css('height', wrap_h - 561);
            }
        }).resize();
    } else if (browser == 'isIE') {

        expansion_list_sensor = new ResizeSensor($('.expansion-list'), function () {
            var wrap_h = $(window).height();
            $('.expansion-server .monitor-item').css({'height': wrap_h - 400, 'max-height': '471px'});
            $('.expansion-server .monitor-item .list').css({'height': wrap_h - 400, 'max-height': '416px'});
        });
        // expansion server list resize height
        $(window).resize(function () {
            var wrap_h = $(window).height();
            $('.expansion-server .monitor-item').css('height', wrap_h - 464);
            $('.expansion-server .monitor-item .list.scroll-inner').css({
                'height': wrap_h - 518,
                'min-height': '300px'
            });
            $('.expansion-server .monitor-item .list.scroll-wrapper').css({
                'height': wrap_h - 518,
                'min-height': '300px'
            });
        }).resize();

    } else if (browser == 'isEdge') {

        expansion_list_sensor = new ResizeSensor($('.expansion-list'), function () {
            var wrap_h = $(window).height();
            $('.expansion-server .monitor-item').css({'height': wrap_h - 449, 'max-height': '514px'});
            $('.expansion-server .monitor-item .list').css({'height': wrap_h - 503, 'max-height': '460px'});
        });
        // expansion server list resize height
        $(window).resize(function () {
            var wrap_h = $(window).height();
            if ($('.contents-body').height() > $('.contents-wrap').height()) {
                $('.expansion-server .monitor-item').css('height', wrap_h - 448);
                $('.expansion-server .monitor-item .list').css('height', wrap_h - 502);
            } else {
                $('.expansion-server .monitor-item').css('height', wrap_h - 516);
                $('.expansion-server .monitor-item .list').css('height', wrap_h - 570);
            }
        }).resize();

    } else if (browser == 'isChrome') {

        expansion_list_sensor = new ResizeSensor($('.expansion-list'), function () {
            var wrap_h = $(window).height();
            if ($('.contents-body').height() > $('.contents-wrap').height()) {
                $('.expansion-server .monitor-item').css('height', wrap_h - 476);
                $('.expansion-server .monitor-item .list').css('height', wrap_h - 581);
            } else {
                $('.expansion-server .monitor-item').css('height', wrap_h - 489);
                $('.expansion-server .monitor-item .list').css('height', wrap_h - 548);
            }
        });
        // expansion server list resize height
        $(window).resize(function () {
            var wrap_h = $(window).height();
            if ($('.contents-body').height() > $('.contents-wrap').height()) {
                $('.expansion-server .monitor-item').css('height', wrap_h - 502);
                $('.expansion-server .monitor-item .list').css('height', wrap_h - 607);
            } else {
                $('.expansion-server .monitor-item').css('height', wrap_h - 502);
                $('.expansion-server .monitor-item .list').css('height', wrap_h - 561);
            }
        }).resize();

    } else if (browser == 'isBlink') {

        expansion_list_sensor = new ResizeSensor($('.expansion-list'), function () {
            var wrap_h = $(window).height();
            if ($('.contents-body').height() > $('.contents-wrap').height()) {
                $('.expansion-server .monitor-item').css('height', wrap_h - 458);
                $('.expansion-server .monitor-item .list').css('height', wrap_h - 517);
            } else {
                $('.expansion-server .monitor-item').css('height', wrap_h - 487);
                $('.expansion-server .monitor-item .list').css('height', wrap_h - 546);
            }
        });
        // expansion server list resize height
        $(window).resize(function () {
            var wrap_h = $(window).height();
            if ($('.contents-body').height() > $('.contents-wrap').height()) {
                $('.expansion-server .monitor-item').css('height', wrap_h - 458);
                $('.expansion-server .monitor-item .list').css('height', wrap_h - 517);
            } else {
                $('.expansion-server .monitor-item').css('height', wrap_h - 502);
                $('.expansion-server .monitor-item .list').css('height', wrap_h - 561);
            }
        }).resize();

    }
});

/* e : expansion.php */