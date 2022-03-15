function portfolio(scrTop){
  var pTop = 100;
  var pItem = document.querySelectorAll('.item');
  var pItemTop = [];
  var threshold = 32;
  var scaleSize;
  var min;

  for (var i=0; i<pItem.length; i++) {
    pItem[i].style.cssText = 'transform: translateY('+ (i * threshold) +'px)';

    if ( i === 0 ) {
      pItemTop[i] = pTop;
    } else {
      pItemTop[i] = pTop + (pItem[i].clientHeight * i) + (i * threshold);
    }
  }
}


window.onload = function() {
  var curTop = parseInt(window.scrollY);

  portfolio(curTop);
}