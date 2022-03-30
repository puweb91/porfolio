$(document).ready(function () {
  var appendElement_i = 0;
  var viewNum = 4;
  var folderList = [
    '<div class="folder-item"><div class="folder-name ellipsis-tooltip tooltip-type-square">새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더</div><div class="folder-manage"><div class="icon-setting context-menu"><div class="context-menu-list"><div class="context-menu-item" data-layer-target="setting-folder">폴더설정</div><div class="context-menu-item" data-layer-target="remove-folder">폴더삭제</div></div></div></div></div>',
    '<div class="folder-item"><div class="folder-name ellipsis-tooltip tooltip-type-square">새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더</div><div class="folder-manage"><div class="icon-setting context-menu"><div class="context-menu-list"><div class="context-menu-item" data-layer-target="setting-folder">폴더설정</div><div class="context-menu-item" data-layer-target="remove-folder">폴더삭제</div></div></div></div></div>',
    '<div class="folder-item"><div class="folder-name ellipsis-tooltip tooltip-type-square">새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더</div><div class="folder-manage"><div class="icon-setting context-menu"><div class="context-menu-list"><div class="context-menu-item" data-layer-target="setting-folder">폴더설정</div><div class="context-menu-item" data-layer-target="remove-folder">폴더삭제</div></div></div></div></div>',
    '<div class="folder-item"><div class="folder-name ellipsis-tooltip tooltip-type-square">새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더</div><div class="folder-manage"><div class="icon-setting context-menu"><div class="context-menu-list"><div class="context-menu-item" data-layer-target="setting-folder">폴더설정</div><div class="context-menu-item" data-layer-target="remove-folder">폴더삭제</div></div></div></div></div>',
    '<div class="folder-item"><div class="folder-name ellipsis-tooltip tooltip-type-square">새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더</div><div class="folder-manage"><div class="icon-setting context-menu"><div class="context-menu-list"><div class="context-menu-item" data-layer-target="setting-folder">폴더설정</div><div class="context-menu-item" data-layer-target="remove-folder">폴더삭제</div></div></div></div></div>',
    '<div class="folder-item"><div class="folder-name ellipsis-tooltip tooltip-type-square">새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더</div><div class="folder-manage"><div class="icon-setting context-menu"><div class="context-menu-list"><div class="context-menu-item" data-layer-target="setting-folder">폴더설정</div><div class="context-menu-item" data-layer-target="remove-folder">폴더삭제</div></div></div></div></div>',
    '<div class="folder-item"><div class="folder-name ellipsis-tooltip tooltip-type-square">새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더</div><div class="folder-manage"><div class="icon-setting context-menu"><div class="context-menu-list"><div class="context-menu-item" data-layer-target="setting-folder">폴더설정</div><div class="context-menu-item" data-layer-target="remove-folder">폴더삭제</div></div></div></div></div>',
    '<div class="folder-item"><div class="folder-name ellipsis-tooltip tooltip-type-square">새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더</div><div class="folder-manage"><div class="icon-setting context-menu"><div class="context-menu-list"><div class="context-menu-item" data-layer-target="setting-folder">폴더설정</div><div class="context-menu-item" data-layer-target="remove-folder">폴더삭제</div></div></div></div></div>',
    '<div class="folder-item"><div class="folder-name ellipsis-tooltip tooltip-type-square">새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더</div><div class="folder-manage"><div class="icon-setting context-menu"><div class="context-menu-list"><div class="context-menu-item" data-layer-target="setting-folder">폴더설정</div><div class="context-menu-item" data-layer-target="remove-folder">폴더삭제</div></div></div></div></div>',
    '<div class="folder-item"><div class="folder-name ellipsis-tooltip tooltip-type-square">새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더</div><div class="folder-manage"><div class="icon-setting context-menu"><div class="context-menu-list"><div class="context-menu-item" data-layer-target="setting-folder">폴더설정</div><div class="context-menu-item" data-layer-target="remove-folder">폴더삭제</div></div></div></div></div>',
    '<div class="folder-item"><div class="folder-name ellipsis-tooltip tooltip-type-square">새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더</div><div class="folder-manage"><div class="icon-setting context-menu"><div class="context-menu-list"><div class="context-menu-item" data-layer-target="setting-folder">폴더설정</div><div class="context-menu-item" data-layer-target="remove-folder">폴더삭제</div></div></div></div></div>',
    '<div class="folder-item"><div class="folder-name ellipsis-tooltip tooltip-type-square">새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더</div><div class="folder-manage"><div class="icon-setting context-menu"><div class="context-menu-list"><div class="context-menu-item" data-layer-target="setting-folder">폴더설정</div><div class="context-menu-item" data-layer-target="remove-folder">폴더삭제</div></div></div></div></div>'
  ]

  /* jquery.scrollbar plugin */
  $('.scrollbar-inner').scrollbar();

  pageInfo();
  cardSelected();
  ellipsisTooltip();
  markerNew();
  navigation();
  folderActive();
  folderLoad(folderList);
  contextMenu();
  layerActive();
  progressBar();
  detectScrollElement();
  badgeConnectToggle();
  textTooltip();
  tabGroup();
  dropdown();
  attachFileSingle();

  // pageNavigation();
  //
  // function pageNavigation(){
  //     $('.contents.scroll-content').on('scroll', function(){
  //         var scroll_top = $(this).scrollTop();
  //
  //         if (scroll_top > 0){
  //             $('.page-navigation').addClass('fixed');
  //         } else {
  //             $('.page-navigation').removeClass('fixed');
  //         }
  //     });
  // }

  function badgeConnectToggle() {
    $('.badge-state-connect').on('click', function () {
      $(this).toggleClass('disabled');
    });
  }

  function pageInfo() {
    $('[data-pageinfo]').on('click', function () {
      var name = $(this).data('pageinfo');

      if ($(this).hasClass('active')) {
        $('[data-pageinfo]').removeClass('active');
        $('.page-info, .page-info .page-info-item').removeClass('on');
      } else {
        $('[data-pageinfo]').removeClass('active');
        $('.page-info .page-info-item').removeClass('on');

        $(this).addClass('active');
        $('.page-info').addClass('on');
        $('.page-' + name).addClass('on');
      }
    });

    $('.page-info .page-close').on('click', function () {
      $('[data-pageinfo]').removeClass('active');
      $('.page-info, .page-info .page-info-item').removeClass('on');
    });
  }

  function cardSelected() {
    $('.card-user').find('.custom-checkbox input').on('change', function () {
      if ($(this).prop('checked') == true) {
        $(this).parents('.card-user').addClass('selected');
      } else {
        $(this).parents('.card-user').removeClass('selected');
      }
    });

    $('.list-table-item').find('.custom-checkbox input').on('change', function () {
      if ($(this).prop('checked') == true) {
        $(this).parents('.list-table-item').addClass('selected');
      } else {
        $(this).parents('.list-table-item').removeClass('selected');
      }
    });
  }

  function ellipsisTooltip() {
    $('.ellipsis-tooltip').on('mouseenter', function (e) {
      var string = $(this).text();

      if (!$(this).parent().hasClass('tooltip-wrap')) {
        $(this).wrap('<div class="tooltip-wrap"></div>');

        if ($(this).hasClass('tooltip-type-square')) {
          $(this).before('<div class="tooltip-square">' + string + '</div>');
        } else {
          $(this).before('<div class="tooltip-bubble">' + string + '</div>');
        }
      }
    });

    $('.ellipsis-tooltip').on('mouseleave', function () {
      if ($(this).parent().hasClass('tooltip-wrap')) {
        if ($(this).hasClass('tooltip-type-square')) {
          $(this).siblings('.tooltip-square').remove();
        } else {
          $(this).siblings('.tooltip-bubble').remove();
        }
        $(this).unwrap();
      }
    });
  }

  function textTooltip() {
    $('.tooltip-box').parent().on({
      mouseenter: function () {
        var $tooltip = $(this).children('.tooltip-box'),
            posTop = $(this).offset().top,
            posPadd = $(this).css('padding-left').replace('px', '');
        posLeft = $(this).offset().left + Number(posPadd) + ($(this).width() / 2);

        $tooltip.css({
          'display': 'block',
          'top': posTop + 'px',
          'left': posLeft + 'px'
        });
      },
      mouseleave: function () {
        var $tooltip = $(this).children('.tooltip-box');

        $tooltip.css({
          'display': 'none'
        });
      }
    });
  }

  function markerNew() {
    $('[class^="icon-"].new').append('<div class="marker-new"></div>');
  }

  function navigation() {
    var $mainListItem = $('.nav .nav-list .nav-list-main .nav-list-item'),
        $navListItem = $('.nav .nav-list .nav-list-item'),
        pathname = $(location)[0].pathname.split("/");

    pathname.pop();

    function urlCheck() { /* 페이지 로드 시 URL 비교 */
      for (var i = 0; i < $navListItem.length; i++) {
        var href = $navListItem.eq(i).children('a').attr('href').split("/");

        href.pop();

        if (pathname.length < 7) {
          if (pathname[pathname.length - 1] == href[href.length - 1] && pathname[pathname.length - 2] == href[href.length - 2]) {
            $navListItem.eq(i).addClass('active');
            if (!$navListItem.eq(i).parents('.nav-list').hasClass('on')) {
              $navListItem.eq(i).parents('.nav-list').addClass('on');
            }
          }
        } else {
          if (pathname[pathname.length - 2] == href[href.length - 2] && pathname[pathname.length - 3] == href[href.length - 3]) {
            $navListItem.eq(i).addClass('active');
            if (!$navListItem.eq(i).parents('.nav-list').hasClass('on')) {
              $navListItem.eq(i).parents('.nav-list').addClass('on');
            }
          }
        }
      }
    }

    $mainListItem.on('click', function () {
      $(this).parents('.nav-list').toggleClass('on');
      $(this).parents('.nav-list').siblings('.nav-list').removeClass('on');

      for (var i = 0; i < $navListItem.length; i++) {
        if ($navListItem.eq(i).hasClass('active')) {
          if ($navListItem.eq(i).parents('.nav-list').hasClass('on')) {
            $navListItem.eq(i).parents('.nav-list').removeClass('active');
          } else {
            $navListItem.eq(i).parents('.nav-list').addClass('active');
          }
        }
      }

    });

    urlCheck(); /* 페이지 로드 시 URL 비교 */

    var $menuButton = $('.header .hamburg-menu'),
        $header = $('.header'),
        $nav = $('.section .nav'),
        $navList = $nav.find('.nav-list'),
        $navListItem = $nav.find('.nav-list-item'),
        $footer = $('.footer');

    $menuButton.on('click', function () {
      $header.toggleClass('on');
      $nav.toggleClass('on');
      $footer.toggleClass('on');

      if (!$nav.hasClass('on')) {
        $navList.removeClass('on');

        for (var i = 0; i < $navListItem.length; i++) {
          if ($navListItem.eq(i).hasClass('active')) {
            if ($navListItem.eq(i).parents('.nav-list').hasClass('on')) {
              $navListItem.eq(i).parents('.nav-list').removeClass('active');
            } else {
              $navListItem.eq(i).parents('.nav-list').addClass('active');
            }
          }
        }

        $('.page-top').addClass('on');
      } else {
        $('.page-top').removeClass('on');
      }
    });
  }

  function folderActive() {
    $('.folder .folder-item .folder-name').on('click', function () {
      $(this).parents('.folder-item').siblings().removeClass('active');
      $(this).parents('.folder-item').addClass('active');
    });
  }

  function folderLoad(list) {
    var $folderList = $('.folder .folder-list'),
        folderAll = '<div class="folder-item active"><div class="folder-name">전체보기</div></div>',
        folderOutside = '<div class="folder-item"><div class="folder-name">폴더 미등록</div></div>',
        folderAdd = '<div class="folder-item folder-add" data-layer-target="add-folder"><span class="icon-plus"></span>폴더 추가</div>',
        folderMore = '<div class="folder-item folder-more"><span class="icon-rounded-caret"></span><span class="folder-name">폴더 더보기</span></div>'
    lastIndex = 0;
    if ($folderList.length !== 0) {
      $('.folder .folder-list').empty();

      for (var i = 0; i < list.length; i++) {
        if ($folderList[0].scrollHeight > $folderList.outerHeight()) {
          var length = $folderList.children().length;
          $folderList.children().eq(length - 1).remove();
          $folderList.children().eq(length - 2).remove();
          $folderList.append(folderMore);

          lastIndex = i - 2;
          break;
        } else {
          $folderList.append(list[i]);
        }
      }

      $('.folder .folder-more').on('click', function () {
        $(this).remove();
        $folderList.addClass('more');

        for (lastIndex; lastIndex < list.length; lastIndex++) {
          $folderList.append(list[lastIndex]);
        }
      });
    }

    ellipsisTooltip();
  }

  function touchOver(elem) {
    var aUrl = elem.attr('href');

    elem.parent().addClass('hover');

    elem.on('transitionend', function () {
      $(location).attr('href', aUrl);
    });
  }

  function detectScrollElement() {
    var scrollElement = $('[data-scrollElement]');

    scrollElement.on('scroll', function () {
      var scrTop = scrollElement.scrollTop(),
          docHgt = scrollElement.innerHeight(),
          scrHgt = scrollElement[0].scrollHeight;

      if (scrTop + docHgt >= scrHgt) {
        appendElement();
        progressBar();
      }
    });
  }

  function appendElement() {
    var obj = {
          0: '<div class="card-user"><div class="item-select-box"><span></span><span></span><span></span><span></span></div><div class="card-user-top"><div class="card-user-toolbar"><label class="custom-checkbox"><input type="checkbox" id=""><span></span></label><div class="card-user-manage"><div class="card-user-state"><span class="badge-state-connect">WEB접속</span><span class="badge-state-connect disabled">FTP접속</span></div><a href="/portfolio/pangx2/v3/detail.html" class="card-user-setting icon-setting"></a></div></div><div class="card-user-info"><div class="card-user-folder"><div class="icon-folder folder-icon context-menu"><div class="context-menu-list"><div class="scrollbar-inner"><div class="context-menu-item">새폴더2</div><div class="context-menu-item">새폴더3</div><div class="context-menu-item">새폴더4</div><div class="context-menu-item">새폴더5</div><div class="context-menu-item">새폴더6</div><div class="context-menu-item">새폴더6</div></div></div></div><div class="folder-name ellipsis-tooltip">새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더</div></div><div class="card-user-ip">222.239.90.109</div></div><div class="card-user-title"><div class="card-user-name">맥도날드</div><div class="card-user-dday">D-999</div></div></div><div class="card-user-body"><div class="url"><a href="http://chlee0120.pangx2.site" target="_blank">http://chlee0120.pangx2.site</a></div><div class="progress" data-progress="true" data-progress-total="1000" data-progress-title="트래픽" data-progress-size="60" data-progress-tooltip="true"><div class="progress-bar"><div class="progress-item traffic" data-progress-value="600"></div></div></div><div class="progress" data-progress="true" data-progress-total="1000" data-progress-title="하드" data-progress-size="60" data-progress-tooltip="true"><div class="progress-bar"><div class="progress-item hard" data-progress-value="600"></div></div></div></div></div>',
          0: '<div class="card-user"><div class="item-select-box"><span></span><span></span><span></span><span></span></div><div class="card-user-top"><div class="card-user-toolbar"><label class="custom-checkbox"><input type="checkbox" id=""><span></span></label><div class="card-user-manage"><div class="card-user-state"><span class="badge-state-connect">WEB접속</span><span class="badge-state-connect disabled">FTP접속</span></div><a href="/portfolio/pangx2/v3/detail.html" class="card-user-setting icon-setting"></a></div></div><div class="card-user-info"><div class="card-user-folder"><div class="icon-folder folder-icon context-menu"><div class="context-menu-list"><div class="scrollbar-inner"><div class="context-menu-item">새폴더2</div><div class="context-menu-item">새폴더3</div><div class="context-menu-item">새폴더4</div><div class="context-menu-item">새폴더5</div><div class="context-menu-item">새폴더6</div><div class="context-menu-item">새폴더6</div></div></div></div><div class="folder-name ellipsis-tooltip">새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더</div></div><div class="card-user-ip">222.239.90.109</div></div><div class="card-user-title"><div class="card-user-name">맥도날드</div><div class="card-user-dday">D-999</div></div></div><div class="card-user-body"><div class="url"><a href="http://chlee0120.pangx2.site" target="_blank">http://chlee0120.pangx2.site</a></div><div class="progress" data-progress="true" data-progress-total="1000" data-progress-title="트래픽" data-progress-size="60" data-progress-tooltip="true"><div class="progress-bar"><div class="progress-item traffic" data-progress-value="600"></div></div></div><div class="progress" data-progress="true" data-progress-total="1000" data-progress-title="하드" data-progress-size="60" data-progress-tooltip="true"><div class="progress-bar"><div class="progress-item hard" data-progress-value="600"></div></div></div></div></div>',
          1: '<div class="card-user"><div class="item-select-box"><span></span><span></span><span></span><span></span></div><div class="card-user-top"><div class="card-user-toolbar"><label class="custom-checkbox"><input type="checkbox" id=""><span></span></label><div class="card-user-manage"><div class="card-user-state"><span class="badge-state-connect">WEB접속</span><span class="badge-state-connect disabled">FTP접속</span></div><a href="/portfolio/pangx2/v3/detail.html" class="card-user-setting icon-setting"></a></div></div><div class="card-user-info"><div class="card-user-folder"><div class="icon-folder folder-icon context-menu"><div class="context-menu-list"><div class="scrollbar-inner"><div class="context-menu-item">새폴더2</div><div class="context-menu-item">새폴더3</div><div class="context-menu-item">새폴더4</div><div class="context-menu-item">새폴더5</div><div class="context-menu-item">새폴더6</div><div class="context-menu-item">새폴더6</div></div></div></div><div class="folder-name ellipsis-tooltip">새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더</div></div><div class="card-user-ip">222.239.90.109</div></div><div class="card-user-title"><div class="card-user-name">맥도날드</div><div class="card-user-dday">D-999</div></div></div><div class="card-user-body"><div class="url"><a href="http://chlee0120.pangx2.site" target="_blank">http://chlee0120.pangx2.site</a></div><div class="progress" data-progress="true" data-progress-total="1000" data-progress-title="트래픽" data-progress-size="60" data-progress-tooltip="true"><div class="progress-bar"><div class="progress-item traffic" data-progress-value="600"></div></div></div><div class="progress" data-progress="true" data-progress-total="1000" data-progress-title="하드" data-progress-size="60" data-progress-tooltip="true"><div class="progress-bar"><div class="progress-item hard" data-progress-value="600"></div></div></div></div></div>',
          2: '<div class="card-user"><div class="item-select-box"><span></span><span></span><span></span><span></span></div><div class="card-user-top"><div class="card-user-toolbar"><label class="custom-checkbox"><input type="checkbox" id=""><span></span></label><div class="card-user-manage"><div class="card-user-state"><span class="badge-state-connect">WEB접속</span><span class="badge-state-connect disabled">FTP접속</span></div><a href="/portfolio/pangx2/v3/detail.html" class="card-user-setting icon-setting"></a></div></div><div class="card-user-info"><div class="card-user-folder"><div class="icon-folder folder-icon context-menu"><div class="context-menu-list"><div class="scrollbar-inner"><div class="context-menu-item">새폴더2</div><div class="context-menu-item">새폴더3</div><div class="context-menu-item">새폴더4</div><div class="context-menu-item">새폴더5</div><div class="context-menu-item">새폴더6</div><div class="context-menu-item">새폴더6</div></div></div></div><div class="folder-name ellipsis-tooltip">새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더</div></div><div class="card-user-ip">222.239.90.109</div></div><div class="card-user-title"><div class="card-user-name">맥도날드</div><div class="card-user-dday">D-999</div></div></div><div class="card-user-body"><div class="url"><a href="http://chlee0120.pangx2.site" target="_blank">http://chlee0120.pangx2.site</a></div><div class="progress" data-progress="true" data-progress-total="1000" data-progress-title="트래픽" data-progress-size="60" data-progress-tooltip="true"><div class="progress-bar"><div class="progress-item traffic" data-progress-value="600"></div></div></div><div class="progress" data-progress="true" data-progress-total="1000" data-progress-title="하드" data-progress-size="60" data-progress-tooltip="true"><div class="progress-bar"><div class="progress-item hard" data-progress-value="600"></div></div></div></div></div>',
          3: '<div class="card-user"><div class="item-select-box"><span></span><span></span><span></span><span></span></div><div class="card-user-top"><div class="card-user-toolbar"><label class="custom-checkbox"><input type="checkbox" id=""><span></span></label><div class="card-user-manage"><div class="card-user-state"><span class="badge-state-connect">WEB접속</span><span class="badge-state-connect disabled">FTP접속</span></div><a href="/portfolio/pangx2/v3/detail.html" class="card-user-setting icon-setting"></a></div></div><div class="card-user-info"><div class="card-user-folder"><div class="icon-folder folder-icon context-menu"><div class="context-menu-list"><div class="scrollbar-inner"><div class="context-menu-item">새폴더2</div><div class="context-menu-item">새폴더3</div><div class="context-menu-item">새폴더4</div><div class="context-menu-item">새폴더5</div><div class="context-menu-item">새폴더6</div><div class="context-menu-item">새폴더6</div></div></div></div><div class="folder-name ellipsis-tooltip">새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더</div></div><div class="card-user-ip">222.239.90.109</div></div><div class="card-user-title"><div class="card-user-name">맥도날드</div><div class="card-user-dday">D-999</div></div></div><div class="card-user-body"><div class="url"><a href="http://chlee0120.pangx2.site" target="_blank">http://chlee0120.pangx2.site</a></div><div class="progress" data-progress="true" data-progress-total="1000" data-progress-title="트래픽" data-progress-size="60" data-progress-tooltip="true"><div class="progress-bar"><div class="progress-item traffic" data-progress-value="600"></div></div></div><div class="progress" data-progress="true" data-progress-total="1000" data-progress-title="하드" data-progress-size="60" data-progress-tooltip="true"><div class="progress-bar"><div class="progress-item hard" data-progress-value="600"></div></div></div></div></div>',
          4: '<div class="card-user"><div class="item-select-box"><span></span><span></span><span></span><span></span></div><div class="card-user-top"><div class="card-user-toolbar"><label class="custom-checkbox"><input type="checkbox" id=""><span></span></label><div class="card-user-manage"><div class="card-user-state"><span class="badge-state-connect">WEB접속</span><span class="badge-state-connect disabled">FTP접속</span></div><a href="/portfolio/pangx2/v3/detail.html" class="card-user-setting icon-setting"></a></div></div><div class="card-user-info"><div class="card-user-folder"><div class="icon-folder folder-icon context-menu"><div class="context-menu-list"><div class="scrollbar-inner"><div class="context-menu-item">새폴더2</div><div class="context-menu-item">새폴더3</div><div class="context-menu-item">새폴더4</div><div class="context-menu-item">새폴더5</div><div class="context-menu-item">새폴더6</div><div class="context-menu-item">새폴더6</div></div></div></div><div class="folder-name ellipsis-tooltip">새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더</div></div><div class="card-user-ip">222.239.90.109</div></div><div class="card-user-title"><div class="card-user-name">맥도날드</div><div class="card-user-dday">D-999</div></div></div><div class="card-user-body"><div class="url"><a href="http://chlee0120.pangx2.site" target="_blank">http://chlee0120.pangx2.site</a></div><div class="progress" data-progress="true" data-progress-total="1000" data-progress-title="트래픽" data-progress-size="60" data-progress-tooltip="true"><div class="progress-bar"><div class="progress-item traffic" data-progress-value="600"></div></div></div><div class="progress" data-progress="true" data-progress-total="1000" data-progress-title="하드" data-progress-size="60" data-progress-tooltip="true"><div class="progress-bar"><div class="progress-item hard" data-progress-value="600"></div></div></div></div></div>',
          5: '<div class="card-user"><div class="item-select-box"><span></span><span></span><span></span><span></span></div><div class="card-user-top"><div class="card-user-toolbar"><label class="custom-checkbox"><input type="checkbox" id=""><span></span></label><div class="card-user-manage"><div class="card-user-state"><span class="badge-state-connect">WEB접속</span><span class="badge-state-connect disabled">FTP접속</span></div><a href="/portfolio/pangx2/v3/detail.html" class="card-user-setting icon-setting"></a></div></div><div class="card-user-info"><div class="card-user-folder"><div class="icon-folder folder-icon context-menu"><div class="context-menu-list"><div class="scrollbar-inner"><div class="context-menu-item">새폴더2</div><div class="context-menu-item">새폴더3</div><div class="context-menu-item">새폴더4</div><div class="context-menu-item">새폴더5</div><div class="context-menu-item">새폴더6</div><div class="context-menu-item">새폴더6</div></div></div></div><div class="folder-name ellipsis-tooltip">새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더</div></div><div class="card-user-ip">222.239.90.109</div></div><div class="card-user-title"><div class="card-user-name">맥도날드</div><div class="card-user-dday">D-999</div></div></div><div class="card-user-body"><div class="url"><a href="http://chlee0120.pangx2.site" target="_blank">http://chlee0120.pangx2.site</a></div><div class="progress" data-progress="true" data-progress-total="1000" data-progress-title="트래픽" data-progress-size="60" data-progress-tooltip="true"><div class="progress-bar"><div class="progress-item traffic" data-progress-value="600"></div></div></div><div class="progress" data-progress="true" data-progress-total="1000" data-progress-title="하드" data-progress-size="60" data-progress-tooltip="true"><div class="progress-bar"><div class="progress-item hard" data-progress-value="600"></div></div></div></div></div>',
          6: '<div class="card-user"><div class="item-select-box"><span></span><span></span><span></span><span></span></div><div class="card-user-top"><div class="card-user-toolbar"><label class="custom-checkbox"><input type="checkbox" id=""><span></span></label><div class="card-user-manage"><div class="card-user-state"><span class="badge-state-connect">WEB접속</span><span class="badge-state-connect disabled">FTP접속</span></div><a href="/portfolio/pangx2/v3/detail.html" class="card-user-setting icon-setting"></a></div></div><div class="card-user-info"><div class="card-user-folder"><div class="icon-folder folder-icon context-menu"><div class="context-menu-list"><div class="scrollbar-inner"><div class="context-menu-item">새폴더2</div><div class="context-menu-item">새폴더3</div><div class="context-menu-item">새폴더4</div><div class="context-menu-item">새폴더5</div><div class="context-menu-item">새폴더6</div><div class="context-menu-item">새폴더6</div></div></div></div><div class="folder-name ellipsis-tooltip">새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더</div></div><div class="card-user-ip">222.239.90.109</div></div><div class="card-user-title"><div class="card-user-name">맥도날드</div><div class="card-user-dday">D-999</div></div></div><div class="card-user-body"><div class="url"><a href="http://chlee0120.pangx2.site" target="_blank">http://chlee0120.pangx2.site</a></div><div class="progress" data-progress="true" data-progress-total="1000" data-progress-title="트래픽" data-progress-size="60" data-progress-tooltip="true"><div class="progress-bar"><div class="progress-item traffic" data-progress-value="600"></div></div></div><div class="progress" data-progress="true" data-progress-total="1000" data-progress-title="하드" data-progress-size="60" data-progress-tooltip="true"><div class="progress-bar"><div class="progress-item hard" data-progress-value="600"></div></div></div></div></div>',
          7: '<div class="card-user"><div class="item-select-box"><span></span><span></span><span></span><span></span></div><div class="card-user-top"><div class="card-user-toolbar"><label class="custom-checkbox"><input type="checkbox" id=""><span></span></label><div class="card-user-manage"><div class="card-user-state"><span class="badge-state-connect">WEB접속</span><span class="badge-state-connect disabled">FTP접속</span></div><a href="/portfolio/pangx2/v3/detail.html" class="card-user-setting icon-setting"></a></div></div><div class="card-user-info"><div class="card-user-folder"><div class="icon-folder folder-icon context-menu"><div class="context-menu-list"><div class="scrollbar-inner"><div class="context-menu-item">새폴더2</div><div class="context-menu-item">새폴더3</div><div class="context-menu-item">새폴더4</div><div class="context-menu-item">새폴더5</div><div class="context-menu-item">새폴더6</div><div class="context-menu-item">새폴더6</div></div></div></div><div class="folder-name ellipsis-tooltip">새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더</div></div><div class="card-user-ip">222.239.90.109</div></div><div class="card-user-title"><div class="card-user-name">맥도날드</div><div class="card-user-dday">D-999</div></div></div><div class="card-user-body"><div class="url"><a href="http://chlee0120.pangx2.site" target="_blank">http://chlee0120.pangx2.site</a></div><div class="progress" data-progress="true" data-progress-total="1000" data-progress-title="트래픽" data-progress-size="60" data-progress-tooltip="true"><div class="progress-bar"><div class="progress-item traffic" data-progress-value="600"></div></div></div><div class="progress" data-progress="true" data-progress-total="1000" data-progress-title="하드" data-progress-size="60" data-progress-tooltip="true"><div class="progress-bar"><div class="progress-item hard" data-progress-value="600"></div></div></div></div></div>',
          8: '<div class="card-user"><div class="item-select-box"><span></span><span></span><span></span><span></span></div><div class="card-user-top"><div class="card-user-toolbar"><label class="custom-checkbox"><input type="checkbox" id=""><span></span></label><div class="card-user-manage"><div class="card-user-state"><span class="badge-state-connect">WEB접속</span><span class="badge-state-connect disabled">FTP접속</span></div><a href="/portfolio/pangx2/v3/detail.html" class="card-user-setting icon-setting"></a></div></div><div class="card-user-info"><div class="card-user-folder"><div class="icon-folder folder-icon context-menu"><div class="context-menu-list"><div class="scrollbar-inner"><div class="context-menu-item">새폴더2</div><div class="context-menu-item">새폴더3</div><div class="context-menu-item">새폴더4</div><div class="context-menu-item">새폴더5</div><div class="context-menu-item">새폴더6</div><div class="context-menu-item">새폴더6</div></div></div></div><div class="folder-name ellipsis-tooltip">새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더새폴더</div></div><div class="card-user-ip">222.239.90.109</div></div><div class="card-user-title"><div class="card-user-name">맥도날드</div><div class="card-user-dday">D-999</div></div></div><div class="card-user-body"><div class="url"><a href="http://chlee0120.pangx2.site" target="_blank">http://chlee0120.pangx2.site</a></div><div class="progress" data-progress="true" data-progress-total="1000" data-progress-title="트래픽" data-progress-size="60" data-progress-tooltip="true"><div class="progress-bar"><div class="progress-item traffic" data-progress-value="600"></div></div></div><div class="progress" data-progress="true" data-progress-total="1000" data-progress-title="하드" data-progress-size="60" data-progress-tooltip="true"><div class="progress-bar"><div class="progress-item hard" data-progress-value="600"></div></div></div></div></div>'
        },
        appendElement = $('[data-appendElement]'),
        objLength = Object.keys(obj).length;

    for (appendElement_i; appendElement_i < objLength; appendElement_i++) {
      if (appendElement_i >= viewNum) {
        appendElement_i = viewNum;
        viewNum = viewNum + 4;
        break;
      } else {
        appendElement.append(obj[appendElement_i]);
      }
    }

    progressBar();
    cardSelected();
    ellipsisTooltip();
    layerActive();
    $('.scrollbar-inner').not('.scroll-wrapper, .scroll-content').scrollbar();
  }

  function contextMenu() {
    $(document).on('click', function (e) {
      if ($(e.target).is('.context-menu')) {
        $('.context-menu').children().removeClass('on');
        $(e.target).children().toggleClass('on');
      } else if (!$(e.target).parent().is('.context-menu-list')) {
        $('.context-menu-list').removeClass('on');
      }
    });

    $('.context-tooltip').on({
      mouseenter: function () {
        var string = $(this).text(),
            list = '',
            posTop = $(this).offset().top + 'px',
            posLeft = $(this).offset().left + 'px';

        list += '<div class="context-tooltip-box">' + string + '</div>'

        $('body').append(list);
        $('.context-tooltip-box').css({
          'top': posTop,
          'left': posLeft,
        });
      },
      mouseleave: function () {
        $('.context-tooltip-box').remove();
      }
    });
  }
});

function layerActive() {
  $('[data-layer-target]').on('click', function () {
    var target = $(this).data('layer-target');
    var scrollTop = $('.contents.scrollbar-inner').not('.scroll-wrapper').scrollTop();
    var halfHeight = $('.contents.scrollbar-inner').not('.scroll-wrapper').outerHeight() * 0.5;

    $('[data-layer]').not('[data-layer=' + target + ']').fadeOut();
    // $('[data-layer='+target+']').not('.layer-box').css('top', scrollTop + halfHeight);
    $('[data-layer=' + target + ']').fadeIn();

    $('.layer-bg').fadeIn();
  });

  $('.layer-close').on('click', function () {
    $(this).parents('[data-layer]').fadeOut();
    $('.layer-bg').fadeOut();
  });

  $('.layer-confirm').on('click', function () {
    $(this).parents('[data-layer]').fadeOut();
    $('.layer-bg').fadeOut();
  });

  $('.layer-bg').off('click').on('click', function () {
    $('[data-layer]').fadeOut();
    $(this).fadeOut();
  });
}

function dropdown() {
  var $dropdown = $('.dropdown');

  for (var i = 0; i < $dropdown.length; i++) {
    var $this = $dropdown.eq(i);

    $this.on('click', function (e) {
      $(this).find('.dropdown-list').fadeToggle();
    });
  }

  $(document).click(function (e) {
    var classList = e.target.classList;

    for (var i = 0; i < classList.length; i++) {
      if (classList[i] != 'user-info-box') {
        $('.dropdown .dropdown-list').fadeOut();
      }
    }
  });
}

function progressBar() {
  // $(document).ready(function(){
  // jQuery 선언 확인
  if (typeof jQuery == 'undefined') {
    console.log('<!-- jQuery is not defined -->');
    return;
  } else {
    var $ELEMENT = $('[data-progress="true"]').not('.active');

    // 함수실행
    for (var i = 0; i < $ELEMENT.length; i++) {
      var $THIS = $ELEMENT.eq(i),
          $CHILD_ITEM = $THIS.find('.progress-item'),
          $ALL_ITEM = $THIS.find('[data-progress-value]'),
          CURRENT_VALUE = 0,
          TITLE = $THIS.data('progress-title'),
          SIZE = $THIS.data('progress-size'),
          LEGEND = $THIS.data('progress-legend'),
          TOTAL = $THIS.data('progress-total'),
          TIP = $THIS.data('progress-tooltip'),
          CAPTION_ALIGN = $THIS.data('progress-caption-align');

      init();
      modify();
      tooltip();
      reset();
    }

    // initialize
    function init() {
      $THIS.children().css({
        'font-size': SIZE + 'px'
      });
      for (var i = 0; i < $CHILD_ITEM.length; i++) {
        var $innerItem = $CHILD_ITEM.eq(i).children(),
            childValue = $CHILD_ITEM.eq(i).data('progress-value');

        CURRENT_VALUE += $CHILD_ITEM.eq(i).data('progress-value');

        if ($CHILD_ITEM.eq(i).children().length > 0) {
          for (var j = 0; j < $innerItem.length; j++) {
            var $this = $innerItem.eq(j),
                thisValue = $this.data('progress-value');
            $this.css({
              'z-index': $innerItem.length - j,
              'flex-basis': per(thisValue, childValue)
            });
          }
        }

        $CHILD_ITEM.eq(i).css({
          'z-index': $CHILD_ITEM.length - i,
          'flex-basis': per(childValue, TOTAL)
        });
      }

      $THIS.addClass('active');

      loadCaption();
      loadLegend();
    }

    //reload
    function reload(el) {
      var $this = el.parents('.progress'),
          $CHILD_ITEM = $this.find('.progress-item'),
          $ALL_ITEM = $this.find('[data-progress-value]'),
          CURRENT_VALUE = 0,
          TITLE = $this.attr('data-progress-title'),
          SIZE = $this.attr('data-progress-size'),
          LEGEND = $this.attr('data-progress-legend'),
          TOTAL = Number($this.attr('data-progress-total')),
          TIP = $this.attr('data-progress-tooltip'),
          CAPTION_ALIGN = $this.attr('data-progress-caption-align');

      for (var i = 0; i < $CHILD_ITEM.length; i++) {
        var $innerItem = $CHILD_ITEM.eq(i).children(),
            childValue = Number($CHILD_ITEM.eq(i).attr('data-progress-value'));

        CURRENT_VALUE += Number($CHILD_ITEM.eq(i).attr('data-progress-value'));

        if ($CHILD_ITEM.eq(i).children().length > 0) {
          for (var j = 0; j < $innerItem.length; j++) {
            var $this = $innerItem.eq(j),
                thisValue = Number($this.attr('data-progress-value'));
            $this.css({
              'z-index': $innerItem.length - j,
              'flex-basis': per(thisValue, childValue)
            });
          }
        }

        $CHILD_ITEM.eq(i).css({
          'z-index': $CHILD_ITEM.length - i,
          'flex-basis': per(childValue, TOTAL)
        });
      }
    }

    // modify
    function modify() {
      if ($THIS.find('.progress-modify').length > 0) {
        var $this = $THIS.find('.progress-modify'),
            $modifyInput = $THIS.find('.form-control'),
            $modifyButton = $THIS.find('.progress-modify-apply'),
            popName = $THIS.find('.progress-modify-apply').attr('data-progress-layer-target');

        $this.find('.form-control').val(TOTAL);

        $this.find('.progress-modify-open').on('click', function () {
          if ($(this).hasClass('icon-setting')) {
            $(this).removeClass('icon-setting').addClass('icon-close');
          } else {
            $(this).removeClass('icon-close').addClass('icon-setting');
          }
          $(this).siblings('.progress-modify-box').toggleClass('on');
        });

        $modifyInput.on('keydown', function (e) {
          if (e.keyCode == 13) {
            var $this = $(this),
                currentTotal = $this.parents('.progress').attr('data-progress-total'),
                thisTotal = Number($this.val());

            if (CURRENT_VALUE > thisTotal || isNaN(thisTotal)) {
              $('.layer-bg').fadeIn();
              $('[data-layer="usage-error_1"]').fadeIn();
              return false;
            } else if (currentTotal == thisTotal) {
              $('.layer-bg').fadeIn();
              $('[data-layer="usage-error_2"]').fadeIn();
              return false;
            } else {

              $('.layer-bg').fadeIn();
              $('[data-layer="' + popName + '"]').find('.current-usage span').text(unit(TOTAL));
              $('[data-layer="' + popName + '"]').find('.change-usage span').text(unit(thisTotal));
              $('[data-layer="' + popName + '"]').fadeIn();

              $('[data-layer="' + popName + '"] .layer-confirm').on('click', function () {
                $this.parents('.progress').find('.progress-total-value').text(unit(thisTotal));
                $this.parents('.progress').attr('data-progress-total', thisTotal);
                $this.parents('.progress-modify-box').removeClass('on');

                reload($this);
              });

              $this.parents('.progress-modify-box').siblings('.progress-modify-open').removeClass('icon-close').addClass('icon-setting');
            }
          }
        });

        $modifyButton.on('click', function () {
          var $this = $(this),
              currentTotal = $this.parents('.progress').attr('data-progress-total'),
              thisTotal = Number($this.siblings('.input-box').children('.form-control').val());

          if (CURRENT_VALUE > thisTotal || isNaN(thisTotal)) {
            $('.layer-bg').fadeIn();
            $('[data-layer="usage-error_1"]').fadeIn();
            return false;
          } else if (currentTotal == thisTotal) {
            $('.layer-bg').fadeIn();
            $('[data-layer="usage-error_2"]').fadeIn();
            return false;
          } else {

            $('.layer-bg').fadeIn();
            $('[data-layer="' + popName + '"]').find('.current-usage span').text(unit(TOTAL));
            $('[data-layer="' + popName + '"]').find('.change-usage span').text(unit(thisTotal));
            $('[data-layer="' + popName + '"]').fadeIn();

            $('[data-layer="' + popName + '"] .layer-confirm').on('click', function () {
              $this.parents('.progress').find('.progress-total-value').text(unit(thisTotal));
              $this.parents('.progress').attr('data-progress-total', thisTotal);
              $this.parents('.progress-modify-box').removeClass('on');

              reload($this);
            });

            $this.parents('.progress-modify-box').siblings('.progress-modify-open').removeClass('icon-close').addClass('icon-setting');
          }
        });
      }
    }

    // caption 추가
    function loadCaption() {
      if ($THIS.children('.progress-caption').length < 1) {
        var list = '';

        list += '<div class="progress-caption">';
        if (TITLE != undefined) {
          list += '<div class="progress-title">' + TITLE + '</div>';
        } else {
          list += '<div class="progress-title"></div>';
        }
        if (TOTAL != undefined) {
          list += '<div class="progress-total">' + unit(TOTAL) + '</div>';
        }
        list += '</div>'

        $THIS.prepend(list);

        if (CAPTION_ALIGN == 'left') {
          $THIS.children('.progress-caption').addClass('left');
        } else if (CAPTION_ALIGN == 'right') {
          $THIS.children('.progress-caption').addClass('right');
        } else if (CAPTION_ALIGN == 'center') {
          $THIS.children('.progress-caption').addClass('center');
        }
      }
    }

    // legend 추가
    function loadLegend() {
      if (LEGEND == true) {
        if ($THIS.children('.progress-legend').length < 1) {
          var list = '';

          list += '<div class="progress-legend">';
          list += '<div class="progress-legend-list">';
          for (var i = 0; i < $CHILD_ITEM.length; i++) {
            var $this = $CHILD_ITEM.eq(i),
                thisBg = $this.css('background-color'),
                thisValue = $this.data('progress-value'),
                thisName = $this.data('progress-name'),
                $innerItem = $this.children();

            if ($innerItem.length > 0) {
              for (var j = 0; j < $innerItem.length; j++) {
                var itemValue = $innerItem.eq(j).data('progress-value'),
                    itemName = $innerItem.eq(j).data('progress-name'),
                    itemBg = $innerItem.eq(j).css('background-color');

                list += '<div class="progress-legend-item"><div class="progress-legend-icon" style="background-color:' + itemBg + '"></div><div class="progress-legend-amount">' + itemName + ' ' + unit(itemValue) + '</div></div>'
              }
            }

            list += '<div class="progress-legend-item"><div class="progress-legend-icon" style="background-color:' + thisBg + '"></div><div class="progress-legend-amount">' + thisName + ' ' + unit(thisValue) + '</div></div>'
          }
          list += '</div>';
          list += '<div class="progress-legend-remain">';
          list += '<div class="progress-legend-icon"></div>';
          list += '<div class="progress-legend-amount">여유공간 ' + unit(TOTAL - CURRENT_VALUE) + '</div>';
          list += '</div>';
          list += '</div>';

          $THIS.append(list);
        }
      }
    }

    // reset
    function reset() {
      var $this = $THIS.find('.progress-reset');

      if ($this.length > 0) {
        $('[data-layer="traffic-reset"] .layer-confirm').on('click', function () {
          var $CHILD_ITEM = $this.parents('.progress').find('.progress-item'),
              $legend = $this.parents('.progress').find('.progress-legend'),
              $innerItem = $CHILD_ITEM.eq(i).children();

          for (var i = 0; i < $CHILD_ITEM.length; i++) {
            if ($CHILD_ITEM.eq(i).children().length > 0) {
              for (var j = 0; j < $innerItem.length; j++) {
                $innerItem.eq(j).attr('data-progress-value', '0');
              }
            }

            $CHILD_ITEM.eq(i).attr('data-progress-value', '0');
          }

          CURRENT_VALUE = 0;

          reload($this);

          $legend.remove();

          var list = '';

          list += '<div class="progress-legend">';
          list += '<div class="progress-legend-list">';
          for (var i = 0; i < $CHILD_ITEM.length; i++) {
            var $childItem = $CHILD_ITEM.eq(i),
                thisBg = $childItem.css('background-color'),
                thisValue = Number($childItem.attr('data-progress-value')),
                thisName = $childItem.attr('data-progress-name'),
                $innerItem = $childItem.children();

            if ($innerItem.length > 0) {
              for (var j = 0; j < $innerItem.length; j++) {
                var itemValue = Number($innerItem.eq(j).attr('data-progress-value')),
                    itemName = $innerItem.eq(j).attr('data-progress-name'),
                    itemBg = $innerItem.eq(j).css('background-color');

                list += '<div class="progress-legend-item"><div class="progress-legend-icon" style="background-color:' + itemBg + '"></div><div class="progress-legend-amount">' + itemName + ' ' + unit(itemValue) + '</div></div>'
              }
            }

            list += '<div class="progress-legend-item"><div class="progress-legend-icon" style="background-color:' + thisBg + '"></div><div class="progress-legend-amount">' + thisName + ' ' + unit(thisValue) + '</div></div>'
          }
          list += '</div>';
          list += '</div>';
          list += '</div>';

          $this.parents('.progress').append(list);
        });
      }
    }

    // tooltip
    function tooltip() {
      var list = '';

      if (TIP == true) {
        for (var i = 0; i < $ALL_ITEM.length; i++) {
          var $this = $ALL_ITEM.eq(i),
              thisValue = $this.data('progress-value');

          list += '<div class="progress-tip">' + unit(thisValue) + '</div>';

          $this.append(list);

          $this.on({
            mouseenter: function () {
              $this.children('.progress-tip').addClass('on');
            },
            mouseleave: function () {
              $this.children('.progress-tip').removeClass('on');
            }
          });
        }
      }
    }
  }
  // });
}

// percent 단위 변환
function per(current, all) {
  var value = Number(current),
      total = Number(all);
  return (value / total) * 100 + '%'
}

// GB, MB 단위 적용
function unit(num) {
  var value = Number(num),
      res = value / 1000;

  if (res > 1 || res == 1) {
    if ((res / 1000) > 1 || (res / 1000) == 1) {
      return (res / 1000).toFixed(0) + 'TB'
    } else {
      return res.toFixed(0) + 'GB'
    }
  } else {
    return value + 'MB'
  }
}

function tabGroup() {
  $('.tab-group .tab-header .tab-header-item').on('click', function () {
    var idx = $(this).index();
    $(this).addClass('selected').siblings('.tab-header-item').removeClass('selected');
    $('.tab-group .tab-body .tab-contents').eq(idx).addClass('on').siblings('.tab-contents').removeClass('on');
  });
}

function attachFileSingle(){
  var $input = $('.custom-file-single').children('.input-file');

  for (var i = 0; i < $input.length; i++) {
    var $this = $input.eq(i);

    $this.on('change', function(){
      var value = $(this).val().replace(/^.*\\/, "");

      $(this).siblings('.form-control').val(value);
    });
  }
}
