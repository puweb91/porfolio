$(function () {
    // 회원탈퇴 탭 클릭
    $(".step-tab ul li").not('.arrow').click(function () {
        var view_idx = $(this).attr('data-step-idx');
        $(this).addClass('on').siblings('li').removeClass('on');
        $('.member_quit').children('.step-cont').eq(view_idx).addClass("view").siblings('div').not('.tab-step-pangx2').removeClass('view');
    });
    // 파일업로드 경로 값 input에 전달
    $('input[type="file"]').change(function () {
        var file_path = $(this).val().replace(/^.*\\/, "");
        $(this).siblings('input[type="text"]').val(file_path);
    });
    // 회원정보수정 이메일주소 추가
    var email_add_num = 0; // input 추가 개수
    $('.email-add').click(function () {
        if (email_add_num >= 4) {
            $(this).parents('td').children('p').removeClass().addClass('text-warning-pangx2');
        } else {
            $(this).parents('td').children('.form-inline').eq(email_add_num + 1).css('display', 'flex');
            email_add_num++;
        }
    });
    // 회원정보수정 이메일주소 삭제
    $('.email-del').click(function () {
        $(this).parent().css('display', 'none');
        email_add_num--;
    });
});